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
})
