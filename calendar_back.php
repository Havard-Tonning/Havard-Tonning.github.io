<?php
require_once 'login_back.php'; 

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

    echo json_encode(fetchEvents());
?>