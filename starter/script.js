//Display current days date using moment.js.
//Make sure date displayed Month, date, year
//example November 20, 2023

var currentDay = moment().format('LL');
$("#currentDay").text(currentDay);


//Added timeblocks to HTML file
//get time-block element
//create variables for currentHour
//create variable for each block hour
//colour code past, present, future using if/else statement
//if blockHour < currentHour = past (if)
//if blockHour === currentHour = present (else if)
//if blockHour < currentHour = future (else)

$(".time-block").each(function(){
var currentHour = dayjs().hour()
var blockHour = parseInt($(this).attr("id").split("-")[1])
if (blockHour < currentHour) {
    $(this).addClass("past")
} else if (blockHour === currentHour) {
    $(this).addClass("present")
}
else {
    $(this).addClass("future")   
}
});


//Save button event listener
//Save data to local storage
//retrieve data from local storage by using a for loop to loop through times and target the description
//area around save icon to save information to local storage

$(".saveBtn").on("click", function(event){
var value;
var time;
if (event.target.nodeName === "BUTTON") {
    value = $(event.target).siblings(".description").val();
    time = $(event.target).parent().attr("id"); 
} else {
   value = $(event.target).parent().siblings(".description").val()
   time = $(event.target).parent().parent().attr("id");
}
/*var value = $(event.target).siblings(".description").val();
var time = $(event.target).parent().attr("id");*/

localStorage.setItem(time, value);
})

for (let i = 9; i < 18; i++) {
  $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
    
}