function validateAndSetReminder() {
    var medicationName = document.getElementById('medicationName').value;
    var reminderTime = document.getElementById('reminderTime').value;
    var medicationNameError = document.getElementById('medicationNameError');
    var reminderTimeError = document.getElementById('reminderTimeError');
    
    medicationNameError.textContent = '';
    reminderTimeError.textContent = '';
    
    if (medicationName.trim() === '') {
        medicationNameError.textContent = 'Medication name cannot be empty';
        return;
    }
    
    if (reminderTime.trim() === '') {
        reminderTimeError.textContent = 'Reminder time cannot be empty';
        return;
    }
    
    // Assuming you have a function called setReminder() to handle setting the reminder
    setReminder();
}
