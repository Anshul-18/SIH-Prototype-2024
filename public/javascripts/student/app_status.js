const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
allSideMenu.forEach(item=> {
	const li = item.parentElement;
	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});
// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');
menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');
searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})
if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}
window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})
document.addEventListener("DOMContentLoaded", function () {
    const switchMode = document.getElementById('switch-mode');
    
    // Function to set the dark mode state and update local storage
    function setDarkMode(enabled) {
        if (enabled) {
            document.body.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
        }
    }
    // Check local storage for the dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        switchMode.checked = true;
        setDarkMode(true);
    } else {
        switchMode.checked = false;
        setDarkMode(false);
    }
    // Add event listener to toggle dark mode
    switchMode.addEventListener('change', function () {
        setDarkMode(this.checked);
    });
});
// Load Application Data
document.addEventListener('DOMContentLoaded', function () {
	loadApplicationList();
	loadInterviewSchedule();
	loadStatusUpdates();
});

// Load Application List
function loadApplicationList() {
	const applicationList = document.getElementById('applicationList');
	applicationList.innerHTML = '';

	// Example data
	const applications = [
		{ id: 1, jobTitle: 'Software Engineer', companyName: 'ABC Corp', status: 'Under Review' },
		{ id: 2, jobTitle: 'Data Analyst', companyName: 'XYZ Ltd.', status: 'Interview Scheduled' },
		{ id: 3, jobTitle: 'Product Manager', companyName: 'Tech Giants', status: 'Applied' },
	];

	applications.forEach(application => {
		const listItem = document.createElement('li');
		listItem.className = 'list-group-item';
		listItem.innerHTML = `
			<div>
				<h5>${application.jobTitle}</h5>
				<p>${application.companyName}</p>
				<p>Status: ${application.status}</p>
				<button class="btn btn-primary" onclick="viewApplicationDetails(${application.id})">View Details</button>
			</div>
		`;
		applicationList.appendChild(listItem);
	});
}
// Filter Applications
function filterApplications() {
    const statusFilter = document.getElementById('statusFilter').value.toLowerCase();
    const applicationList = document.getElementById('applicationList');
    const applications = applicationList.getElementsByClassName('list-group-item');

    for (let i = 0; i < applications.length; i++) {
        const status = applications[i].querySelector('p:nth-child(3)').textContent.toLowerCase();

        if (statusFilter === 'all' || status.includes(statusFilter)) {
            applications[i].style.display = '';
        } else {
            applications[i].style.display = 'none';
        }
    }
}

// View Application Details
function viewApplicationDetails(applicationId) {
    console.log("View Application Details clicked for ID:", applicationId); // Debugging
    const modalDetailsContent = document.getElementById('modalDetailsContent');
    modalDetailsContent.innerHTML = '';

    // Example details data
    const applicationDetails = {
        1: { jobTitle: 'Software Engineer', companyName: 'ABC Corp', description: 'Develop software solutions...', status: 'Under Review' },
        2: { jobTitle: 'Data Analyst', companyName: 'XYZ Ltd.', description: 'Analyze data and generate reports...', status: 'Interview Scheduled' },
        3: { jobTitle: 'Product Manager', companyName: 'Tech Giants', description: 'Manage product lifecycle...', status: 'Applied' },
    };

    const details = applicationDetails[applicationId];
    if (details) {
        modalDetailsContent.innerHTML = `
            <h5>${details.jobTitle}</h5>
            <p><strong>Company:</strong> ${details.companyName}</p>
            <p><strong>Description:</strong> ${details.description}</p>
            <p><strong>Status:</strong> ${details.status}</p>
        `;
        // Trigger modal
        const modal = new bootstrap.Modal(document.getElementById('applicationModal'));
        modal.show();
    }
}


// Load Interview Schedule
function loadInterviewSchedule() {
	const interviewSchedule = document.getElementById('interviewSchedule');
	interviewSchedule.innerHTML = '';

	// Example data
	const interviews = [
		{ id: 1, jobTitle: 'Data Analyst', companyName: 'XYZ Ltd.', date: '2023-09-10', time: '10:00 AM' },
	];

	interviews.forEach(interview => {
		const listItem = document.createElement('li');
		listItem.className = 'list-group-item';
		listItem.innerHTML = `
			<div>
				<h5>${interview.jobTitle}</h5>
				<p>${interview.companyName}</p>
				<p>Date: ${interview.date}</p>
				<p>Time: ${interview.time}</p>
			</div>
		`;
		interviewSchedule.appendChild(listItem);
	});
}

// Load Status Updates
function loadStatusUpdates() {
	const statusUpdates = document.getElementById('statusUpdates');
	statusUpdates.innerHTML = '';

	// Example data
	const updates = [
		{ id: 1, jobTitle: 'Software Engineer', update: 'Your application is under review.' },
		{ id: 2, jobTitle: 'Data Analyst', update: 'Interview scheduled for 2023-09-10.' },
	];

	updates.forEach(update => {
		const updateItem = document.createElement('div');
		updateItem.className = 'alert alert-info';
		updateItem.innerHTML = `
			<strong>${update.jobTitle}</strong>
			<p>${update.update}</p>
		`;
		statusUpdates.appendChild(updateItem);
	});
}