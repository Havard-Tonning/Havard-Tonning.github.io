<?php
require_once 'db.php'; 
session_start();

ini_set('display_errors', 1);
error_reporting(E_ALL);


function isLocalUser(){
    $conn = createConn(); 

    $sql = "SELECT * FROM `Users` WHERE `username` = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $_SESSION["username"]);
    $stmt->execute();
    
    $results = $stmt -> get_result();

    if($row = $results -> fetch_assoc()){
        if($row["RoleNum"] == 2){
            $stmt->close();
            $conn->close();    
            return true;
        }
    }
    $stmt->close();
    $conn->close();    
    return false;
}

function fetchQuestions(){
    $conn = createConn(); 

    $sql = "SELECT * FROM `question` JOIN `Users` USING(UserID)";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $results = $stmt -> get_result();
    
    $questions = [];

    while($row = $results -> fetch_assoc()){
        $questions[] = [
            "questionID"    => $row["QuestionID"],
            "userID"        => $row["UserID"],
            "text"          => $row["Text"],
            "timeAdded"     => $row["TimeAdded"],
            "username"      => $row["Username"],
        ];
    }

    $stmt->close();
    $conn->close();    

    return $questions;
}


function fetchAnswers($questionID){
    $conn = createConn(); 

    $sql = "SELECT a.AnswerID, a.QuestionID, a.Text, u.Username FROM Answer a JOIN Users u USING(UserID) WHERE a.QuestionID = ? ORDER BY a.CreatedAt ASC";
   $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $questionID);
    $stmt->execute();
    $results = $stmt->get_result();
    
    $answers = [];

    while($row = $results -> fetch_assoc()){
        $questions[] = [
            "answerID"      => $row["AnswerID"],
            "username"      => $row["Username"],
            "text"          => $row["Text"],
            "createdAt"     => $row["CreatedAt"],
        ];
    }

    $stmt->close();
    $conn->close();    

    return $answers;
}

if (isset($_GET['answers']) && isset($_GET['questionID'])) {
    echo json_encode(fetchAnswers((int)$_GET['questionID']));
} else {
    echo json_encode(fetchQuestions());
}
?>