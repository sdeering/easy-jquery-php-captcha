<?php

//returns true or false to test front end ajax scripts.

$result = (isset($_GET['success'])) ? $_GET['success'] : true;

/*
echo "ssds = ".http_build_query(array());
exit();
*/

$return = Array(

    "result" => $result

);

echo json_encode($return);

?>