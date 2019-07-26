var section = document.querySelector('section.templeinfo');
var requestURL = 'https://smhubble09.github.io/assignments/final-project/scripts/templelist.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var templeData = request.response;
  showTemple(templeData);
}

function showTemple(jsonObj) {
  var info = jsonObj['temples'];

  for (var i = 0; i < info.length; i++){

        if (info[i].name == 'Idaho')
        populateTempleInfo(info[i]);
	}
  for (i = 0; i < info.length; i++){

        if (info[i].name == 'Oklahoma City')
        populateTempleInfo(info[i]);
	}
  for (i = 0; i < info.length; i++){

        if (info[i].name == 'Los Angeles')
        populateTempleInfo(info[i]);
	}
  for (i = 0; i < info.length; i++){

        if (info[i].name == 'Payson')
        populateTempleInfo(info[i]);
	}

function populateTempleInfo(jsonObj){
    var temple = jsonObj;
	
    var myArticle = document.createElement('div');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
	var myPara5 = document.createElement('p');
	var myPara6 = document.createElement('p');
	var myPara7 = document.createElement('p');
	var myPara8 = document.createElement('p');
    var myImage = document.createElement('img');

    myH2.textContent = temple.name;
    myPara1.textContent = temple.address;
    myPara2.textContent = 'Telephone: ';
    myPara3.textContent = 'Email: ';
    myPara4.textContent = 'Services: ';
	myPara5.textContent = 'History: ';
	myPara6.textContent = 'Endowment Schedule: ';
	myPara7.textContent = 'Temple Closures: ';

    switch (myH2.textContent){
        case 'Idaho':
            myImage.src = 'images/slctemple.jpeg.bak';
            break;

        case 'Oklahoma City':
			myImage.src = 'images/okctemple.jpeg.bak';
			break;

        case 'Los Angeles':
            myImage.src = 'images/latemple.jpg.bak';
             break;
		
		case 'Payson':
            myImage.src = 'images/paysontemple.jpg.bak';
             break;
    }
	var allNumbers = info[i].telephone;
	for (var l = 0; l < allNumbers.length; l++) {
	var listItem = document.createElement('list');
	listItem.textContent = allNumbers[l];
	myPara2.appendChild(listItem);
	}
	var allEmail = info[i].email;
	for (var l = 0; l < allEmail.length; l++) {
	var listItem = document.createElement('list');
	listItem.textContent = allEmail[l];
	myPara3.appendChild(listItem);
	}
	var allServices = info[i].services;
	for (var l = 0; l < allServices.length; l++) {
	var listItem = document.createElement('list');
	listItem.textContent = allServices[l];
	myPara4.appendChild(listItem);
	}
	var allHistory = info[i].history;
	for (var l = 0; l < allHistory.length; l++) {
	var listItem = document.createElement('list');
	listItem.textContent = allHistory[l];
	myPara5.appendChild(listItem);
	}
	var allEndowment = info[i].sschedule;
	for (var l = 0; l < allEndowment.length; l++) {
	var listItem = document.createElement('list');
	listItem.textContent = allEndowment[l];
	myPara6.appendChild(listItem);
	}
	var allSchedules = info[i].tcschedule;
	for (var l = 0; l < allSchedules.length; l++) {
	var listItem = document.createElement('list');
	listItem.textContent = allSchedules[l];
	myPara7.appendChild(listItem);
	}
	
// Current Weather
var weatherCurrent = new XMLHttpRequest();
var cityID = ''
    switch (myH2.textContent){
        case 'Idaho':
            cityID = '5780993';
            break;

        case 'Oklahoma City':
			cityID = '4544349';
			break;

        case 'Los Angeles':
            cityID = '5368361';
             break;
		
		case 'Payson':
            cityID = '5308305';
             break;
    }
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&units=imperial&APPID=b47f2cab33c690b0345b5ace29342cc2';

weatherCurrent.open('Get', apiURLstring, true);
weatherCurrent.send();

weatherCurrent.onload = function () {
	var weatherData = JSON.parse(weatherCurrent.responseText);
	console.log(weatherData);
	
	myPara8.textContent = 'Current Weather: ' + Math.round(weatherData.main.temp) + '°F';
}

    myArticle.appendChild(myH2);
	myArticle.appendChild(myImage);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
	myArticle.appendChild(myPara5);
	myArticle.appendChild(myPara6);
	myArticle.appendChild(myPara7);
	myArticle.appendChild(myPara8);
    myArticle.className = 'templeinfo';
    section.appendChild(myArticle); 
}
}