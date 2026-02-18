<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calender</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/e065bf0659.js" crossorigin="anonymous"></script>
    <script src="components.js"></script>
</head>
<body>
    <main-header lang="no"></main-header>
    <hamburger-menu></hamburger-menu>

    <div class="roundedbody"> 
        <div class="marginbody">
            <div class="calendarHeader">
                <div class="calendarNav">
                    <button class="btn-nav" onclick="moveMonth(-1)"><i class="fa-solid fa-chevron-left"></i></button>
                    <h2 id="monthTitle">Februar 2026</h2>
                    <button class="btn-nav" onclick="moveMonth(1)"><i class="fa-solid fa-chevron-left"></i></button>
                </div>

                <div class="tabs">
                    <div class="tab active" onclick="setView('calendar')"><i class="fa-solid fa-calendar-days"></i></button>
                    <div class="tab" onclick="setView('list')"><i class="fa-solid fa-list"></i></div>
                </div>
            </div>

            <div class="calendarView">
                <div class="calendarContainer">
                    <div id="calendarGrid" class="calendarGrid">
                        <!-- Put JS content here -->
                    </div>
                </div>
            </div>

            <div class="listView">
                <div class="listContainer">
                    <!-- Put JS content here -->
                </div>
            </div>

            <?php if(!isset($_SESSION["username"]))
                        if(isLocal()):?>
                            <a href="calendar_form_front.html">
                                <i class="fa-solid fa-calendar-plus"></i> Add event
                            </a>
                        <?php endif; ?>
        </div>
    </div>
    




</body>
</html>