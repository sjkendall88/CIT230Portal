// This is to populate the town data
var townObject = new XMLHttpRequest();
townObject.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json");
townObject.responseType = "json";
townObject.send();
townObject.onload = function () {
    var townInfo = townObject.response;
    console.log(townInfo);

    // Springfield
    document.getElementById("town1").innerHTML = townInfo.towns["3"].name;
    document.getElementById("motto1").innerHTML = townInfo.towns["3"].motto;
    document.getElementById("yearFounded1").innerHTML = townInfo.towns["3"].yearFounded;
    document.getElementById("curPop1").innerHTML = townInfo.towns["3"].currentPopulation;
    document.getElementById("aveRainFall1").innerHTML = townInfo.towns["3"].averageRainfall;

}
