// let container = document.getElementsByClassName("container")[0];
let cardContainer = document.getElementById("card-container");

clearInitialHTML();
createCards();
updateTimers();
let updateTimerInterval = window.setInterval(updateTimers, 1000); //updateTimers every 1 second

function createCards() {
    //iterate over the object - each entry in array as separate element
    for (let element of eventList) {
        // console.log(element);

        //initialize card
        let card = "";

        //add category, sectionTitle, Link and Description
        //if sectionTitle is empty remove card-header div
        if (element.category == "") {
            card = `
            <div class="card text-center text-white bg-secondary"                 style="border-color: ${element.categoryColor} !important; border-width: 2px;">
            <div class="card-header bg-secondary">
                <h3 class="card-title"><a href="${element.sectionLink}" class="text-white">${element.sectionTitle}</a></h3>
                <p class="card-text">${element.sectionDescription}</p>
            </div>
        `;
        } else {
            card = `
            <div class="card text-center text-white bg-secondary"                 style="border-color: ${element.categoryColor} !important; border-width: 2px;">
            <div class="card-header p-1">
                <p class="card-text" style="color: ${element.categoryColor};">${element.category}</p>
            </div>
            <div class="card-header bg-secondary">
                <h3 class="card-title"><a href="${element.sectionLink}" class="text-white">${element.sectionTitle}</a></h3>
                <p class="card-text">${element.sectionDescription}</p>
            </div>
        `;
        }

        //create card body
        let cardBody = `
            <div class="card-body p-2 pl-5 pr-5">
            <ul class="list-group list-group-flush">
        `;
        //iterate over each item in section
        for (let item of element.item) {
            // console.log(item);

            let cardBodyItem = `
                <li class="list-group-item bg-secondary p-1 pb-2 mb-3">
                <h5 class="card-title mb-1">${item.itemTitle}</h5>
                <p class="card-text mb-1">${item.itemDescription}</p>
                <ul class="list-group list-group-horizontal justify-content-center">
                    <li class="list-group-item bg-secondary border-0 p-1 ml-4 mr-4">
                        &#8614
                        <hr class="m-0">
                        ${item.itemS.toLocaleString()}
                        <hr class="m-0">
                        <span id="${item.itemSCd.toLowerCase()}">${item.itemSCd}</span>
                    </li>
                    <li class="list-group-item bg-secondary border-0 p-1 ml-4 mr-4">
                        &#8677
                        <hr class="m-0">
                        ${item.itemE.toLocaleString()}
                        <hr class="m-0">
                        <span id="${item.itemECd.toLowerCase()}">${item.itemECd}</span>
                    </li>
                </ul>
                </li>
            `;
            cardBody += cardBodyItem;
        }

        //finish up card body
        cardBody += `</ul>
        </div>
        `;

        //add cardBody to card
        card += cardBody;

        //finish up card
        card += `</div>`;

        //add the created card to document
        cardContainer.insertAdjacentHTML("beforeend", card);
    }
}

function clearInitialHTML() {
    cardContainer.innerHTML = "";
}

function updateTimers() {
    for (let element of eventList) {
        for (let item of element.item) {
            let startCd = countdown(item.itemS);
            let startCdText = document.getElementById(item.itemSCd.toLowerCase());
            //catch exception - only change if exists
            if (startCdText) {
                startCdText.innerText = startCd;
            }

            let endCd = countdown(item.itemE);
            let endCdText = document.getElementById(item.itemECd.toLowerCase());
            if (endCdText) {
                endCdText.innerText = endCd;
            }
        }
    }
}

function countdown(date) {
    //sprawdzenie klasy obiektu - https://stackoverflow.com/a/643827
    if (Object.prototype.toString.call(date) === "[object Date]") {
        let nowMillis = Date.now();
        let dateMillis = date.getTime();
        let dateResult = dateMillis - nowMillis;
        if (dateResult < 0) {
            return "\u2713"; // \u2713 = ✓
        } else {
            return parseMillisecondsIntoReadableTime(dateResult);
        }
    }
    //jeśli nie jest datą daje "-", np. w sytuacjach kiedy nie ma daty zakończenia
    else {
        return "-";
    }
}

function parseMillisecondsIntoReadableTime(milliseconds) {
    var days = milliseconds / (1000 * 60 * 60 * 24);
    var absoluteDays = Math.floor(days);
    var d = absoluteDays > 9 ? absoluteDays : "0" + absoluteDays;

    //Get hours from milliseconds
    var hours = (days - absoluteDays) * 24;
    var absoluteHours = Math.floor(hours);
    var h = absoluteHours > 9 ? absoluteHours : "0" + absoluteHours;

    //Get remainder from hours and convert to minutes
    var minutes = (hours - absoluteHours) * 60;
    var absoluteMinutes = Math.floor(minutes);
    var m = absoluteMinutes > 9 ? absoluteMinutes : "0" + absoluteMinutes;

    //Get remainder from minutes and convert to seconds
    var seconds = (minutes - absoluteMinutes) * 60;
    var absoluteSeconds = Math.floor(seconds);
    var s = absoluteSeconds > 9 ? absoluteSeconds : "0" + absoluteSeconds;

    if (d >= 1) {
        return d + " days\n" + h + ":" + m + ":" + s;
    } else {
        return h + ":" + m + ":" + s;
    }
}
