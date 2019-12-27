document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('itis').innerText = 'It is';
    refresh();

    window.setInterval(refresh, 1000);
});

function refresh() {
    let date = new Date();
    document.getElementById('date').innerText = getDateString(date);
    document.getElementById('time').innerText = getTimeString(date);
}

function getDateString(date) {
    let year    = String(date.getFullYear());
    let day     = date.getDate() + ordinalIndicator(date.getDate());
    let month   = date.toLocaleString('default', { 'month': 'long', });
    let weekday = date.toLocaleString('default', { 'weekday': 'long', });

    return `${weekday}, ${month} ${day}, ${year}`;
}

function getTimeString(date) {
    let hour = date.getHours();
    let period = hour <= 12 ? 'am' : 'pm';
    hour = hour <= 12 ? hour : hour - 12; // Subtract 12 from hour if pm

    let minute = date.getMinutes();
    minute = minute < 10 ? '0' + minute : String(minute);

    let second = date.getSeconds();
    second = second < 10 ? '0' + second : String(second);

    return `${hour}:${minute}:${second}${period}`;
}

function ordinalIndicator(n) {
    if (n % 100 === 11 || n % 100 === 12 || n % 100 === 13)
        return 'th';

    switch (n % 10) {
    case 1:
        return 'st';
    case 2:
        return 'nd';
    case 3:
        return 'rd';
    default:
        return 'th';
    }
}
