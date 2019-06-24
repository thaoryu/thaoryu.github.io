// script for loading the json data from the cit230 lesson 9 file

var cityindex, cities;
var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var cityInfo = request.response;
    showCitydata(cityInfo);
}

function showCitydata(jsonObj) {

    cities = jsonObj['towns'];

    for (i = 0; i < cities.length; i++) {

        if (cities[i].name == 'Preston')
            populateCityData(cities[i]);
    }

    for (i = 0; i < cities.length; i++) {

        if (cities[i].name == 'Soda Springs')
            populateCityData(cities[i]);
    }

    for (i = 0; i < cities.length; i++) {

        if (cities[i].name == 'Fish Haven') populateCityData(cities[i]);
    }
}

function populateCityData(jsonObj) {

    var city = jsonObj;

    var myArticle = document.createElement('article');
    var myH3 = document.createElement('h3');
    var myH4 = document.createElement('h4');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myImage = document.createElement('img');

    myH3.textContent = city.name;
    myH4.textContent = city.motto;
    myPara1.textContent = 'Year Founded: ' + city.yearFounded;
    myPara2.textContent = 'Population: ' + city.currentPopulation;
    myPara3.textContent = 'Average Rainfall: ' + city.averageRainfall;

    switch (myH3.textContent) {
        case "Preston":
            myImage.src = "images/hfirst.jfif";
            break;

        case "Soda Springs":
            myImage.src = "images/hsec.jfif";
            break;

        case "Fish Haven":
            myImage.src = "images/fish.jfif";
            break;
    }

    myArticle.appendChild(myH3);
    myArticle.appendChild(myH4);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myImage);
    myArticle.className = "home";
    
    section.appendChild(myArticle);
    }