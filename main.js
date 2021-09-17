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
  // split current day into date and time , split time into hours mins, secs
  // compare current days hours to the current hour on the timeblock , set a class
  // each time block will need to have an input field , target the input field by ID
  // click listener on each input field
  // save button needs click listener, will set the input field text into local storage, key will be input field ID and value will be user input
  // on page load, any info from local storage will populate time blocks "get"
  function timecompare() {
    var currentHour = moment().hours();
    console.log(currentHour);
    $(".block").each(function () {
      var hourblock = parseInt($(this).attr("id").split("-")[1]);
      console.log(hourblock);
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

  $;
});
