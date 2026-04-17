    <?php
    require_once 'db.php'; 

    function isModerator(){
        $conn = createConn();
        $sql = "SELECT * FROM `Users` WHERE `username` = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $_SESSION["username"]);
        $stmt->execute();
        $results = $stmt->get_result();

        if($row = $results->fetch_assoc()){
            if($row["RoleNum"] == 1){
                $stmt->close();
                $conn->close();
                return true;
            }
        }
        $stmt->close();
        $conn->close();
        return false;
    }

    function deleteEvent($id) {
        $conn = createConn();
        $sql = "DELETE FROM `CalendarEvent` WHERE `EventID` = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $stmt->close();
        $conn->close();
    }

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


    function fetchEvents(){
        $conn = createConn(); 

        $sql = "SELECT * FROM `CalendarEvent` JOIN `Users` USING(UserID) JOIN `Categories` USING(CatNum)";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        $results = $stmt -> get_result();
        
        $events = [];

        while($row = $results -> fetch_assoc()){
            switch($row["CatName"]){
                case "basar": 
                    $row["CatName"] = "basar";
                    break;
                case "moete": 
                    $row["CatName"] = "møte";
                    break;
                case "anna":
                    $row["CatName"] = "anna";
                    break;
                case "konsert":
                    $row["CatName"] = "konsert";
                    break;
            }

            $events[] = [
                "id"            => $row["EventID"],
                "title"         => $row["Title"],
                "description"   => $row["Description"],
                "date"          => $row["Date"],
                "username"      => $row["Username"],
                "category"      => $row["CatName"]
            ];
        }

        $stmt->close();
        $conn->close();    

        return $events;
    }


    if (basename(__FILE__) === basename($_SERVER["SCRIPT_FILENAME"])) {
            header('Content-Type: application/json; charset=utf-8'); 
        if ($_SERVER["REQUEST_METHOD"] === "DELETE") {
            $id = intval($_GET["id"] ?? 0);
            deleteEvent($id);
        } else {
            echo json_encode(fetchEvents());
        }
    }
    ?>