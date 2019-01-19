// This is the Weather Function
var weatherObject = new XMLHttpRequest();
/*
weatherObject.open("GET", "https://dataservice.accuweather.com/currentconditions/v1/335794?apikey=WTrmHSpsGdPlLTNzgzKbeZ95rADq2GQF&details=true", 'true');
*/
weatherObject.open("GET", "https://dataservice.accuweather.com/currentconditions/v1/2247550?apikey=WTrmHSpsGdPlLTNzgzKbeZ95rADq2GQF&details=true", 'true');
weatherObject.responseType = "json";
weatherObject.send();
/*
weatherObject.onload = function() {
    var weatherInfo = weatherObject.response;
    var code = weatherInfo["0"].WeatherIcon;
    var iconCode;
    console.log(weatherInfo);
    console.log(code);
    if (code <= 9) {
        iconCode = "0" + code;
    }else {
        iconCode = code;
    }
    console.log(iconCode);
    var iconPath = "https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/" + iconCode + "-s.png";
  document.getElementById('high').innerHTML = weatherInfo["0"].TemperatureSummary.Past12HourRange.Maximum.Imperial.Value;
    document.getElementById('low').innerHTML = weatherInfo["0"].TemperatureSummary.Past12HourRange.Minimum.Imperial.Value;
    // document.getElementById('precip').innerHTML = weatherInfo["0"].Wind.Speed.Imperial.Value;
    document.getElementById('wSpeed').innerHTML = weatherInfo["0"].Wind.Speed.Imperial.Value;
    document.getElementById('windChill').innerHTML = weatherInfo["0"].WindChillTemperature.Imperial.Value;
    document.getElementById('direction').innerHTML = weatherInfo["0"].Wind.Direction.Localized;

    document.getElementById("weaIcon").src = iconPath;
    document.getElementById("curTemp").innerHTML = weatherInfo.Temperature.Imperial.Value;
}
*/
/* -------------- Franklin, MN -------------- */
weatherObject.onload = function() {
    var weatherInfo = weatherObject.response;
    var code = weatherInfo["0"].WeatherIcon;
    var iconCode;
    console.log(weatherInfo);
    console.log(code);
    if (code <= 9) {
        iconCode = "0" + code;
    }else {
        iconCode = code;
    }
    console.log(iconCode);
    var iconPath = "https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/" + iconCode + "-s.png";
  document.getElementById('high').innerHTML = weatherInfo["0"].TemperatureSummary.Past12HourRange.Maximum.Imperial.Value;
    document.getElementById('low').innerHTML = weatherInfo["0"].TemperatureSummary.Past12HourRange.Minimum.Imperial.Value;
    // document.getElementById('precip').innerHTML = weatherInfo["0"].Wind.Speed.Imperial.Value;
    document.getElementById('wSpeed').innerHTML = weatherInfo["0"].Wind.Speed.Imperial.Value;
    document.getElementById('windChill').innerHTML = weatherInfo["0"].WindChillTemperature.Imperial.Value;
    document.getElementById('direction').innerHTML = weatherInfo["0"].Wind.Direction.Localized;

    document.getElementById("weaIcon").src = iconPath;
    document.getElementById("curTemp").innerHTML = weatherInfo.Temperature.Imperial.Value;
}
/*["0"].Temperature.Imperial.Value
weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    var iconCode = weatherInfo["0"].WeatherIcon;
    var iconPath = "https://developer.accuweather.com/sites/default/files/0" + iconCode + "-s.png";
    console.log(weatherInfo);
    console.log(iconPath);
    document.getElementById('high').innerHTML = weatherInfo["0"].TemperatureSummary.Past12HourRange.Maximum.Imperial.Value;
    document.getElementById('low').innerHTML = weatherInfo["0"].TemperatureSummary.Past12HourRange.Minimum.Imperial.Value;
    // document.getElementById('precip').innerHTML = weatherInfo["0"].Wind.Speed.Imperial.Value;
    document.getElementById('wSpeed').innerHTML = weatherInfo["0"].Wind.Speed.Imperial.Value;
    document.getElementById('windChill').innerHTML = weatherInfo["0"].WindChillTemperature.Imperial.Value;
    document.getElementById('direction').innerHTML = weatherInfo["0"].Wind.Direction.Localized;
    document.getElementById("current-temp").innerHTML = weatherInfo["0"].Temperature.Imperial.Value;
    document.getElementById("weaIcon").src = iconPath;
}*/





;// End of onload
