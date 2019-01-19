// This is to populate the town data
var townObject = new XMLHttpRequest();
townObject.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json");
townObject.responseType = "json";
townObject.send();
townObject.onload = function () {
    var townInfo = townObject.response;
    console.log(townInfo);

    // Franklin City Data
    document.getElementById("town1").innerHTML = townInfo.towns["0"].name;
    document.getElementById("motto1").innerHTML = townInfo.towns["0"].motto;
    document.getElementById("yearFounded1").innerHTML = townInfo.towns["0"].yearFounded;
    document.getElementById("curPop1").innerHTML = townInfo.towns["0"].currentPopulation;
    document.getElementById("aveRainFall1").innerHTML = townInfo.towns["0"].averageRainfall;

    // GreenVille
    document.getElementById("town2").innerHTML = townInfo.towns["1"].name;
    document.getElementById("motto2").innerHTML = townInfo.towns["1"].motto;
    document.getElementById("yearFounded2").innerHTML = townInfo.towns["1"].yearFounded;
    document.getElementById("curPop2").innerHTML = townInfo.towns["1"].currentPopulation;
    document.getElementById("aveRainFall2").innerHTML = townInfo.towns["1"].averageRainfall;

    // Springfield
    document.getElementById("town3").innerHTML = townInfo.towns["3"].name;
    document.getElementById("motto3").innerHTML = townInfo.towns["3"].motto;
    document.getElementById("yearFounded3").innerHTML = townInfo.towns["3"].yearFounded;
    document.getElementById("curPop3").innerHTML = townInfo.towns["3"].currentPopulation;
    document.getElementById("aveRainFall3").innerHTML = townInfo.towns["3"].averageRainfall;

}
