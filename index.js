// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!


// DOM Elements
const button = document.getElementById("fetch-alerts");
const stateInput = document.getElementById("state-input");
const summary = document.getElementById("summary");
const alertList = document.getElementById("alert-list");
const errorMessage = document.getElementById("error-message");

// Fetch weather alerts function
async function fetchWeatherAlerts(state) {
    try {
        const response = await fetch(`${"https://api.weather.gov/alerts/active?area="}${state}`);

        const data = await response.json();

        console.log(data);

        // Clear any previous error message
        errorMessage.textContent = "";
        errorMessage.classList.add("hidden");

        // Display alerts
        displayAlerts(data);

        // Clear the input field
        stateInput.value = "";

    } catch (error) {
        console.log("Error fetching weather alerts:", error);

        // Display an error message
        errorMessage.textContent = error.message;
        errorMessage.classList.remove("hidden");
    }
}

// Display alerts on the page function
function displayAlerts(data) {
    const displayDiv = document.getElementById("alerts-display");

    displayDiv.innerHTML = "";

    const summary = document.createElement("h2");
    summary.textContent = `${data.title}: ${data.features.length}`;
    displayDiv.appendChild(summary);

    const list = document.createElement("ul");

    data.features.forEach(function(alert) {
        const li = document.createElement("li");
        li.textContent = alert.properties.headline;
        list.appendChild(li);
    });

    displayDiv.appendChild(list);
}

// Button click
button.addEventListener("click", function () {
    const state = stateInput.value.trim();
    fetchWeatherAlerts(state);
});



 

