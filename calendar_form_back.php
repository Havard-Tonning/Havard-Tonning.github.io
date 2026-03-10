<?php
session_start();

ini_set('display_errors', 1);
error_reporting(E_ALL);


include 'db.php';

$eventName = $description = $eventTime = $type = "";
$errors = [];
$success = false;

$categoryMap = [
    "sport"   => 1,
    "concert" => 2,
    "meeting" => 3,
    "basar"   => 4,
    "other"   => 5
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $eventName   = $_POST["eventName"]   ?? "";
    $description = $_POST["description"] ?? "";
    $eventTime   = $_POST["eventTime"]   ?? "";
    $type        = $_POST["eventType"]   ?? "";

    if (empty(trim($eventName))) {
        $errors[] = "EventNameError";
    }

    if (empty(trim($description))) {
        $errors[] = "DescriptionError";
    }

    if (empty($eventTime)) {
        $errors[] = "EventTimeError";
    } else {
        $dt = DateTime::createFromFormat('Y-m-d\TH:i', $eventTime);
        if (!$dt) {
            $errors[] = "EventTimeFormatError";
        } else {
            $eventTime = $dt->format('Y-m-d H:i:s');
        }
    }

    if (empty($type) || !array_key_exists($type, $categoryMap)) {
        $errors[] = "TypeError";
    }

    if (empty($errors)) {
        $success = true;
        $catnum = $categoryMap[$type];
        $userID = $_SESSION['userID']; 
        writeEventToDB($eventName, $description, $eventTime, $catnum, $userID);
    }
}

function writeEventToDB($eventName, $description, $eventTime, $catnum, $userID) {
    $conn = createConn();

    $sql = "INSERT INTO Events (UserID, Title, Description, Date, Catnum) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isssi", $userID, $eventName, $description, $eventTime, $catnum);
    $stmt->execute();
    $conn->close();
}

include 'calendar_form_front.php';
?>