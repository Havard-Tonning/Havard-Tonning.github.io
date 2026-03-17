<?php
session_start();
require_once 'db.php'; 

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

    $sql = "SELECT q.QuestionID, q.UserID, q.Title, q.Text, q.TimeAdded, u.Username,
               COUNT(a.AnswerID) AS AnswerCount
        FROM question q
        JOIN Users u USING(UserID)
        LEFT JOIN Answer a USING(QuestionID)
        GROUP BY q.QuestionID
        ORDER BY q.TimeAdded DESC";

    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $results = $stmt -> get_result();
    
    $questions = [];

    while($row = $results -> fetch_assoc()){
        $questions[] = [
            "id"          => $row["QuestionID"],
            "title"       => $row["Title"],       
            "body"        => $row["Text"],       
            "username"    => $row["Username"],
            "createdAt"   => $row["TimeAdded"],  
            "answerCount" => $row["AnswerCount"],   
        ];
    }

    $stmt->close();
    $conn->close();    

    return $questions;
}


function fetchAnswers($questionID){
    $conn = createConn(); 

    $sql = "SELECT a.AnswerID, a.QuestionID, a.Text, a.CreatedAt, u.Username 
        FROM Answer a 
        JOIN Users u USING(UserID) 
        WHERE a.QuestionID = ? 
        ORDER BY a.CreatedAt ASC";
   $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $questionID);
    $stmt->execute();
    $results = $stmt->get_result();
    
    $answers = [];

    while($row = $results -> fetch_assoc()){
        $answers[] = [
            "id"        => $row["AnswerID"],
            "body"      => $row["Text"],    
            "username"  => $row["Username"],
            "createdAt" => $row["CreatedAt"], 
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