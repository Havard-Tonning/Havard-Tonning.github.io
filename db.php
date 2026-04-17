<?php
require_once './db_config.php';

function createConn(){
     $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else{
        $conn->set_charset("utf8mb4");
        return $conn;
    }

}

if (!function_exists('getRoleNum')) {
    function getRoleNum($username) {
        $conn = createConn();
        $sql  = "SELECT RoleNum FROM Users WHERE Username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->bind_result($roleNum);
        $stmt->fetch();
        $conn->close();
        return $roleNum ?? 0;
    }
}

if (!function_exists('isModerator')) {
    function isModerator() {
        if (!isset($_SESSION['username'])) return false;
        return getRoleNum($_SESSION['username']) == 3;
    }
}

if (!function_exists('isLocalOrAbove')) {
    function isLocalOrAbove() {
        if (!isset($_SESSION['username'])) return false;
        return getRoleNum($_SESSION['username']) >= 2;
    }
}

if (!function_exists('canAddCalendarEvents')) {
    function canAddCalendarEvents() {
        return isLocalOrAbove();
    }
}
?>