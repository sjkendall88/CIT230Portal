
// This is the Weather Function
var weatherObject = new XMLHttpRequest();

weatherObject.open("GET", "//dataservice.accuweather.com/currentconditions/v1/335794?apikey=WTrmHSpsGdPlLTNzgzKbeZ95rADq2GQF&details=true", 'true');

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    document.getElementById('high').innerHTML = weatherInfo["0"].TemperatureSummary.Past12HourRange.Maximum.Imperial.Value;
    document.getElementById('low').innerHTML = weatherInfo["0"].TemperatureSummary.Past12HourRange.Minimum.Imperial.Value;
    // document.getElementById('precip').innerHTML = weatherInfo["0"].Wind.Speed.Imperial.Value;
    document.getElementById('wSpeed').innerHTML = weatherInfo["0"].Wind.Speed.Imperial.Value;
    document.getElementById('windChill').innerHTML = weatherInfo["0"].WindChillTemperature.Imperial.Value;
    document.getElementById('direction').innerHTML = weatherInfo["0"].Wind.Direction.Localized;

    var iconCode = weatherInfo["0"].WeatherIcon;
    var iconPath = "//apidev.accuweather.com/developers/Media/Default/WeatherIcons/0" + iconCode + "-s.png";
    document.getElementById("weaIcon").src = iconPath;

}
; // End of onload


