var dateDisplay = $('#currentDay');

// Get current date time
function displayDate() {
    var now = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateDisplay.text(now);
}

$(document).ready(function () {
    // Save btn click
    $(".saveBtn").click(function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // Save text to local storage
        localStorage.setItem(time, text);
    })
    // Check time
    function timeCheck() {
        // Get current hours
        var currentTime = moment().hour();
        // Time block
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // Check time and add class color for background
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime == currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    // Get item from local storage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeCheck();
})



setInterval(displayDate, 1000);