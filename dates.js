let input;
let output;

let inputTextArea = document.getElementById("textInput");
let outputTextArea = document.getElementById("textOutput");

inputTextArea.addEventListener("input", function () {
    formatData();
});

// select all text when clicking into a text area
inputTextArea.onfocus = function () {
    inputTextArea.select();
};
outputTextArea.onfocus = function () {
    outputTextArea.select();
};

// test buttons setup
document.getElementById("testMaintenance").onclick = function () {
    inputTextArea.value = `UTC: October 6 (after maintenance) – November 2 at 11:59 PM


`;
    formatData();
};
document.getElementById("testMaintenance").onclick = function () {
    inputTextArea.value = `UTC: October 6 (after maintenance) – November 2 at 11:59 PM


`;
    formatData();
};
document.getElementById("testAMPM").onclick = function () {
    inputTextArea.value = `UTC: October 17 at 12:00 AM – October 17 at 11:59 PM

`;
    formatData();
};

// main data formatting function
function formatData() {
    input = inputTextArea.value;

    output = `itemS: new Date("`;

    // itemS: new Date("2021/10/07 00:00 UTC"),
    // itemE: new Date("2021/11/02 11:59 PM UTC"),

    // split the date at the hyphen (-) into from [0] and to [1]
    let inputDate = input.split("-");
    inputDate = input.split("–"); //either short - or long – hyphen works here
    inputDate = input.split("-"); //third type of hyphen
    inputDate = input.split("–");
    console.log(inputDate);

    let dateFrom = inputDate[0].split(" ");
    console.log(dateFrom);

    // put in current year - to be fixed if they specify a year in the future
    output += new Date().getFullYear();
    output += "/";

    // if length = 6, then it says after maintenance - therefore +1 day and set time to 00:00 UTC
    // UTC: October 6 (after maintenance) – November 2 at 11:59 PM
    if (dateFrom.length == 6) {
        output += checkMonth(dateFrom[1]) + "/";
        let day = parseInt(dateFrom[2]) + 1;
        output += day + " 00:00 ";
    }

    if (dateFrom.length == 7) {
        output += checkMonth(dateFrom[1]) + "/";
        output += dateFrom[2] + " ";
        output += dateFrom[4] + " ";
        output += dateFrom[5] + " ";
    }

    // add UTC and finish the Start Date
    output += `UTC"),\n`;

    let dateTo = inputDate[1].split(" ");
    console.log(dateTo);

    output += `itemE: new Date("`;

    if (
        checkMonth(dateTo[1]) == "01" ||
        checkMonth(dateTo[1]) == "02" ||
        checkMonth(dateTo[1]) == "03"
    ) {
        output += new Date().getFullYear() + 1;
    } else {
        output += new Date().getFullYear();
    }
    output += "/";
    output += checkMonth(dateTo[1]) + "/";
    output += dateTo[2] + " ";
    output += dateTo[4] + " ";
    dateTo[5] = dateTo[5].replace(/(\r\n|\n|\r)/gm, "");
    output += dateTo[5] + " ";

    // output -= "\n";
    output += `UTC"),`;

    // update the output text area
    outputTextArea.value = output;
}

function checkMonth(month) {
    switch (month) {
        case "January":
            return "01";
        case "February":
            return "02";
        case "March":
            return "03";
        case "April":
            return "04";
        case "May":
            return "05";
        case "June":
            return "06";
        case "July":
            return "07";
        case "August":
            return "08";
        case "September":
            return "09";
        case "October":
            return "10";
        case "November":
            return "11";
        case "December":
            return "12";
        default:
            return "ERROR";
    }
}
