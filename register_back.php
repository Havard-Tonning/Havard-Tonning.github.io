<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Initialize variables
$username = $password = $password2 = $email = $type = $testQ = "";
$errors = [];
$success = false;
$localFlag = false;

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $username = $_POST["username"] ?? "";
    $password = $_POST["password"] ?? "";
    $password2 = $_POST["password2"] ?? "";
    $email = $_POST["email"] ?? "";
    $type = $_POST["type"] ?? "";
    $testQ = $_POST["testQ"] ?? "";
    
    // Validate username
    if (strlen($username) < 3 || !ctype_alpha($username)) {
        $errors[] = "UserError";
    }
    
    // Validate password
    if (strlen($password) < 8 || preg_match_all('/\d/', $password) < 3) {
        $errors[] = "PassError";
    }
    
    // Validate password match
    if ($password !== $password2) {
        $errors[] = "MatchError";
    }
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "EmailError";
    }
    
    // Validate type
    if (empty($type)) {
        $errors[] = "TypeError";
    }
    elseif($type == "local"){
        $localFlag = true;
    }

    if($type == "local"){
        if (empty($testQ) || !(strtolower($testQ) == "gul")){
            $errors[] = "TestError";
        }
    }

    // If no errors, process registration
    if (empty($errors)) {
        $success = true;

        $password = password_hash($password, PASSWORD_DEFAULT);

        writeUserToDB($username, $email, $password, $type);
    }
}

function writeUserToDB($username, $email, $password, $type){
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

    $roleNum = ($type == "local") ? 2 : 2;

    $sql = "INSERT INTO Users (Username, Email, PassHash, RoleNum) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssi", $username, $email, $password, $roleNum);
    $stmt->execute();

    $conn->close();
}

include 'register_front.php';
?>