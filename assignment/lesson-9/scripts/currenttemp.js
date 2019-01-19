// This is the Weather Function
var weatherObject = new XMLHttpRequest();

weatherObject.open("GET", "http://dataservice.accuweather.com/currentconditions/v1/335794?apikey=WTrmHSpsGdPlLTNzgzKbeZ95rADq2GQF&details=true", 'true');
weatherObject.responseType = "json";
weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = weatherObject.response;
    console.log(weatherInfo);
    document.getElementById("curTemp").innerHTML = weatherInfo['0'].Temperature.Imperial.Value;
/*forecasts/v1/daily/1day/locationKey.json?details=true&apikey=95df38db964c4236936b1e894ad2232f
http://dataservice.accuweather.com/forecasts/v1/daily/1day/335794?apikey=WTrmHSpsGdPlLTNzgzKbeZ95rADq2GQF&details=true*/
}
