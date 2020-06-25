var currentDay = moment().format("dddd, MMM, Da");
var displayMoment = document.getElementById("currentDay");
displayMoment.innerHTML = currentDay


$(document).ready(function () {

    var value = $(this).siblings(".description").val();

    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);

    function hourUpdater() {
        var timeNow = moment().hours();
        $(".time-block").each(function () {
            var blockHour = parseInt(this).attr("id").split("-")[1];

        if (blockhour < timenow) {
            $(this).addClass(".past");
        }
        else if (blockHour === timeNow) {
            $(this).removeClass(".past");
            $(this).addClass(".present");
        }
        else {
            $(this).removeClass(".past");
            $(this).removeClass(".present");
            $(this).addClass(".future");
        }
    });
    
};

hourUpdater();


var interval = setInterval(hourUpdater, 15000);



$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();

    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);

});











$("hour-8 .description").val(localStorage.getItem("hour-8"));
$("hour-9 .description").val(localStorage.getItem("hour-9"));
$("hour-10 .description").val(localStorage.getItem("hour-10"));
$("hour-11 .description").val(localStorage.getItem("hour-11"));
$("hour-12 .description").val(localStorage.getItem("hour-12"));
$("hour-13 .description").val(localStorage.getItem("hour-13"));
$("hour-14 .description").val(localStorage.getItem("hour-14"));
$("hour-15 .description").val(localStorage.getItem("hour-15"));
$("hour-16 .description").val(localStorage.getItem("hour-16"));
$("hour-17 .description").val(localStorage.getItem("hour-17"));
});