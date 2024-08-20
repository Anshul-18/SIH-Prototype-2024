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
document.addEventListener("DOMContentLoaded", function () {
    fetchUserProfile();
    fetchJobRecommendations();
    fetchApplicationStatus();
    fetchUpcomingSessions();
    fetchNotifications();
});
document.addEventListener('DOMContentLoaded', () => {
    // Simulate API data fetch
    const userData = {
        fullName: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 123-456-7890",
        dob: "January 1, 1980",
        qualification: "Masters",
        fieldOfStudy: "Computer Science",
        university: "XYZ University",
        graduationYear: "2012",
        employmentStatus: "Employed",
        jobTitle: "Senior Developer",
        experienceYears: "10",
        industryPreference: "IT",
        jobLocation: "New York",
        resume: "Resume.pdf",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        jobAlerts: "Weekly"
    };
    // Populate the HTML with the fetched data
    document.getElementById('name').textContent = userData.fullName;
    document.getElementById('email').textContent = userData.email;
    document.getElementById('phone').textContent = userData.phone;
    document.getElementById('dob').textContent = userData.dob;
    document.getElementById('qualification').textContent = userData.qualification;
    document.getElementById('field_of_study').textContent = userData.fieldOfStudy;
    document.getElementById('university').textContent = userData.university;
    document.getElementById('graduation_year').textContent = userData.graduationYear;
    document.getElementById('employment_status').textContent = userData.employmentStatus;
    document.getElementById('job_title').textContent = userData.jobTitle;
    document.getElementById('experience_years').textContent = userData.experienceYears;
    document.getElementById('industry_preference').textContent = userData.industryPreference;
    document.getElementById('job_location').textContent = userData.jobLocation;
    document.getElementById('resume').textContent = userData.resume;
    document.getElementById('linkedin_url').textContent = userData.linkedinUrl;
    document.getElementById('job_alerts').textContent = userData.jobAlerts;
});
