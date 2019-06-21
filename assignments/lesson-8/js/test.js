//sets variables
var tempHi = parseFloat(document.getElementById("wbhigh").textContent);
var tempLo = parseFloat(document.getElementById("wblow").textContent);
var s = parseFloat(document.getElementById("wbwindsp").textContent);
 
//calculates average of temphi and templo
var t = ((tempHi + tempLo) / 2);
 
//actual formula
var f = (35.74 + (.6215 * t)) - (35.75 * Math.pow(s, .16)) + (.4275 * (t * Math.pow(s, .16)));
 
//output
if (t > 50 || s < 3) {
    document.getElementById("windchill").innerHTML = "No wind chill for you!";
}
else {
    document.getElementById("windchill").innerHTML = Math.round(f*10)/10 + " " + '\xB0' + "F";
}