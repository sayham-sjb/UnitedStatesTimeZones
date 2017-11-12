//@author Sayham Chowdhury
//UnitedStatesTimeZones.css

document.getElementById("outTmZn1").innerHTML = "Hawaii Time_ ";
document.getElementById("outTmZn3").innerHTML = "Hawaii-Aleutian Time_ ";
document.getElementById("outTmZn5").innerHTML = "Alaskan Time_ ";
document.getElementById("outTmZn7").innerHTML = "Pacific Time_ ";
document.getElementById("outTmZn9").innerHTML = "Mountain Time_ ";
document.getElementById("outTmZn11").innerHTML = "Central Time_ ";
document.getElementById("outTmZn13").innerHTML = "Eastern Time_ ";
document.getElementById("outTmZn15").innerHTML = "Atlantic Time_ ";
document.getElementById("outTmZn17").innerHTML = "GMT Time_ ";
document.getElementById("outTmZn19").innerHTML = "Local Time_ ";
setInterval(function(){ autoTmZn(); }, 1000);
function autoTmZn() {
Date.prototype.stdTimezoneOffset = function() {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());}
Date.prototype.dst = function() {return this.getTimezoneOffset() < this.stdTimezoneOffset();}
var today = new Date();
var isDST = today.dst() ? true : false;
var hwiOffSet = isDST ? 10 : 10;
var hstOffSet = isDST ? 9 : 10;
var akstOffSet = isDST ? 8 : 9;
var pstOffSet = isDST ? 7 : 8;
var mdtOffSet = isDST ? 6 : 7;
var cstOffSet = isDST ? 5 : 6;
var estOffSet = isDST ? 4 : 5;
var astOffSet = isDST ? 4 : 5;
var gmtOffSet = 1;
hwiOffSet = hwiOffSet * 60 * 60 * 1000;
hstOffSet = hstOffSet * 60 * 60 * 1000;
akstOffSet = akstOffSet * 60 * 60 * 1000;
pstOffSet = pstOffSet * 60 * 60 * 1000;
mdtOffSet = mdtOffSet * 60 * 60 * 1000;
cstOffSet = cstOffSet * 60 * 60 * 1000;
estOffSet = estOffSet * 60 * 60 * 1000;
astOffSet = astOffSet * 60 * 60 * 1000;
gmtOffset = gmtOffSet * 60 * 60 * 1000;
var todayMillis = today.getTime();
var timeZoneOffset = (today.getTimezoneOffset() * 60 * 1000);
var curretHWI = todayMillis - hwiOffSet;
var curretHST = todayMillis - hstOffSet;
var curretAKST = todayMillis - akstOffSet;
var curretPST = todayMillis - pstOffSet;
var curretMDT = todayMillis - mdtOffSet;
var curretCST = todayMillis - cstOffSet; 
var curretEST = todayMillis - estOffSet;
var curretAST = todayMillis - astOffSet;
var curretGMT = todayMillis - gmtOffSet;
document.getElementById("outTmZn2").innerHTML = new Date(curretHWI).toUTCString();
document.getElementById("outTmZn4").innerHTML = new Date(curretHST).toUTCString();
document.getElementById("outTmZn6").innerHTML = new Date(curretAKST).toUTCString();
document.getElementById("outTmZn8").innerHTML = new Date(curretPST).toUTCString();
document.getElementById("outTmZn10").innerHTML = new Date(curretMDT).toUTCString();
document.getElementById("outTmZn12").innerHTML = new Date(curretCST).toUTCString();
document.getElementById("outTmZn14").innerHTML = new Date(curretEST).toUTCString();
document.getElementById("outTmZn16").innerHTML = new Date(curretAST).toUTCString();
document.getElementById("outTmZn18").innerHTML = new Date(curretGMT).toUTCString();
document.getElementById("outTmZn20").innerHTML = new Date(today.getTime() - timeZoneOffset ).toUTCString();
}
