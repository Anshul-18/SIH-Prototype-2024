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
const mentors = [
    { name: 'John Doe', goals: 'Improve communication skills.', startDate: '2024-01-01', endDate: '2024-06-01' },
    { name: 'Jane Smith', goals: 'Career development and networking.', startDate: '2024-02-01', endDate: '2024-07-01' },
];

const progressNotes = [
    { milestone: 'First meeting scheduled', date: '2024-01-15' },
    { milestone: 'Completed first assignment', date: '2024-02-15' },
];

function loadMentorships() {
    const mentorshipList = document.getElementById('mentorshipList');
    mentorshipList.innerHTML = ''; // Clear previous entries
    mentors.forEach(mentor => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${mentor.name} - Goals: ${mentor.goals} (From ${mentor.startDate} to ${mentor.endDate})`;
        mentorshipList.appendChild(listItem);
    });

    const mentorSelect = document.getElementById('mentorSelect');
    mentors.forEach(mentor => {
        const option = document.createElement('option');
        option.value = mentor.name;
        option.textContent = mentor.name;
        mentorSelect.appendChild(option);
    });
}

function loadProgressTracking() {
    const progressDiv = document.getElementById('progressTracking');
    progressDiv.innerHTML = ''; // Clear previous progress
    progressNotes.forEach(note => {
        const noteItem = document.createElement('div');
        noteItem.textContent = `${note.milestone} on ${note.date}`;
        progressDiv.appendChild(noteItem);
    });
}

document.getElementById('enrollForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const mentorName = document.getElementById('mentorSelect').value;
    const newGoal = prompt("Enter your goals for this mentorship:");
    const newMentor = { name: mentorName, goals: newGoal, startDate: new Date().toISOString().split('T')[0], endDate: 'TBA' };
    mentors.push(newMentor);
    loadMentorships();
    this.reset(); // Reset form fields
});
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const comments = document.getElementById('feedbackComments').value;
    const rating = document.getElementById('feedbackRating').value;
    alert(`Feedback submitted!\nRating: ${rating}\nComments: ${comments}`);
    this.reset(); // Reset form fields
});
document.addEventListener('DOMContentLoaded', () => {
    loadMentorships();
    loadProgressTracking();
});
