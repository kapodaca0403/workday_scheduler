var currDay = new Date();
var newday =
  currDay.getFullYear() +
  "/" +
  (currDay.getMonth() + 1) +
  "/" +
  currDay.getDate();
document.getElementById("currentDay").innerHTML = currDay;
