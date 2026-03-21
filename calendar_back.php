<?php
require_once 'db.php'; 
session_start();

function isModerator() {
    if (!isset($_SESSION["username"])) return false;

    $conn = createConn();
    $sql = "SELECT RoleNum FROM `Users` WHERE `username` = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $_SESSION["username"]);
    $stmt->execute();
    $results = $stmt->get_result();

    $isMod = false;
    if ($row = $results->fetch_assoc()) {
        $isMod = $row["RoleNum"] == 1;
    }

    $stmt->close();
    $conn->close();
    return $isMod;
}

function deleteEvent($id) {
    $conn = createConn();
    $sql = "DELETE FROM `CalendarEvent` WHERE `EventID` = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->close();
    $conn->close();
}

function isLocalUser(){
    $conn = createConn(); 

    $sql = "SELECT * FROM `Users` WHERE `username` = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $_SESSION["username"]);
    $stmt->execute();
    
    $results = $stmt -> get_result();

    if($row = $results -> fetch_assoc()){
        if($row["RoleNum"] == 2){
            $stmt->close();
            $conn->close();    
            return true;
        }
    }
    $stmt->close();
    $conn->close();    
    return false;
}


function fetchEvents(){
    $conn = createConn(); 

    $sql = "SELECT * FROM `CalendarEvent` JOIN `Users` USING(UserID) JOIN `Categories` USING(CatNum)";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $results = $stmt -> get_result();
    
    $events = [];

    while($row = $results -> fetch_assoc()){
        $events[] = [
            "id"            => $row["EventID"],
            "title"         => $row["Title"],
            "description"   => $row["Description"],
            "date"          => $row["Date"],
            "username"      => $row["Username"],
            "category"      => $row["CatName"]
        ];
    }


    $stmt->close();
    $conn->close();    

    return $events;
}



if ($_SERVER["REQUEST_METHOD"] === "DELETE") {
    $id = intval($_GET["id"] ?? 0);
    deleteEvent($id);
} else {
    echo json_encode(fetchEvents());
}
?>