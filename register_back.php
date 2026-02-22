<?php

// Initialise variables
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

    checkUsername($username, $errors);

    // If no errors, process registration
    if (empty($errors)) {
        $success = true;

        $password = password_hash($password, PASSWORD_DEFAULT);

        writeUserToDB($username, $email, $password, $type);
    }
}

function checkUsername($username, &$errors){
    $conn = createConn();

    $sql = "SELECT COUNT(*) FROM Users WHERE Username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($count);
    $stmt->fetch();

    if ($count > 0) {
        $errors[] = "UniqueError";
    }
    
    $conn->close();

}

function writeUserToDB($username, $email, $password, $type){
    $conn = createConn();

    $roleNum = ($type == "local") ? 2 : 1;

    $sql = "INSERT INTO Users (Username, Email, PassHash, RoleNum) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssi", $username, $email, $password, $roleNum);
    $stmt->execute();
    $conn->close();
}

include 'register_front.php';
?>