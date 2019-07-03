//Retrieve Weather Data for Fish Haven
let weatherRequest = new XMLHttpRequest();
let urlAPI = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=32ce786d771502f613dab8cc67d41526";
weatherRequest.open('GET', urlAPI, true);
weatherRequest.send();

//Retrieve Forcast Data for Fish Haven
let weatherForecast = new XMLHttpRequest
weatherForecast.open('GET', "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=32ce786d771502f613dab8cc67d41526&units=imperial", true);
weatherForecast.send();


weatherRequest.onload = function() {
        let weatherData = JSON.parse(weatherRequest.responseText);

        
        weatherDisplay(weatherData);
    } 


function weatherDisplay(weatherData) {

    console.log(weatherData);

    document.getElementById("Temp")
        .innerHTML = Math.round(weatherData.main.temp);
    document.getElementById("humidity").innerHTML =
        weatherData.main.humidity;
    document.getElementById("windSpeed")
        .innerHTML = weatherData.wind.speed;
    document.getElementById("condition").innerHTML = weatherData.weather[0].description;

   
    let Temp = weatherData.main.temp;
    let windSpeed = weatherData.wind.speed;
    f = 35.74 + 0.6215 * Temp - 35.75 * Math.pow( windSpeed, 0.16 ) + 0.4275 * Temp * Math.pow( windSpeed, 0.16 );
    document.getElementById("windChill").innerHTML = f.toFixed();
    
}


//forcast

weatherForecast.onload = function () {

    let weatherInfo = JSON.parse(weatherForecast.responseText);
    console.log(weatherInfo);
    let listDate = [];
    let listIconCode = [];
    let listTemp = [];

    for (i = 0; i < weatherInfo.list.length; ++i) {
        time = weatherInfo.list[i].dt_txt;
        if (time.includes("18:00:00")) {


            let date = new Date(weatherInfo.list[i].dt * 1000);
            let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let findDate = weekday[date.getDay()] + "<br>" + month[date.getMonth()] + " " + date.getDate();
            listDate.push(findDate);

            let temp = weatherInfo.list[i].main.temp;
            temp = Math.round(temp);
            listTemp.push(temp);

            let iconcode = weatherInfo.list[i].weather["0"].icon;
            let icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
            listIconCode.push(icon_path);
        }
        continue;
    }

    //forcast date
    document.getElementById('day1').innerHTML = listDate[0];
    document.getElementById('day2').innerHTML = listDate[1];
    document.getElementById('day3').innerHTML = listDate[2];
    document.getElementById('day4').innerHTML = listDate[3];
    document.getElementById('day5').innerHTML = listDate[4];
    //Icon
    document.getElementById('weather_icon1').src = listIconCode[0];
    document.getElementById('weather_icon2').src = listIconCode[1];
    document.getElementById('weather_icon3').src = listIconCode[2];
    document.getElementById('weather_icon4').src = listIconCode[3];
    document.getElementById('weather_icon5').src = listIconCode[4];
    //Temp
    document.getElementById('dayonetemp').innerHTML = listTemp[0];
    document.getElementById('daytwotemp').innerHTML = listTemp[1];
    document.getElementById('daythreetemp').innerHTML = listTemp[2];
    document.getElementById('dayfourtemp').innerHTML = listTemp[3];
    document.getElementById('dayfivetemp').innerHTML = listTemp[4];

}
//Event
let aside = document.querySelector('aside');
let requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    let townData = request.response;
    showData(townData);
}

function showData(jsonObj) {
    let data = jsonObj['towns'];


    for (let i = 0; i < data.length; i++) {
        if ((data[i].name == "Preston") == false) {
            continue;
        }
        let myAside = document.createElement('div');
        let myH2 = document.createElement('h1');
        let mylist = document.createElement('p');
        let myPhoto = document.createElement('img');

        myH2.textContent = "Town Events in Preston";
        
        let allevents = data[i].events;
        for (let j = 0; j < allevents.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = allevents[j];
            mylist.appendChild(listItem);
        }

        myAside.appendChild(myH2);
        myAside.appendChild(mylist);
        myAside.appendChild(myPhoto);

        myPhoto.src = "images/bear.jfif"
        myPhoto.setAttribute('class', 'image');
        myPhoto.setAttribute('alt', 'Napoleon Dynamite Festival');
        aside.appendChild(myAside);
    }
}