// Function to set a new reminder
function setReminder() {
    const medicationName = document.getElementById('medicationName').value;
    const reminderTime = document.getElementById('reminderTime').valueAsNumber;

    // Store reminder in local storage
    const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminders.push({ medicationName, reminderTime });
    localStorage.setItem('reminders', JSON.stringify(reminders));

    // Display reminder in the list
    displayReminders();

    // Schedule notification
    scheduleNotification(medicationName, reminderTime);
}

// Function to display reminders from local storage
function displayReminders() {
    const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    const remindersList = document.getElementById('reminders');
    remindersList.innerHTML = '';

    reminders.forEach(reminder => {
        const li = document.createElement('li');
        li.textContent = `${reminder.medicationName} - ${new Date(reminder.reminderTime).toLocaleTimeString()}`;
        remindersList.appendChild(li);
    });
}

// Function to schedule notification
function scheduleNotification(medicationName, reminderTime) {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        createNotification(medicationName);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                createNotification(medicationName);
            }
        });
    }
}

// Function to create notification
function createNotification(medicationName) {
    new Notification("Medication Reminder", {
        body: `It's time to take your ${medicationName}`,
        icon: "notification-icon.png"
    });
}

// Load reminders when the page loads
document.addEventListener('DOMContentLoaded', function () {
    displayReminders();
});
