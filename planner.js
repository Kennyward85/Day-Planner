// Sets up moment for jumbotron 
var currentDay = moment().format("dddd, MMMM Do YYYY");
var display = document.getElementById("currentDay");
display.innerHTML = currentDay;

$(document).ready(function() {
// Sets up var to store the information  for document so it can pull to the function for the color coding 
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
// this function updates the css with moment so that the colors reflect properly for time past present future
    function update() {
        var timeNow = moment().hours();
        $(".time-block").each(function () {
            var divHour = parseInt($(this).attr("id").split("-")[1]);
                
        if (divHour < timeNow) {
            $(this).addClass("past");
        }
        else if (divHour === timeNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");  
        }
    });
};
update();

  var interval = setInterval(update, 60000);
// sets up save button function  for the time and value 
$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});
//  set up for it to getitem from local storage for every hour was not sure if there is a more
//  condensed way this can be done to not have as many lines of code 
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
});