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
document.addEventListener('DOMContentLoaded', () => {
    const editBtn = document.getElementById('editBtn');
    const authModal = new bootstrap.Modal(document.getElementById('authModal'));
    const authConfirmBtn = document.getElementById('authConfirmBtn');
    const passwordInput = document.getElementById('passwordInput');
    const passwordError = document.getElementById('passwordError');

    // Default user data
    const userData = {
        fullName: "John Doe",
        email: "john.doe@example.com",
        phoneNumber: "9876543210",
        dob: "1990-01-01",
        qualification: "Bachelor's",
        fieldOfStudy: "Computer Science",
        university: "ABC University",
        graduationYear: 2012,
        employmentStatus: "Employed",
        jobTitle: "Software Developer",
        experienceYears: 5,
        industryPreference: "IT & Software",
        jobLocation: "New York, USA",
        linkedinUrl: "https://www.linkedin.com/in/johndoe",
        jobAlerts: "Weekly"
    };

    // Populate form with default values
    document.getElementById('fullName').value = userData.fullName;
    document.getElementById('email').value = userData.email;
    document.getElementById('phoneNumber').value = userData.phoneNumber;
    document.getElementById('dob').value = userData.dob;
    document.getElementById('qualification').value = userData.qualification;
    document.getElementById('fieldOfStudy').value = userData.fieldOfStudy;
    document.getElementById('university').value = userData.university;
    document.getElementById('graduationYear').value = userData.graduationYear;
    document.getElementById('employmentStatus').value = userData.employmentStatus;
    document.getElementById('jobTitle').value = userData.jobTitle;
    document.getElementById('experienceYears').value = userData.experienceYears;
    document.getElementById('industryPreference').value = userData.industryPreference;
    document.getElementById('jobLocation').value = userData.jobLocation;
    document.getElementById('linkedinUrl').value = userData.linkedinUrl;
    document.getElementById('jobAlerts').value = userData.jobAlerts;

    const formFields = document.querySelectorAll('input, select, textarea');
    const updateButtons = document.querySelectorAll('button[type="button"]');

    function toggleFormFields(enabled) {
        formFields.forEach(field => field.disabled = !enabled);
        updateButtons.forEach(button => button.disabled = !enabled);
    }

    editBtn.addEventListener('click', () => {
        authModal.show();
    });

    authConfirmBtn.addEventListener('click', () => {
        const enteredPassword = passwordInput.value;

        // Simulate password check
        if (enteredPassword === 'correct_password') {
            authModal.hide();
            toggleFormFields(true);
        } else {
            passwordError.style.display = 'block';
        }
    });

    updateButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const form = e.target.closest('form');
            if (form.checkValidity()) {
                // Submit form data to the backend
                console.log('Submitting form data...');
            } else {
                console.log('Please fill out all fields.');
            }
        });
    });
});
