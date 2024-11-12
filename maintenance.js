document.addEventListener("DOMContentLoaded", function () {
    // Get modal elements
    const modalmessage = document.getElementById("maintenanceModal");
    const btn = document.getElementById("sendEmailButton");
    const span = document.getElementsByClassName("close-message")[0];
    const statusMessage = document.getElementById('statusMessage');
    // Get the date and time values
    const maintenanceDate = document.getElementById('maintenanceDate');
    const maintenanceTime = document.getElementById('maintenanceTime');
    const maintenanceMessageInput = document.getElementById('maintenanceMessage');

console.log("Maintenance scheduled on:", maintenanceDate, "at", maintenanceTime);


    // Open modal on button click
    btn.onclick = function() {
        modalmessage.style.display = "block";
    }

    // Close modal when clicking on (x)
    span.onclick = function() {
        modalmessage.style.display = "none";
    }

    // Close modal when clicking outside of modal
    window.onclick = function(event) {
        if (event.target === modalmessage) {
            modalmessage.style.display = "none";
        }
    }
// Handle sending notification
document.getElementById('confirmSendEmail').addEventListener('click', () => {
    const message = maintenanceMessageInput.value.trim(); // Get and trim the message

    // Reset previous messages
    statusMessage.style.display = "none"; // Hide previous messages
    statusMessage.classList.remove("success", "error"); // Remove success or error classes
    statusMessage.innerText = ""; // Clear the message text

    if (!message) {
        statusMessage.innerText = "Error: Please enter a maintenance message."; // Display error message
        statusMessage.classList.add("error"); // Add error class for styling
        statusMessage.style.display = "block"; // Show error message
        return; // Exit if the message is empty
    }

    // Simulate sending the message
    console.log("Constructed message:", message); // Here you could handle the message as needed

    // Display success message
    statusMessage.innerText = "Success: Maintenance message constructed."; // Display success message
    statusMessage.classList.add("success"); // Add success class for styling
    statusMessage.style.display = "block"; // Show success message
    maintenanceMessageInput.value = ''; // Clear the input field
    
})
}
)
