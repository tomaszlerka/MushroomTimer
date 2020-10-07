for (i=0; i < event.length; i++){
    event[i].countdown = countdown(event[i].date);
    event[i].countdownEnd = countdown(event[i].dateEnd);
}

//debugging
console.log(event);

//Generowanie tabeli
generateTableHeader();
generateTable(event.length);

// ----------------------Funkcje----------------------------- 

function countdown(date) {
    //sprawdzenie klasy obiektu - https://stackoverflow.com/a/643827
    if(Object.prototype.toString.call(date) === '[object Date]'){ 
        let nowMillis = Date.now();
        let dateMillis = date.getTime();
        let dateResult = dateMillis - nowMillis;
        if(dateResult < 0){
            return '\u2713'; // \u2713 = ✓
        } else {
            return parseMillisecondsIntoReadableTime(dateResult);
        }
    }
    //jeśli nie jest datą daje "-", np. w sytuacjach kiedy nie ma daty zakończenia
    else{
        return "-";
    }
}

function generateTable(max) {
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
        link.setAttribute("href", event[i].link);
        var cellText1 = document.createTextNode(event[i].name);
        link.appendChild(cellText1);
        cell1.appendChild(link);
        row.appendChild(cell1);

        var cell2 = document.createElement("td");
        var cellText2 = document.createTextNode(event[i].date.toLocaleString());
        cell2.appendChild(cellText2);
        row.appendChild(cell2);

        var cell3 = document.createElement("td");
        var cellText3 = document.createTextNode(event[i].countdown);
        cell3.appendChild(cellText3);
        row.appendChild(cell3);

        var cell4 = document.createElement("td");
        var cellText4 = document.createTextNode(event[i].dateEnd.toLocaleString());
        cell4.appendChild(cellText4);
        row.appendChild(cell4);

        var cell5 = document.createElement("td");
        var cellText5 = document.createTextNode(event[i].countdownEnd);
        cell5.appendChild(cellText5);
        row.appendChild(cell5);
        
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
}

function generateTableHeader(){
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
