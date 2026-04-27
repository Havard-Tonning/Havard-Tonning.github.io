<?php
session_start();
// Enable full error reporting to see why the DB might be rejecting the insert
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
ini_set('display_errors', 1);
error_reporting(E_ALL);

include 'db.php';

if (!canAddCalendarEvents()) {
    header("Location: login_back.php");
    exit();
}

$eventName = $description = $eventTime = $type = "";
$errors = [];

// Ensure these match your <option value="..."> EXACTLY
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

    if (empty(trim($eventName))) $errors[] = "Name is missing";
    if (empty(trim($description))) $errors[] = "Description is missing";
    if (empty($eventTime)) $errors[] = "Date/Time is missing";

    if (empty($errors)) {
        // Convert the HTML datetime-local format to SQL format
        $dt = DateTime::createFromFormat('Y-m-d\TH:i', $eventTime);
        $eventTimeDB = $dt ? $dt->format('Y-m-d H:i:s') : date('Y-m-d H:i:s');
        
        $catnum = $categoryMap[$type] ?? 5;
        $userID = getUserID($_SESSION['username']);

        if ($userID) {
            // Attempt the write
            writeEventToDB($eventName, $description, $eventTimeDB, $catnum, $userID);
            
            // Redirect to verify success
            header("Location: calendar_front.php"); 
            exit();
        } else {
            $errors[] = "Session error: User ID not found.";
        }
    }
}

// Helper Functions
function getUserID($username) {
    $conn = createConn();
    $stmt = $conn->prepare("SELECT UserID FROM Users WHERE Username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($id);
    $stmt->fetch();
    $conn->close();
    return $id;
}

function writeEventToDB($title, $desc, $date, $cat, $uid) {
    $conn = createConn();
    $stmt = $conn->prepare("INSERT INTO CalendarEvent (UserID, Title, Description, Date, Catnum) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("isssi", $uid, $title, $desc, $date, $cat);
    $stmt->execute();
    $conn->close();
}

// If we got here and there are errors, show them and STOP
if (!empty($errors)) {
    echo "<h1>Debug: Form stopped due to errors:</h1>";
    echo "<ul><li>" . implode("</li><li>", $errors) . "</li></ul>";
    echo "<a href='calendar_form_back.php'>Try again</a>";
    exit();
}

include 'calendar_form_front.php';
?>