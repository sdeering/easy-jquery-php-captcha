    <?php
    session_start();

    if(isset($_REQUEST['code']))
    {
        echo json_encode(strtolower($_REQUEST['code']) == strtolower($_SESSION['captcha']));
    }
    else
    {
        echo 0; // no code
    }
    ?>
