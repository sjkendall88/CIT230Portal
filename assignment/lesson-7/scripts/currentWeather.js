
// This is the Weather Function
var weatherObject = new XMLHttpRequest();

weatherObject.open("GET", "http://dataservice.accuweather.com/currentconditions/v1/335794?apikey=WTrmHSpsGdPlLTNzgzKbeZ95rADq2GQF&details=true", 'true');

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.response);
    console.log(weatherInfo);
    document.getElementById('high').innerHTML = weatherInfo.TemperatureSummary;
}
; // End of onload


