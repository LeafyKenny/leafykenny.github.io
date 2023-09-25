// Function to get the formatted day of the week
function getDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}

// Function to add leading zeros to single-digit numbers
function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
}

// Function to get the formatted month
function getMonth(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[date.getMonth()];
}

// Function to get the time zone offset
function getTimeZoneOffset(date) {
    const offset = date.getTimezoneOffset() / -60;
    return offset > 0 ? '+' + addLeadingZero(offset) : addLeadingZero(offset);
}

// Function to display the current date and time in the specified format
function displayDateTime() {
    const now = new Date();
    const dayOfWeek = getDayOfWeek(now);
    const day = addLeadingZero(now.getDate());
    const month = getMonth(now);
    const year = now.getFullYear();
    const hour = addLeadingZero(now.getHours());
    const minute = addLeadingZero(now.getMinutes());
    const second = addLeadingZero(now.getSeconds());
    const timeZoneOffset = getTimeZoneOffset(now);

    const dateTimeString = `${dayOfWeek}, ${day} ${month} ${year}, ${hour}:${minute}:${second}H UTC${timeZoneOffset} \n`;

    document.getElementById('datetime').textContent = dateTimeString;
}

// Call the function to display the date and time on page load
displayDateTime();

// Update the date and time every second
setInterval(displayDateTime, 1000);