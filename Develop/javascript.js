var dateDisplay = $('#currentDay');

function displayDate(){
    var now = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateDisplay.text(now);
}

setInterval(displayDate, 1000);