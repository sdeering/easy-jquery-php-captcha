<?php

//simulate back-end data which is grabbed from front-end as JSON and populated into Templates.

$data = array(

    "name" => "Sam Deering",

    "location" => "Sydney, Australia",

    "occupation" => "Web Developer",

    "blog" => "jQuery4u.com",

    "website" => "samdeering.com"

);

echo json_encode(array("data2"=>$data));

?>