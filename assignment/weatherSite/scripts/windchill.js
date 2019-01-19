window.onload = function () {
    // windspeed
    var windspeed = parseInt(document.getElementById('wSpeed').innerHTML);
    // Daily High
    var high = parseInt(document.getElementById('high').innerHTML);
    // Daily Low
    var low = parseInt(document.getElementById('low').innerHTML);
    // Daily Average
    var ave = (high + low) / 2;
    // Power up
    var raise16 = Math.pow(windspeed, 0.16);
    // Windchill math
    var winChil = 35.74 + (0.6215 * ave) - (35.75 * raise16) + (0.4275 * ave * raise16);
    // Return winChil to HTML
    document.getElementById('windchill').innerHTML = winChil.toFixed(2);
};
