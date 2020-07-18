let events = [];
let links = [];
let dates = [];
let datesEnd = [];
let countdowns = [];
let countdownsEnd = [];

let timezonePDT = -25200000;
let timezoneEDT = -14400000;
let timezoneUTC = 0;
let timezoneCEST = 7200000;

// ----------------------DANE----------------------------- 
events[0] = "Maintenance";
events[1] = "Tera Burning"
events[2] = "Adele";
events[3] = "Reverse City";
events[4] = "Maple Relay";
events[5] = "Rise Stamp Shop";
events[6] = "Rise Royal Shop";
events[7] = "Rise Fountain #1";
events[8] = "Rise Fountain #2";
events[9] = "Rise Fountain #3";
events[10] = "Rise Coin Shop #1";
events[11] = "Rise Coin Shop #2";
events[12] = "Rise Coin Shop #3";
events[13] = "";
events[14] = "";
events[15] = "";
events[16] = "";

links[0] = "http://maplestory.nexon.net/news/58384/complete-scheduled-game-update-june-10-2020";
links[1] = "http://maplestory.nexon.net/news/58358/rise-up-with-tera-burning"
links[2] = "http://maplestory.nexon.net/news/58015/v-214-rise-promise-of-the-guardian-patch-notes#support";
links[3] = "http://maplestory.nexon.net/news/58015/v-214-rise-promise-of-the-guardian-patch-notes#reverse";
links[4] = "http://maplestory.nexon.net/news/58015/v-214-rise-promise-of-the-guardian-patch-notes#relay";
links[5] = "http://maplestory.nexon.net/news/58015/v-214-rise-promise-of-the-guardian-patch-notes#stamp";
links[6] = "http://maplestory.nexon.net/news/58015/v-214-rise-promise-of-the-guardian-patch-notes#royal";
links[7] = "http://maplestory.nexon.net/news/58015/v-214-rise-promise-of-the-guardian-patch-notes#fountain";
links[8] = "http://maplestory.nexon.net/news/58015/v-214-rise-promise-of-the-guardian-patch-notes#fountain";
links[9] = "http://maplestory.nexon.net/news/58015/v-214-rise-promise-of-the-guardian-patch-notes#fountain";
links[10] = "http://maplestory.nexon.net/news/58015/v-214-rise-promise-of-the-guardian-patch-notes#coin";
links[11] = "http://maplestory.nexon.net/news/58015/v-214-rise-promise-of-the-guardian-patch-notes#coin";
links[12] = "http://maplestory.nexon.net/news/58015/v-214-rise-promise-of-the-guardian-patch-notes#coin";
links[13] = "";
links[14] = "";
links[15] = "";
links[16] = "";


dates[0] = new Date("2020/06/10 19:00:00"); //wszystko w CEST
dates[1] = new Date("2020/06/11 01:00:00")
dates[2] = new Date("2020/06/24 02:00:00");
dates[3] = new Date("2020/07/08 02:00:00");
dates[4] = new Date("2020/06/11 01:00:00");
dates[5] = new Date("2020/06/11 01:00:00");
dates[6] = new Date("2020/06/11 01:00:00");
dates[7] = new Date("2020/06/11 01:00:00");
dates[8] = new Date("2020/07/08 02:00:00");
dates[9] = new Date("2020/08/05 02:00:00");
dates[10] = new Date("2020/06/11 01:00:00");
dates[11] = new Date("2020/07/09 02:00:00");
dates[12] = new Date("2020/08/05 02:00:00");
dates[13] = new Date("");
dates[14] = new Date("");
dates[15] = new Date("");
dates[16] = new Date("");

datesEnd[0] = new Date("2020/06/11 01:00:00"); //after maintenance
datesEnd[1] = new Date("2020/07/22 02:00:00");
datesEnd[2] = new Date("2020/07/22 02:00:00");
datesEnd[3] = "-";
datesEnd[4] = new Date("2020/07/22 02:00:00");
datesEnd[5] = new Date("2020/08/31 02:00:00");
datesEnd[6] = new Date("2020/08/31 02:00:00");
datesEnd[7] = new Date("2020/07/08 02:00:00");
datesEnd[8] = new Date("2020/08/05 02:00:00");
datesEnd[9] = new Date("2020/08/26 02:00:00");
datesEnd[10] = new Date("2020/07/08 02:00:00");
datesEnd[11] = new Date("2020/08/05 02:00:00");
datesEnd[12] = new Date("2020/08/31 02:00:00");
datesEnd[13] = new Date("");
datesEnd[14] = new Date("");
datesEnd[15] = new Date("");
datesEnd[16] = new Date("");

countdowns[0] = countdown(dates[0]);
countdowns[1] = countdown(dates[1]);
countdowns[2] = countdown(dates[2]);
countdowns[3] = countdown(dates[3]);
countdowns[4] = countdown(dates[4]);
countdowns[5] = countdown(dates[5]);
countdowns[6] = countdown(dates[6]);
countdowns[7] = countdown(dates[7]);
countdowns[8] = countdown(dates[8]);
countdowns[9] = countdown(dates[9]);
countdowns[10] = countdown(dates[10]);
countdowns[11] = countdown(dates[11]);
countdowns[12] = countdown(dates[12]);
countdowns[13] = countdown(dates[13]);
countdowns[14] = countdown(dates[14]);
countdowns[15] = countdown(dates[15]);
countdowns[16] = countdown(dates[16]);

