<?php
session_start();
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

include 'db.php';

if (!canAddCalendarEvents()) {
    $currentPage = basename($_SERVER['PHP_SELF']);
    header("Location: login_back.php?return=" . urlencode($currentPage));
    exit();
}

$eventName = $description = $eventTime = $type = "";
$errors = [];

$categoryMap = [
    "sport"   => 1,
    "concert" => 2,
    "meeting" => 3, 
    "raffle"  => 4, 
    "other"   => 5
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $eventName   = $_POST["eventName"]   ?? "";
    $description = $_POST["description"] ?? "";
    $eventTime   = $_POST["eventTime"]   ?? "";
    $type        = $_POST["eventType"]   ?? "";

    if (empty(trim($eventName))) $errors[] = "Name required";
    if (empty(trim($description))) $errors[] = "Description required";
    
    if (empty($eventTime)) {
        $errors[] = "Time required";
    } else {
        $dt = DateTime::createFromFormat('Y-m-d\TH:i', $eventTime);
        if (!$dt) {
            $errors[] = "Invalid date format";
        } else {
            $eventTimeDB = $dt->format('Y-m-d H:i:s');
        }
    }

    if (empty($errors)) {
        $catnum = $categoryMap[$type] ?? 5;
        $userID = getUserID($_SESSION['username']);

        if ($userID !== null) {
            writeEventToDB($eventName, $description, $eventTimeDB, $catnum, $userID);
            
            header("Location: calendar_front.php"); 
            exit();
        } else {
            $errors[] = "User not found";
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
    return $userID;
}

function writeEventToDB($eventName, $description, $eventTime, $catnum, $userID) {
    $conn = createConn();
    $sql = "INSERT INTO CalendarEvent (UserID, Title, Description, Date, Catnum) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isssi", $userID, $eventName, $description, $eventTime, $catnum);
    $stmt->execute();
    $conn->close();
}

if (!empty($errors)) {
    echo "<h1>Form Errors:</h1>";
    print_r($errors);
    exit(); 
}
include 'calendar_form_front.php';
?>