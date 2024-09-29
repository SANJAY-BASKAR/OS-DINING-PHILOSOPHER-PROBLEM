// Function to update philosopher states on the page
function updatePhilosophers(states) {
    for (let i = 0; i < 5; i++) {
        const philosopher = document.getElementById(`philosopher-${i}`);
        philosopher.className = `philosopher ${states[i]}`;
        philosopher.innerText = `P${i} (${states[i]})`;
    }
}

// Fetch data from the backend
function updatePhilosophersFromBackend() {
    fetch('/philosophers')
        .then(response => response.json())
        .then(data => {
            updatePhilosophers(data);
        })
        .catch(error => console.error('Error:', error));
}

// Fetch new data every 3 seconds
setInterval(() => {
    updatePhilosophersFromBackend();
}, 3000);

// Initial load
updatePhilosophersFromBackend();
