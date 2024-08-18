 // JavaScript to show the popup on page load
 window.onload = function() {
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

// JavaScript to close the popup
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
});

 // JavaScript to create the pie chart with dark colors and explode effect
const ctx = document.getElementById('myPieChart').getContext('2d');
const myPieChart = new Chart(ctx, {
type: 'pie',
data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: 'My Pie Chart',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(139, 0, 0, 0.8)', // Dark red
            'rgba(0, 0, 139, 0.8)', // Dark blue
            'rgba(255, 215, 0, 0.8)', // Dark gold
            'rgba(0, 128, 0, 0.8)', // Dark green
            'rgba(128, 0, 128, 0.8)', // Dark purple
            'rgba(255, 140, 0, 0.8)'  // Dark orange
        ],
        borderColor: [
            'rgba(139, 0, 0, 1)', // Dark red border
            'rgba(0, 0, 139, 1)', // Dark blue border
            'rgba(255, 215, 0, 1)', // Dark gold border
            'rgba(0, 128, 0, 1)', // Dark green border
            'rgba(128, 0, 128, 1)', // Dark purple border
            'rgba(255, 140, 0, 1)'  // Dark orange border
        ],
        borderWidth: 1
    }]
},
options: {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.label + ': ' + tooltipItem.raw;
                }
            }
        }
    },
    elements: {
        arc: {
            borderWidth: 1,
            borderColor: '#fff'
        }
    },
    animation: {
        animateRotate: true,
        animateScale: true
    },
    cutoutPercentage: 0, // Ensure it's a full pie chart
}
});

// Function to apply explode effect
function explodePieChart(chart, index, explodeDistance = 10) {
chart.data.datasets[0].backgroundColor = chart.data.datasets[0].backgroundColor.map((color, i) => {
    if (i === index) {
        return Chart.helpers.color(color).alpha(0.7).rgbString(); // Highlight exploded slice
    }
    return color;
});

chart.options.elements.arc = {
    ...chart.options.elements.arc,
    borderWidth: chart.data.datasets[0].borderWidth,
    borderColor: chart.data.datasets[0].borderColor,
    radius: (context) => {
        const index = context.dataIndex;
        return index === explodeIndex ? 1.1 : 1; // Increase size of exploded slice
    }
};

chart.update();
}

const explodeIndex = 0; // Index of the slice to explode
setTimeout(() => explodePieChart(myPieChart, explodeIndex), 500); // Explode the first slice after 0.5 seconds