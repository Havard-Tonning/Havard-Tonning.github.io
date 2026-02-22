<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

include 'db.php';

session_start();

$username = $password = "";
$error = false;

$returnUrl = $_REQUEST['return'] ?? 'index.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"] ?? "";
    $password = $_POST["password"] ?? "";

    $userData = checkCredentials($username, $password);

    if ($userData) {
        $_SESSION["username"] = $userData['Username'];
        $_SESSION["type"] = $userData['Type'];
        
        header("Location: " . $returnUrl);
        exit();
    } else {
        $error = true;
    }
}


function checkCredentials($username, $password){
    $conn = createConn();

    $sql = "SELECT Username, PassHash, Type FROM Users WHERE Username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['PassHash'])) {
        return $user;
    }
    return null;
}

include 'login_front.php';
?>