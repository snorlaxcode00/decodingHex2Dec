function decodeHex() {
    var hexInput = document.getElementById("hexInput").value;

    // Extract individual fields based on their positions and lengths
    var header = parseInt(hexInput.substr(0, 2), 16);
    var totalKWh = parseInt(hexInput.substr(2, 8), 16) * 0.2;
    var voltageHarmonics = parseInt(hexInput.substr(10, 4), 16) / 100;
    var currentHarmonics = parseInt(hexInput.substr(14, 4), 16) / 100;
    var phaseVoltage = parseInt(hexInput.substr(18, 4), 16) / 10;

    // Display the decoded values
    var output = "<strong>Header:</strong> " + header + "<br>";
    output += "<strong>Total kWh:</strong> " + totalKWh + " kWh<br>";
    output += "<strong>Voltage Harmonics:</strong> " + voltageHarmonics + "<br>";
    output += "<strong>Current Harmonics:</strong> " + currentHarmonics + "<br>";
    output += "<strong>Phase Voltage:</strong> " + phaseVoltage + " V";

    document.getElementById("outputHex").innerHTML = output;

    // Display the breakdown section
    document.getElementById("breakdownHex").style.display = "block";
}

function decodeEpoch() {
    var epochInput = document.getElementById("epochInput").value;

    // Decode epoch time
    var epochTime = parseInt(epochInput);

    // Convert epoch time to JavaScript Date object
    var date = new Date(epochTime * 1000); // Convert seconds to milliseconds

    // Extract individual components of the date
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1; // Months are zero-based, so add 1
    var day = date.getUTCDate();
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();

    // Format date and time components
    var formattedDate = year + "-" + pad(month) + "-" + pad(day);
    var formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);

    // Display the decoded values
    var output = "<strong>Epoch Time:</strong> " + epochTime + "<br>";
    output += "<strong>Date:</strong> " + formattedDate + "<br>";
    output += "<strong>Time:</strong> " + formattedTime + " (UTC)";

    document.getElementById("outputEpoch").innerHTML = output;

    // Display the breakdown section
    document.getElementById("breakdownEpoch").style.display = "block";
}

// Helper function to pad single digits with leading zeros
function pad(number) {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}
