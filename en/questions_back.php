<?php
session_start();
ini_set('display_errors', 1);
error_reporting(E_ALL);
include 'db.php';

$title = $body = $answerBody = "";
$errors  = [];
$success = false;
$mode    = "question";

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

function isLocalUser() {
    if (!isset($_SESSION['username'])) return false;
    return getRoleNum($_SESSION['username']) == 2;
}

function isModerator() {
    if (!isset($_SESSION['username'])) return false;
    return getRoleNum($_SESSION['username']) == 3;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mode = $_POST["mode"] ?? "question";

    if (!isset($_SESSION['username'])) {
        header("Location: login_back.php?return=questions_front.php");
        exit();
    }

    $userID = getUserID($_SESSION['username']);
    if ($userID === null) {
        $errors[] = "UserNotFoundError";
    }

    if ($mode === "question") {
        $title = trim($_POST["title"] ?? "");
        $body  = trim($_POST["body"]  ?? "");

        if (empty($title)) $errors[] = "TitleError";
        if (empty($body))  $errors[] = "BodyError";

        if (empty($errors)) {
            writeQuestionToDB($title, $body, $userID);
            $success = true;
            $title = $body = "";
        }

    } elseif ($mode === "answer") {
        $questionID = (int)($_POST["questionID"] ?? 0);
        $answerBody = trim($_POST["answerBody"] ?? "");

        if (empty($answerBody))  $errors[] = "AnswerBodyError";
        if ($questionID <= 0)    $errors[] = "QuestionIDError";

        if (empty($errors)) {
            writeAnswerToDB($answerBody, $questionID, $userID);
            $success = true;
            $answerBody = "";
            header("Location: questions_front.php?question=" . $questionID . "&answered=1");
            exit();
        }
    } elseif ($mode === "delete_question") {
        if (isModerator()) {
            $qid = (int)($_POST["questionID"] ?? 0);
            deleteQuestionFromDB($qid);
        }
        header("Location: questions_front.php");
        exit();

    } elseif ($mode === "delete_answer") {
        if (isModerator()) {
            $aid = (int)($_POST["answerID"] ?? 0);
            deleteAnswerFromDB($aid);
            $qid = (int)($_POST["questionID"] ?? 0);
        }
        header("Location: questions_front.php?question=" . $qid);
        exit();
    }
}

function getUserID($username) {
    $conn = createConn();
    $sql  = "SELECT UserID FROM Users WHERE Username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($userID);
    $stmt->fetch();
    $conn->close();
    return $userID ?? null;
}

function writeQuestionToDB($title, $body, $userID) {
    $conn = createConn();
    $sql = "INSERT INTO Question (UserID, Title, Text) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iss", $userID, $title, $body);
    $stmt->execute();
    $conn->close();
}

function writeAnswerToDB($body, $questionID, $userID) {
    $conn = createConn();
    $sql = "INSERT INTO Answer (QuestionID, UserID, Text) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iis", $questionID, $userID, $body);
    $stmt->execute();
    $conn->close();
}

function deleteQuestionFromDB($questionID) {
    $conn = createConn();
    $sql = "DELETE FROM Question WHERE QuestionID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $questionID);
    $stmt->execute();
    $conn->close();
}

function deleteAnswerFromDB($answerID) {
    $conn = createConn();
    $sql = "DELETE FROM Answer WHERE AnswerID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $answerID);
    $stmt->execute();
    $conn->close();
}

include 'questions_front.php';
?>