countdownsEnd[0] = countdown(datesEnd[0]);
countdownsEnd[1] = countdown(datesEnd[1]);
countdownsEnd[2] = countdown(datesEnd[2]);
countdownsEnd[3] = "-";
countdownsEnd[4] = countdown(datesEnd[4]);
countdownsEnd[5] = countdown(datesEnd[5]);
countdownsEnd[6] = countdown(datesEnd[6]);
countdownsEnd[7] = countdown(datesEnd[7]);
countdownsEnd[8] = countdown(datesEnd[8]);
countdownsEnd[9] = countdown(datesEnd[9]);
countdownsEnd[10] = countdown(datesEnd[10]);
countdownsEnd[11] = countdown(datesEnd[11]);
countdownsEnd[12] = countdown(datesEnd[12]);
countdownsEnd[13] = countdown(datesEnd[13]);
countdownsEnd[14] = countdown(datesEnd[14]);
countdownsEnd[15] = countdown(datesEnd[15]);
countdownsEnd[16] = countdown(datesEnd[16]);

// ----------------------DANE----------------------------- 

tableHeader();
generate_table(13);


function conversion(timezoneSource, date, timezoneTarget) {
    let dateUTC = date - timezoneSource;
    let dateAfterConversion = dateUTC + timezoneTarget;
    let dateShow = new Date();
    dateShow.setTime(dateAfterConversion);
    return dateShow;
}

function countdown(date) {
    let nowMillis = Date.now();
    let dateMillis = date.getTime();
    let dateResult = dateMillis - nowMillis;
    if(dateResult < 0){
        return "*"
    } else {
        return parseMillisecondsIntoReadableTime(dateResult);
    }
}

function generate_table(max) {
    // get the reference for the table
    var tbl = document.getElementsByTagName("table")[0];

    // creates a <tbody> element
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (var i = 0; i < max; i++) {
        // creates a table row
        var row = document.createElement("tr");
    
        var cell1 = document.createElement("td");
        var link = document.createElement("a");
        link.setAttribute("href", links[i]);
        var cellText1 = document.createTextNode(events[i]);
        link.appendChild(cellText1);
        cell1.appendChild(link);
        row.appendChild(cell1);

        var cell2 = document.createElement("td");
        var cellText2 = document.createTextNode(dates[i].toLocaleString());
        cell2.appendChild(cellText2);
        row.appendChild(cell2);

        var cell3 = document.createElement("td");
        var cellText3 = document.createTextNode(countdowns[i]);
        cell3.appendChild(cellText3);
        row.appendChild(cell3);

        var cell4 = document.createElement("td");
        var cellText4 = document.createTextNode(datesEnd[i].toLocaleString());
        cell4.appendChild(cellText4);
        row.appendChild(cell4);

        var cell5 = document.createElement("td");
        var cellText5 = document.createTextNode(countdownsEnd[i]);
        cell5.appendChild(cellText5);
        row.appendChild(cell5);
        
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
}

function tableHeader(){
    var tbl = document.getElementsByTagName("table")[0];
    var tblHead = document.createElement("thead");

    var row = document.createElement("tr");
    
    var cell1 = document.createElement("th");
    var cellText1 = document.createTextNode("Event");
    cell1.appendChild(cellText1);
    row.appendChild(cell1);

    var cell2 = document.createElement("th");
    var cellText2 = document.createTextNode("Start date");
    cell2.appendChild(cellText2);
    row.appendChild(cell2);

    var cell3 = document.createElement("th");
    var cellText3 = document.createTextNode("Start countdown");
    cell3.appendChild(cellText3);
    row.appendChild(cell3);

    var cell4 = document.createElement("th");
    var cellText4 = document.createTextNode("End date");
    cell4.appendChild(cellText4);
    row.appendChild(cell4);

    var cell5 = document.createElement("th");
    var cellText5 = document.createTextNode("End countdown ");
    cell5.appendChild(cellText5);
    row.appendChild(cell5);

    tblHead.appendChild(row);
    tbl.appendChild(tblHead);
}

function parseMillisecondsIntoReadableTime(milliseconds){
    var days = milliseconds / (1000*60*60*24);
    var absoluteDays = Math.floor(days);
    var d = absoluteDays > 9 ? absoluteDays : '0' + absoluteDays;

    //Get hours from milliseconds
    var hours = (days - absoluteDays) * 24;
    var absoluteHours = Math.floor(hours);
    var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;
  
    //Get remainder from hours and convert to minutes
    var minutes = (hours - absoluteHours) * 60;
    var absoluteMinutes = Math.floor(minutes);
    var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;
  
    //Get remainder from minutes and convert to seconds
    var seconds = (minutes - absoluteMinutes) * 60;
    var absoluteSeconds = Math.floor(seconds);
    var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;
  
    if(d >= 1){
        return d + " days\n" + h + ':' + m + ':' + s;
    } else {
        return h + ':' + m + ':' + s;
    }

  }
  
  