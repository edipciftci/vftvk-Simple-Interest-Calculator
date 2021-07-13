/* 
  Function to compute the ending year of the interest and amount of interest.
  Activates when clicked on "computeButton".
  Uses the following input from the user: Principal money amount, rate of interest,
number of years for payback.
  Gives an output string of these values to print as the text of "result".
*/

document.getElementById("computeButton").onclick = function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);
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
  result.innerText = text;
};

/*
  Function to update the "rate" text according to the slider.
  Activates when the slider is moved.
*/

document.getElementById("rate").onchange = function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
};

/*
  Function to check whether the principal value is positive or not.
  If it is not, alerts the user.
  Activates when the value of "principal" is changed.
*/

document.getElementById("principal").onchange = function checkPositive() {
  var principal = document.getElementById("principal");
  if (principal.value <= 0){
    alert("Enter a positive number");
    setTimeout(function(){principal.focus();}, 1);
  }
};
