var t = 76; // average temp ( high + low / 2 ) in Fahrenheit
var s = 5; // Wind Speed in miles per hour
var f;
f = 35.74 + 0.6215 * t - 35.75 * Math.pow( s, 0.16 ) + 0.4275 * t * Math.pow( s, 0.16 );
document.getElementById("windChill").innerHTML = f.toFixed( 2 );