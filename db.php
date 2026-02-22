<?php
function createConn(){
    $servername = "localhost";
    $DBusername = "wmrhtwvu_admin";
    $DBpassword = "UwS5GHDa(2kb";
    $DBname = "wmrhtwvu_iOlden";

    // Create connection
    $conn = new mysqli($servername, $DBusername, $DBpassword, $DBname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else{
        return $conn;
    }

}
?>