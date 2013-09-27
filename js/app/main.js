
//Load Web App JavaScript Dependencies/Plugins
define([
    "jquery",
    "modernizr",
    "underscore",
    "backbone",
    "bootstrap",
    "plugins"
], function($)
{
    $(function()
    {

        //do stuff
        console.log('required plugins loaded...');

        //jQuery Captcha Validation

        WEBAPP = {

            settings: {},
            cache: {},

            init: function() {

                //DOM cache
                this.cache.$form = $('#captcha-form');
                this.cache.$refreshCaptcha = $('#refresh-captcha');
                this.cache.$captchaImg = $('img#captcha');
                this.cache.$captchaInput = $(':input[name="captcha"]');

                this.eventHandlers();
                this.setupValidation();

            },

            eventHandlers: function() {

                //generate new captcha
                WEBAPP.cache.$refreshCaptcha.on('click', function(e)
                {
                    WEBAPP.cache.$captchaImg.attr("src","/php/newCaptcha.php?rnd=" + Math.random());
                });
            },

            setupValidation: function()
            {

                WEBAPP.cache.$form.validate({
                   onkeyup: false,
                   rules: {
                        "firstname": {
                            "required": true
                        },
                        "lastname": {
                            "required": true
                        },
                        "email": {
                            "required": true
                        },
                        "captcha": {
                            "required": true,
                            "remote" :
                            {
                              url: '/php/checkCaptcha.php',
                              type: "post",
                              data:
                              {
                                  code: function()
                                  {
                                      return WEBAPP.cache.$captchaInput.val();
                                  }
                              }
                            }
                        }
                    },
                    messages: {
                        "firstname": "Please enter your first name.",
                        "lastname": "Please enter your last name.",
                        "email": {
                            "required": "Please enter your email address.",
                            "email": "Please enter a valid email address."
                        },
                        "captcha": {
                            "required": "Please enter the verifcation code.",
                            "remote": "Verication code incorrect, please try again."
                        }
                    },
                    submitHandler: function(form)
                    {
                        /* -------- AJAX SUBMIT ----------------------------------------------------- */

                        var submitRequest = $.ajax({
                             type: "POST",
                             url: "/php/dummyScript.php",
                             data: {
                                "data": WEBAPP.cache.$form.serialize()
                            }
                        });

                        submitRequest.done(function(msg)
                        {
                            //success
                            console.log('success');
                            $('body').html('<h1>captcha correct, submit form success!</h1>');
                        });

                        submitRequest.fail(function(jqXHR, textStatus)
                        {
                            //fail
                            console.log( "fail - an error occurred: (" + textStatus + ")." );
                        });

                    }

                });

            }

        }

        WEBAPP.init();

    });
});