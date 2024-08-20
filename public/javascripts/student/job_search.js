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
    document.getElementById('search-btn').addEventListener('click', function () {
        fetchJobListings();
    });

    function fetchJobListings() {
        const keyword = document.getElementById('search-keyword').value;
        const location = document.getElementById('search-location').value;
        const jobType = document.getElementById('search-job-type').value;
        const salary = document.getElementById('filter-salary').value;
        const company = document.getElementById('filter-company').value;
        const industry = document.getElementById('filter-industry').value;
        const skills = document.getElementById('filter-skills').value;

        // Simulate an API call
        const jobListings = [
            { title: "Software Engineer", company: "TechCorp", location: "San Francisco, CA", type: "Full-Time", date: "2024-08-19" },
            { title: "Data Analyst", company: "DataWorks", location: "New York, NY", type: "Part-Time", date: "2024-08-18" }
        ];

        const jobList = document.getElementById('job-listings');
        jobList.innerHTML = ''; // Clear existing job listings

        jobListings.forEach(job => {
            const jobItem = document.createElement('div');
            jobItem.className = 'job-item';
            jobItem.innerHTML = `
                <h5>${job.title}</h5>
                <p>${job.company} - ${job.location}</p>
                <p>Type: ${job.type} | Posted on: ${job.date}</p>
            `;
            jobList.appendChild(jobItem);
        });

        // Simulate pagination
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = `
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        `;
    }
});
