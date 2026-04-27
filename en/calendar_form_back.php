<?php
session_start();
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'db.php';

$eventName = $description = $eventTime = $type = "";
$errors = [];
$success = false;

$categoryMap = [
    "sport"   => 1,
    "konsert" => 2,
    "moete"   => 3,
    "basar"   => 4,
    "anna"    => 5
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
        $catnum = $categoryMap[$type];
        $userID = getUserID($_SESSION['username']);

        if ($userID === null) {
            $errors[] = "UserNotFoundError";
        } else {
            writeEventToDB($eventName, $description, $eventTime, $catnum, $userID);
            var_dump("Event written. UserID: $userID, Name: $eventName");
            exit();
        }
    }
}

function getUserID($username) {
    $conn = createConn();
    $sql = "SELECT UserID FROM Users WHERE Username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($userID);
    $stmt->fetch();
    $conn->close();
    return $userID ?? null;
}

function writeEventToDB($eventName, $description, $eventTime, $catnum, $userID) {
    $conn = createConn();
    $sql = "INSERT INTO CalendarEvent (UserID, Title, Description, Date, Catnum) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isssi", $userID, $eventName, $description, $eventTime, $catnum);
    $stmt->execute();
    $conn->close();
}

include 'calendar_form_front.php';
?>
?>