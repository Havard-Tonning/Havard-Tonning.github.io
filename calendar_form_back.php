<?php
session_start();

include 'db.php';

$eventName = $description = $eventTime = $type = "";
$errors = [];
$success = false;

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
        }
    }

    $allowedTypes = ["sport", "concert", "meeting", "basar", "other"];
    if (empty($type) || !in_array($type, $allowedTypes)) {
        $errors[] = "TypeError";
    }

    if (empty($errors)) {
        $success = true;
        writeEventToDB($eventName, $description, $eventTime, $type);
    }
}

function writeEventToDB($eventName, $description, $eventTime, $type) {
    $conn = createConn();

    $sql = "INSERT INTO Events (EventName, Description, EventTime, EventType, CreatedBy) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $username = $_SESSION['username'];
    $stmt->bind_param("sssss", $eventName, $description, $eventTime, $type, $username);
    $stmt->execute();
    $conn->close();
}

include 'calendar_form_front.php';
?>