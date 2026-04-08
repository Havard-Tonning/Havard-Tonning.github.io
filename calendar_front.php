<?php 
    session_start();
    require_once 'calendar_back.php';


    if (!function_exists('isModerator')) {
    include 'db.php';
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
    function isModerator() {
        if (!isset($_SESSION['username'])) return false;
        return getRoleNum($_SESSION['username']) == 3;
    }
    function isLocalUser() {
        if (!isset($_SESSION['username'])) return false;
        return getRoleNum($_SESSION['username']) == 2;
    }
}
?>

<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calender</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="https://kit.fontawesome.com/e065bf0659.js" crossorigin="anonymous"></script>
    <script defer src="index.js"></script>
        <link rel="alternate" hreflang="no" href="https://iolden.no/calendar_front.php" />
    <link rel="alternate" hreflang="en" href="https://iolden.no/calendar_front.php" />
    <link rel="alternate" hreflang="x-default" href="https://iolden.no/calendar_front.php" />
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>
    <main-header lang="no"></main-header>
    <hamburger-menu></hamburger-menu>

    <div class="roundedbody calendar"> 
        <div class="marginbody">
            <div class="calendarHeader">
                <div class="calendarNav">
                    <button class="navButton" onclick="moveMonth(-1)"><i class="fa-solid fa-chevron-left"></i></button>
                    <h2 id="monthTitle">Februar 2026</h2>
                    <button class="navButton" onclick="moveMonth(1)"><i class="fa-solid fa-chevron-right"></i></button>
                </div>

                <div class="tabs">
                    <div class="tab active" id="tabCalendar"onclick="setView('calendar')"><i class="fa-solid fa-calendar-days"></i></div>
                    <div class="tab" id="tabList" onclick="setView('list')"><i class="fa-solid fa-list"></i></div>
                </div>
            </div>

            <div class="calendarView" id="calendarView">
                <div class="calendarContainer">
                    <div id="calendarGrid" class="calendarGrid">
                        <!-- Put JS content here -->
                    </div>
                </div>
            </div>

            <div class="listView" id="listView">
                <div class="listContainer" id="eventList">
                    <!-- Put JS content here -->
                </div>
            </div>

            <?php if(isset($_SESSION["username"]))
                        if(isLocalUser()):?>
                            <a href="calendar_form_front.php">
                                <i class="fa-solid fa-calendar-plus"></i> Legg til hending
                            </a>
                        <?php endif; ?>
        </div>
    </div>
    
    <div class="eventModal" id="eventModal" onclick="if(event.target == this) closeModal()">
        <div class="modalContent">
            <span class="closeModal" onclick="closeModal()">&times;</span>
            <span class="modalCategory" id="modalCategory">Kategori</span>
            <h2 id="modalTitle">Tittel</h2>
            <div class="eventMeta">
                <p><i class="fa-solid fa-calendar-day"></i> <span id="modalDate">Daoe</span></p>
                <p id="timeContainer"><i class="fa-solid fa-clock"></i> <span id="modalTime"></span></p>
                <p><i class="fa-solid fa-user-pen"></i>Lagt til av: <span id="modalUser">Username</span></p>
            </div>
            <p id="modalDescription">Skildring</p>
            <?php if(isset($_SESSION["username"]) && isModerator()): ?>
                <button id="deleteEventBtn" onclick="deleteCurrentEvent()">
                <i class="fa-solid fa-trash"></i> Slett
                </button>
            <?php endif; ?>
        </div>
    </div>

    <a href="calendar_form_back.php" class="addEventLink">Legg til hending</a>
    
<site-footer></site-footer>

<script>
    const IS_MODERATOR = <?php echo (isset($_SESSION["username"]) && isModerator()) ? 'true' : 'false'; ?>;
</script>
<script src="calendar.js"></script>
<script defer src="components.js"></script>

</body>
</html>