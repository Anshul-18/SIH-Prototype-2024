document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Menu Activation
    document.querySelectorAll('#sidebar .side-menu.top li a').forEach(item => {
        const li = item.parentElement;
        item.addEventListener('click', () => {
            document.querySelectorAll('#sidebar .side-menu.top li').forEach(i => {
                i.classList.remove('active');
            });
            li.classList.add('active');
        });
    });

    // Toggle Sidebar
    const menuBar = document.querySelector('#content nav .bx.bx-menu');
    const sidebar = document.getElementById('sidebar');
    menuBar.addEventListener('click', () => {
        sidebar.classList.toggle('hide');
    });

    // Search Button Toggle (Mobile)
    const searchButton = document.querySelector('#content nav form .search-btn');
    const searchButtonIcon = searchButton.querySelector('.bx');
    const searchForm = document.querySelector('#content nav form');
    searchButton.addEventListener('click', function (e) {
        if (window.innerWidth < 576) {
            e.preventDefault();
            searchForm.classList.toggle('show');
            searchButtonIcon.classList.toggle('bx-x');
            searchButtonIcon.classList.toggle('bx-search');
        }
    });

    // Responsive Sidebar and Search Handling
    function adjustLayout() {
        if (window.innerWidth < 768) {
            sidebar.classList.add('hide');
        } else {
            sidebar.classList.remove('hide');
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
            searchForm.classList.remove('show');
        }
    }
    window.addEventListener('resize', adjustLayout);
    adjustLayout(); // Run on page load

    // Dark Mode Toggle
    const switchMode = document.getElementById('switch-mode');
    const bodyClass = document.body.classList;

    // Function to set Dark Mode Based on Local Storage
    function setDarkMode(enabled) {
        if (enabled) {
            bodyClass.add('dark');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            bodyClass.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    // Check Local Storage for Dark Mode Preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        switchMode.checked = true;
        setDarkMode(true);
    } else {
        switchMode.checked = false;
        setDarkMode(false);
    }

    // Add Event Listener to Toggle Dark Mode
    switchMode.addEventListener('change', () => {
        setDarkMode(switchMode.checked);
    });

    // Application Tracker Functions
    const applications = [
        { id: 1, title: 'Software Engineer', status: 'Under Review', resume: 'resume1.pdf', coverLetter: 'cover1.pdf', notes: 'Strong candidate' },
        { id: 2, title: 'Data Analyst', status: 'Interview Scheduled', resume: 'resume2.pdf', coverLetter: 'cover2.pdf', notes: 'Good skills in Python' },
        { id: 3, title: 'Product Manager', status: 'Rejected', resume: 'resume3.pdf', coverLetter: 'cover3.pdf', notes: 'Lacked relevant experience' },
        { id: 4, title: 'UX Designer', status: 'Accepted', resume: 'resume4.pdf', coverLetter: 'cover4.pdf', notes: 'Excellent portfolio' },
    ];

    const interviews = [
        { jobId: 2, date: '2024-08-25', time: '10:00 AM', location: 'Zoom' },
        { jobId: 4, date: '2024-08-30', time: '2:00 PM', location: 'In-person' },
    ];

    const statusUpdates = [
        { jobId: 1, update: 'Your application is under review.' },
        { jobId: 2, update: 'You have an interview scheduled.' },
    ];

    function loadApplications() {
        const appList = document.getElementById('applicationList');
        appList.innerHTML = ''; // Clear previous entries
        applications.forEach(app => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `${app.title} - ${app.status}`;
            listItem.addEventListener('click', () => showDetails(app));
            appList.appendChild(listItem);
        });
    }

    function showDetails(app) {
        const modalDetailsContent = document.getElementById('modalDetailsContent');
        modalDetailsContent.innerHTML = `
            <p><strong>Resume:</strong> <a href="${app.resume}" target="_blank">${app.resume}</a></p>
            <p><strong>Cover Letter:</strong> <a href="${app.coverLetter}" target="_blank">${app.coverLetter}</a></p>
            <p><strong>Notes:</strong> ${app.notes}</p>
        `;
        new bootstrap.Modal(document.getElementById('applicationModal')).show();
    }

    function loadInterviews() {
        const interviewList = document.getElementById('interviewSchedule');
        interviewList.innerHTML = ''; // Clear previous entries
        interviews.forEach(interview => {
            const app = applications.find(a => a.id === interview.jobId);
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `${app.title} - ${interview.date} at ${interview.time} (${interview.location})`;
            interviewList.appendChild(listItem);
        });
    }

    function loadStatusUpdates() {
        const updatesDiv = document.getElementById('statusUpdates');
        updatesDiv.innerHTML = ''; // Clear previous entries
        statusUpdates.forEach(update => {
            const app = applications.find(a => a.id === update.jobId);
            const updateItem = document.createElement('div');
            updateItem.textContent = `${app.title}: ${update.update}`;
            updatesDiv.appendChild(updateItem);
        });
    }

    function filterApplications() {
        const filterValue = document.getElementById('statusFilter').value;
        const appList = document.getElementById('applicationList');
        appList.innerHTML = ''; // Clear previous entries

        applications.forEach(app => {
            if (filterValue === 'all' || app.status.toLowerCase() === filterValue) {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.textContent = `${app.title} - ${app.status}`;
                listItem.addEventListener('click', () => showDetails(app));
                appList.appendChild(listItem);
            }
        });
    }
    // Run the functions on page load
    loadApplications();
    loadInterviews();
    loadStatusUpdates();
});
