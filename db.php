<?php

require_once 'db_config.php';
function createConn(){


    // Create connection
     $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else{
        $conn->set_charset("utf8mb4");
        return $conn;
    }

}
?>