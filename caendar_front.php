<?php
// Start session to check if the user is a 'local'
session_start();
$isLocal = isset($_SESSION['type']) && $_SESSION['type'] === 'local';
?>
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Hendingar i Briksdalen</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/e065bf0659.js" crossorigin="anonymous"></script>
    <script src="components.js"></script>
    <style>
        /* Calendar Specific Styles */
        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .month-nav {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .month-nav h2 {
            margin: 0;
            min-width: 180px;
            text-align: center;
            color: #3a7ec9;
        }

        .btn-nav {
            background: #f0f0f5;
            border: none;
            padding: 10px 15px;
            border-radius: 8px;
            cursor: pointer;
            color: #3a7ec9;
            transition: 0.3s;
        }

        .btn-nav:hover {
            background: #3a7ec9;
            color: white;
        }

        /* The Grid */
        .calendar-container {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            border-top: 1px solid #eee;
            border-left: 1px solid #eee;
        }

        .weekday {
            background: #f8f9fa;
            padding: 10px;
            text-align: center;
            font-weight: bold;
            font-size: 0.8rem;
            color: #666;
            border-right: 1px solid #eee;
            border-bottom: 1px solid #eee;
        }

        .day {
            min-height: 100px;
            padding: 8px;
            background: white;
            border-right: 1px solid #eee;
            border-bottom: 1px solid #eee;
            position: relative;
        }

        .day.today {
            background: #f0f7ff;
        }

        .day.other-month {
            background: #fafafa;
            color: #ccc;
        }

        .day-number {
            font-weight: bold;
            font-size: 0.9rem;
            margin-bottom: 5px;
            display: block;
        }

        /* Event Tags */
        .event-item {
            background: #3a7ec9;
            color: white;
            font-size: 0.75rem;
            padding: 3px 6px;
            border-radius: 4px;
            margin-bottom: 3px;
            cursor: pointer;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transition: transform 0.1s;
        }

        .event-item:hover {
            transform: scale(1.02);
            background: #234e7c;
        }

        /* Modal / Informational Page */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 100000;
            backdrop-filter: blur(3px);
        }

        .modal-content {
            background: white;
            width: 90%;
            max-width: 500px;
            padding: 30px;
            border-radius: 15px;
            position: relative;
            animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .close-modal {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 24px;
            cursor: pointer;
            color: #999;
        }

        .event-meta {
            font-size: 0.9rem;
            color: #666;
            margin: 10px 0;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }

        .event-cat {
            display: inline-block;
            background: #e1effe;
            color: #3a7ec9;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: bold;
        }

        .add-btn {
            background: #28a745;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        #listView { display: none; }

        @media (max-width: 600px) {
            .day { min-height: 70px; }
            .weekday { font-size: 0.7rem; padding: 5px; }
        }
    </style>
</head>
<body>
    <main-header lang="no"></main-header>
    <hamburger-menu></hamburger-menu>

    <div style="height: 120px; background-color: #3a7ec9;"></div>

    <div class="roundedbody">
        <div class="marginbody">
            
            <div class="calendar-header">
                <div class="month-nav">
                    <button class="btn-nav" onclick="moveMonth(-1)"><i class="fa-solid fa-chevron-left"></i></button>
                    <h2 id="monthTitle">Februar 2026</h2>
                    <button class="btn-nav" onclick="moveMonth(1)"><i class="fa-solid fa-chevron-right"></i></button>
                </div>

                <div class="tabs" style="margin: 0; width: 140px;">
                    <div class="tab active" id="tabCal" onclick="setView('calendar')"><i class="fa-solid fa-calendar-days"></i></div>
                    <div class="tab" id="tabList" onclick="setView('list')"><i class="fa-solid fa-list"></i></div>
                </div>
            </div>

            <!-- Calendar View Container -->
            <div id="calendarView">
                <div class="calendar-container">
                    <div class="calendar-grid" id="calendarGrid">
                        <!-- Content generated by JavaScript -->
                    </div>
                </div>
            </div>

            <!-- List View Container -->
            <div id="listView">
                <div id="eventList">
                    <!-- Content generated by JavaScript -->
                </div>
            </div>

            <?php if($isLocal): ?>
                <div style="margin-top: 25px; text-align: center;">
                    <a href="add_event.php" class="add-btn">
                        <i class="fa-solid fa-calendar-plus"></i> Legg til ny hending
                    </a>
                </div>
            <?php endif; ?>

        </div>
    </div>

    <!-- Event Detail Modal (Informational Page) -->
    <div class="modal-overlay" id="eventModal" onclick="if(event.target == this) closeModal()">
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <span id="modCat" class="event-cat">Kategori</span>
            <h2 id="modTitle" style="color: #3a7ec9; margin: 10px 0;">Hending Tittel</h2>
            <div class="event-meta">
                <p><i class="fa-solid fa-calendar-day"></i> <span id="modDate">Dato</span></p>
                <p><i class="fa-solid fa-user-pen"></i> Lagt til av: <span id="modUser">Brukarnamn</span></p>
            </div>
            <p id="modDesc" style="line-height: 1.6; color: #333;">Beskrivelse...</p>
        </div>
    </div>

    <site-footer></site-footer>

    <script>
        let events = [];
        let viewDate = new Date(); // Controls what month we are looking at
        let currentView = 'calendar';

        // 1. Fetch data from your PHP backend
        async function loadEvents() {
            try {
                const response = await fetch('fetch_events.php');
                events = await response.json();
                render();
            } catch (err) {
                console.error("Kunne ikkje laste hendingar:", err);
            }
        }

        function render() {
            updateHeader();
            if (currentView === 'calendar') {
                renderCalendar();
            } else {
                renderList();
            }
        }

        function updateHeader() {
            const monthNames = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
            document.getElementById('monthTitle').innerText = `${monthNames[viewDate.getMonth()]} ${viewDate.getFullYear()}`;
        }

        function renderCalendar() {
            const grid = document.getElementById('calendarGrid');
            grid.innerHTML = '';

            // Day Headers
            const days = ['Mån', 'Tys', 'Ons', 'Tor', 'Fre', 'Lau', 'Sun'];
            days.forEach(d => grid.innerHTML += `<div class="weekday">${d}</div>`);

            const year = viewDate.getFullYear();
            const month = viewDate.getMonth();

            // Logic to find start day (adjusting for Monday start)
            let firstDay = new Date(year, month, 1).getDay();
            let startOffset = firstDay === 0 ? 6 : firstDay - 1; 

            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // Fill empty cells for previous month
            for (let i = 0; i < startOffset; i++) {
                grid.innerHTML += `<div class="day other-month"></div>`;
            }

            // Fill actual days
            for (let d = 1; d <= daysInMonth; d++) {
                const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                const isToday = new Date().toISOString().split('T')[0] === dateString;
                
                // Find events for this specific day
                const dayEvents = events.filter(e => e.date === dateString);
                let eventsHtml = '';
                dayEvents.forEach(e => {
                    eventsHtml += `<div class="event-item" onclick="openModal(${e.id})">${e.title}</div>`;
                });

                grid.innerHTML += `
                    <div class="day ${isToday ? 'today' : ''}">
                        <span class="day-number">${d}</span>
                        <div class="event-container">${eventsHtml}</div>
                    </div>
                `;
            }
        }

        function renderList() {
            const listDiv = document.getElementById('eventList');
            listDiv.innerHTML = '';

            // Filter events to only show upcoming or current month events for the list view
            const filteredEvents = events.filter(e => {
                const eDate = new Date(e.date);
                return eDate.getMonth() === viewDate.getMonth() && eDate.getFullYear() === viewDate.getFullYear();
            }).sort((a,b) => new Date(a.date) - new Date(b.date));

            if (filteredEvents.length === 0) {
                listDiv.innerHTML = '<p style="text-align:center; padding: 20px;">Ingen hendingar denne månaden.</p>';
                return;
            }

            filteredEvents.forEach(e => {
                listDiv.innerHTML += `
                    <div class="valgboks" onclick="openModal(${e.id})" style="display: flex; justify-content: space-between; padding: 0 20px; align-items:center;">
                        <span style="font-weight:bold; color:#3a7ec9;">${e.date.split('-').reverse().join('.')}</span>
                        <span>${e.title}</span>
                        <i class="fa-solid fa-chevron-right" style="color:#ccc;"></i>
                    </div>
                `;
            });
        }

        function setView(view) {
            currentView = view;
            document.getElementById('calendarView').style.display = view === 'calendar' ? 'block' : 'none';
            document.getElementById('listView').style.display = view === 'list' ? 'block' : 'none';
            document.getElementById('tabCal').classList.toggle('active', view === 'calendar');
            document.getElementById('tabList').classList.toggle('active', view === 'list');
            render();
        }

        function moveMonth(dir) {
            viewDate.setMonth(viewDate.getMonth() + dir);
            render();
        }

        function openModal(eventId) {
            const e = events.find(item => item.id == eventId);
            if (!e) return;

            document.getElementById('modTitle').innerText = e.title;
            document.getElementById('modDate').innerText = e.date.split('-').reverse().join('.');
            document.getElementById('modUser').innerText = e.username;
            document.getElementById('modDesc').innerText = e.description;
            document.getElementById('modCat').innerText = e.category;
            
            document.getElementById('eventModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('eventModal').style.display = 'none';
        }

        // Initialize on load
        window.onload = loadEvents;
    </script>
</body>
</html>