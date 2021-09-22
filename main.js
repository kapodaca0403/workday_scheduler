$(document).ready(function () {
  var currDay = new Date();
  var newday =
    currDay.getFullYear() +
    "/" +
    (currDay.getMonth() + 1) +
    "/" +
    currDay.getDate();
  document.getElementById("currentDay").innerHTML = currDay;
  // console.log(currDay);
  console.log(newday);
  //var bttn = document.createElement("button");
  //bttn.innerHTML = "Click Me";
  //document.body.appendChild(bttn);

  // target each timeblock by div id
  // compare timeblocks to the current hour
  // split current day into date and time , split time into hours mins, consecs
  // compare current days hours to the current hour on the timeblock , set a class
  // each time block will need to have an input field , target the input field by ID
  // click listener on each input field
  // save button needs click listener, will set the input field text into local storage, key will be input field ID and value will be user input
  // on page load, any info from local storage will populate time blocks "get"
  function timecompare() {
    var currentHour = moment().hours();
    $(".block").each(function () {
      var hourblock = parseInt($(this).attr("id").split("-")[1]);
      if (hourblock < currentHour) {
        $(this).addClass("past");
      } else if (hourblock === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  timecompare();
});

$(".saveBtn").click(function () {
  event.preventDefault();
  var savedInput = $(this).siblings("textarea").val();
  console.log("Saving task to Local Storage");
  var input = $(this).siblings("textarea").attr("id");
  localStorage.setItem(input, savedInput);
  console.log(input);
  //localStorage.getItem(savedInput);
});

//accessing the textarea , accessing all textarea using .each function , inside of function to iterate over all of textarea, can access elements by using $(this) grabbing value from local storage from first textarea , after first $this element being grabbeed we can now access the next one.
$("textarea").each(function () {
  $(this).val(localStorage.getItem($(this).attr("id")));
});

// $("#hourblock-17").val(localStorage.getItem("hourblock-17"));
//let i = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// for (var i = 0; i < 9; i++) {
// var getStor = (localStorage.getItem)
//var getStor = $(this).siblings("textarea").key(i);
//$("textarea").append(localStorage.getItem(localStorage.key("timeblock")));
