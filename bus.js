const schedules = {
    'monday-wednesday-friday': {
        'to-briksdalen': [
            {
                line: '115',
                stops: [
                    {name: 'Olden cruisekai', time: '10:05'},
                    {name: 'Olden skule', time: '10:07'},
                    {name: 'Åbrekk', time: '10:30'},
                    {name: 'Briksdalen', time: '10:45'}
                ]
            },
            {
                line: '115',
                stops: [
                    {name: 'Olden cruisekai', time: '16:04'},
                    {name: 'Olden skule', time: '16:10'},
                    {name: 'Åbrekk', time: '16:35'},
                    {name: 'Briksdalen', time: '16:40'}
                ]
            },
        ],
        'to-olden': [
            {
                line: '115',
                stops: [
                    {name: 'Briksdalen', time: '13:30'},
                    {name: 'Åbrekk', time: '13:35'},
                    {name: 'Olden', time: '14:00'},
                    {name: 'Olden cruisekai', time: '14:02'},
                ]
            },
            {
                line: '115',
                stops: [
                    {name: 'Briksdalen', time: '18:00'},
                    {name: 'Åbrekk', time: '18:05'},
                    {name: 'Olden', time: '18:30'},
                    {name: 'Olden cruisekai', time: '18:32'},
                ]
            },
        ]
    },
    'tuesday-thursday': {
        'to-briksdalen': [
            {
                line: '115',
                stops: [
                    {name: 'Olden cruisekai', time: '10:05'},
                    {name: 'Olden skule', time: '10:07'},
                    {name: 'Åbrekk', time: '10:30'},
                    {name: 'Briksdalen', time: '10:45'}
                ]
            },
            {
                line: '115',
                stops: [
                    {name: 'Olden cruisekai', time: '16:04'},
                    {name: 'Olden skule', time: '16:10'},
                    {name: 'Åbrekk', time: '16:35'},
                    {name: 'Briksdalen', time: '16:40'}
                ]
            },
            {
                line: '115',
                stops: [
                    {name: 'Olden cruisekai', time: ''},
                    {name: 'Olden skule', time: '11:35'},
                    {name: 'Åbrekk', time: '12:00'},
                    {name: 'Briksdalen', time: '12:05'}
                ]
            }
        ],
        'to-olden': [
            {
                line: '115',
                stops: [
                    {name: 'Briksdalen', time: '13:30'},
                    {name: 'Åbrekk', time: '13:35'},
                    {name: 'Olden', time: '14:00'},
                    {name: 'Olden cruisekai', time: '14:02'},
                ]
            },
            {
                line: '115',
                stops: [
                    {name: 'Briksdalen', time: '18:00'},
                    {name: 'Åbrekk', time: '18:05'},
                    {name: 'Olden', time: '18:30'},
                    {name: 'Olden cruisekai', time: '18:32'},
                ]
            },
            {
                line: '115',
                stops: [
                    {name: 'Briksdalen', time: '11:00'},
                    {name: 'Åbrekk', time: '11:05'},
                    {name: 'Olden', time: '11:30'},
                    {name: 'Olden cruisekai', time: '14:10'},
                ]
            },
        ]
    }, 
    'weekend': {
        'to-briksdalen': [
            {
                line: '115',
                stops: [
                    {name: 'Olden cruisekai', time: '10:05'},
                    {name: 'Olden skule', time: '10:07'},
                    {name: 'Åbrekk', time: '10:30'},
                    {name: 'Briksdalen', time: '10:45'}
                ]
            }
            
        ],
        'to-olden': [
            {
                line: '115',
                stops: [
                    {name: 'Briksdalen', time: '13:30'},
                    {name: 'Åbrekk', time: '13:35'},
                    {name: 'Olden', time: '14:00'},
                    {name: 'Olden cruisekai', time: '14:02'},
                ]
            },
            {
                line: '115',
                stops: [
                    {name: 'Briksdalen', time: '18:00'},
                    {name: 'Åbrekk', time: '18:05'},
                    {name: 'Olden', time: '18:30'},
                    {name: 'Olden cruisekai', time: '18:32'},
                ]
            },
        ]
    }
};

const tabs = document.querySelectorAll('.tab');
const directionButtons = document.querySelectorAll('.direction-btn');
const scheduleDisplay = document.getElementById('schedule-display');

let currentDayGroup = 'monday-wednesday-friday';
let currentDirection = 'to-briksdalen';

function setActiveTab(selectedTab) {
    tabs.forEach(tab => {
        if (tab === selectedTab) {
            tab.classList.add('active');
            currentDayGroup = tab.id.replace('tab-', '');
        } else {
            tab.classList.remove('active');
        }
    });
    displaySchedule();
}

function clearActiveDirection() {
    directionButtons.forEach(btn => btn.classList.remove('active'));
}

function setActiveDirection(direction) {
    clearActiveDirection();
    directionButtons.forEach(btn => {
        if (btn.getAttribute('data-direction') === direction) {
            btn.classList.add('active');
            currentDirection = direction;
        }
    });
    displaySchedule();
}

function displaySchedule() {
    scheduleDisplay.innerHTML = '';

    if (!schedules[currentDayGroup] || !schedules[currentDayGroup][currentDirection]) {
        scheduleDisplay.innerHTML = '<div class="no-schedule">Ingen ruter tilgjengelig for valgt dag/retning.</div>';
        return;
    }

    const daySchedules = schedules[currentDayGroup][currentDirection];

    daySchedules.forEach(schedule => {
        const scheduleContainer = document.createElement('div');
        scheduleContainer.className = 'schedule-container';

        const header = document.createElement('div');
        header.className = 'schedule-header';

        const title = document.createElement('div');
        title.textContent = currentDirection === 'to-briksdalen' ? 'Til Briksdalen' : 'Til Olden';

        const lineNumber = document.createElement('div');
        lineNumber.className = 'line';
        lineNumber.textContent = schedule.line;

        header.appendChild(title);
        header.appendChild(lineNumber);
        scheduleContainer.appendChild(header);

        const table = document.createElement('table');

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        const stopHeader = document.createElement('th');
        stopHeader.textContent = 'Holdeplass';
        headerRow.appendChild(stopHeader);

        const timeHeader = document.createElement('th');
        timeHeader.textContent = 'Tid';
        headerRow.appendChild(timeHeader);

        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');

        schedule.stops.forEach(stop => {
            if (stop.time) {
                const row = document.createElement('tr');

                const stopCell = document.createElement('td');
                stopCell.className = 'stop-name';
                stopCell.textContent = stop.name;
                row.appendChild(stopCell);

                const timeCell = document.createElement('td');
                timeCell.textContent = stop.time;
                row.appendChild(timeCell);

                tbody.appendChild(row);
            }
        });

        table.appendChild(tbody);
        scheduleContainer.appendChild(table);

        scheduleDisplay.appendChild(scheduleContainer);
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        setActiveTab(tab);
    });
});

directionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        setActiveDirection(btn.getAttribute('data-direction'));
    });
});

// Initialize
setActiveTab(document.getElementById('tab-monday-wednesday-friday'));
setActiveDirection('to-briksdalen');

