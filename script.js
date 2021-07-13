/* 
  Function activates when clicked on "computeButton".
  Uses the following input from the user: Principal money amount, rate of interest,
number of years for payback.
  It has three objectives.
  First is to compute the ending year of the interest and amount of interest.
  Second is to give an output string of these values to print as the text of "result".
  Third is to check whether the principal value is positive or not. If it is not,
alerts the user and focuses on the principal box.
*/

document.getElementById("computeButton").onclick = function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);
  if (principal <= 0){
    alert("Enter a positive number");
    setTimeout(function(){document.getElementById("principal").focus();}, 1);
  }
  else{
  var text =
    "If you deposit " +
    principal.toString().bold() +
    ",\nat an interest rate of " +
    rate.toString().bold() +
    "%.\nYou will receive an amount of " +
    interest.toString().bold() +
    ",\nin the year " +
    year.toString().bold();
  var result = document.getElementById("result");
  result.innerText = text;var principal = document.getElementById("principal");
  }
};

/*
  Function to update the "rate" text according to the slider.
  Activates when the slider is moved.
*/

document.getElementById("rate").onchange = function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
};
