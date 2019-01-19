// This is the Weather Function
var weatherObject = new XMLHttpRequest();
weatherObject.open("GET", "https://dataservice.accuweather.com/currentconditions/v1/17430_PC?apikey=r7Vgw24pmQS5e0aexjpoSEGX0gnu3m5J&details=true", 'true');
weatherObject.responseType = "json";
weatherObject.send();
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
    document.getElementById('precip').innerHTML = weatherInfo["0"].Wind.Speed.Imperial.Value;
    document.getElementById('wSpeed').innerHTML = weatherInfo["0"].Wind.Speed.Imperial.Value;
    document.getElementById('windChill').innerHTML = weatherInfo["0"].WindChillTemperature.Imperial.Value;
    document.getElementById('direction').innerHTML = weatherInfo["0"].Wind.Direction.Localized;
    document.getElementById('weaDisc').innerHTML = weatherInfo["0"].WeatherText;

    document.getElementById("weaIcon").src = iconPath;
    document.getElementById("curTemp").innerHTML = weatherInfo.Temperature.Imperial.Value;
};// End of onload
