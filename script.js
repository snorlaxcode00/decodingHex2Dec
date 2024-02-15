function decode() {
    var hexInput = document.getElementById("hexInput").value;

    // Step 2: Extract header (first 2 digits of raw data)
    var headerHex = hexInput.substr(0, 2);
    var header = parseInt(headerHex, 16);

    // Step 3: Extract total kWh (8 digits after the first 2 digits)
    var totalKWhHex = hexInput.substr(2, 8);
    var totalKWh = parseInt(totalKWhHex, 16) * 0.2;

    // Step 4: Extract total harmonics - volt (4 digits after the 8 digits total kWh)
    var voltageHarmonicsHex = hexInput.substr(10, 4);
    var voltageHarmonics = parseInt(voltageHarmonicsHex, 16) / 100;

    // Step 5: Extract total harmonics - current (4 digits after the 8 digits total harmonics - volt)
    var currentHarmonicsHex = hexInput.substr(14, 4);
    var currentHarmonics = parseInt(currentHarmonicsHex, 16) / 100;

    // Step 6: Extract phase voltage (4 digits after the 8 digits total harmonics - current)
    var phaseVoltageHex = hexInput.substr(18, 4);
    var phaseVoltage = parseInt(phaseVoltageHex, 16) / 10;

    // Display the decoded values
    var output = "<strong>Header:</strong> " + header + "<br>";
    output += "<strong>Total kWh:</strong> " + totalKWh + " kWh<br>";
    output += "<strong>Voltage Harmonics:</strong> " + voltageHarmonics + "<br>";
    output += "<strong>Current Harmonics:</strong> " + currentHarmonics + "<br>";
    output += "<strong>Phase Voltage:</strong> " + phaseVoltage + " V";

    document.getElementById("output").innerHTML = output;

    // Display the breakdown section
    document.getElementById("breakdown").style.display = "block";

    // Update the breakdown values
    document.getElementById("header").textContent = headerHex + " = " + header;
    document.getElementById("totalKWh").textContent = totalKWhHex + " = " + totalKWh + " kWh";
    document.getElementById("voltageHarmonics").textContent = voltageHarmonicsHex + " = " + voltageHarmonics;
    document.getElementById("currentHarmonics").textContent = currentHarmonicsHex + " = " + currentHarmonics;
    document.getElementById("phaseVoltage").textContent = phaseVoltageHex + " = " + phaseVoltage + " V";
}
