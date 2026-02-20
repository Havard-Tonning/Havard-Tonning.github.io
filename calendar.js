let events = [];
let viewDate = new Date();
let currentView = "calendar";

async function loadEvents() {
    try{
        const response = await fetch('calendar_back.php');
        events = await response.json();
        render();
    }catch(err){
        console.error("Could not load events:", err);
    }
}

function render(){
    updateHeader();

    if(currentView == "calendar")
        renderCalendar();
    else
        renderList();
}

function updateHeader(){
    document.getElementById("monthTitle").innerText = viewDate.toLocaleString('default', { month: 'long' }) + " " + viewDate.getFullYear();
}

function renderCalendar(){
    const grid = document.getElementById("calendarGrid");
    grid.innerHTML = "";

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    days.forEach(d => grid.innerHTML += `<div class = "weekday">${d}</div>`);

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    // JS starts week on Sunday. Sunday gets moved to day 6, and all others are moved one earlier
    let firstDay = new Date(year, month, 1).getDay();
    let startOffset = firstDay === 0 ? 6 : firstDay - 1; 

    // Get the next month, then the 0th of that month, which is the last of the next one
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    // Padding the days before the first day of month
    for(let i = 0; i < startOffset; i++){
        grid.innerHTML += `<div class="day otherMonth"></div>`;
    }

    for(let d = 1; d <= daysInMonth; d++){
        // Formatting date to ISO standard for comparison. Padding single digit months/days with zeros
        let dateString = `${year}-${String(month + 1).padStart(2, 0)}-${String(d).padStart(2, 0)}`;
        const isToday = new Date().toISOString().split('T')[0] === dateString;
    
        const dayEvents = events.filter(e=>e.date === dateString);

        let eventsHTML ='';

        dayEvents.forEach(e=> {
            eventsHTML += `<div class='eventItem' onclick='openModal(${e.id})'>${e.title}</div>`;
        });
        
        grid.innerHTML += `
            <div class="day ${isToday ? 'today' : ''}">
                <span class="dayNumber">${d}</span>
                <span class="eventContainer"> ${eventsHTML}</span>
            </div>
        `;    
    }
}
    function renderList(){
        let listDiv = document.getElementById('eventList');

        listDiv.innerHTML = '';

        const filteredEvents = events.filter(e => {
            const eDate = new Date(e.date);
            return eDate.getMonth() === viewDate.getMonth() && eDate.getFullYear() === viewDate.getFullYear();
        }).sort((a,b) => new Date(a.date) - new Date(b.date));

        if(filteredEvents.length === 0){
            listDiv.innerHTML = '<p style="text-align:center;">No events this month</p>';
            return;
        }

        filteredEvents.forEach(e=> {
            listDiv.innerHTML += `
                <div class="valgBoks" onclick="openModal(${e.id})">
                    <span>${e.date.split("-").reverse().join(".")} </span>
                    <span>${e.title}</span>
                </div>
            `
        })
    }


function setView(view){
    currentView = view;
    document.getElementById('calendarView').style.display = view === 'calendar' ? 'block' : 'none';
    document.getElementById('listView').style.display = view === 'list' ? 'block' : 'none';
    document.getElementById('tabCalendar').classList.toggle('active', view === 'calendar');
    document.getElementById('tabList').classList.toggle('active', view === 'list');
    render();
}

function moveMonth(dir){
    viewDate.setMonth(viewDate.getMonth() + dir);
    render();
}

function openModal(eventId){
    const e = events.find(item => item.id == eventId);
    if(!e)
        return;

    document.getElementById('modalTitle').innerText = e.title;
    document.getElementById('modalDate').innerText = e.date.split("-").reverse().join('.');
    document.getElementById('modalUser').innerText = e.username;
    document.getElementById('modalDescription').innerText = e.description;
    document.getElementById('modalCategory').innerText = e.category;
    document.getElementById('eventModal').style.display = 'flex';
}

function closeModal(){
    document.getElementById('eventModal').style.display = 'none';
}

window.onload = loadEvents;
