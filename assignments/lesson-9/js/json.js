var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var townData = request.response;
    showData(townData);
}


function showData(jsonObj) {
    var check = 1;
    var town = jsonObj['towns'];
    for (var i = 0; i < town.length; i++) {
        if (town[i].name == "Preston" || town[i].name == "Soda Springs" ||town[i].name == "Fish Haven")
        {
        var myArticle = document.createElement('article');
            myArticle.className = "townData";
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myImage = document.createElement('img');
        
        myH2.textContent = town[i].name;
        myPara1.textContent = 'Motto: ' + town[i].motto;
        myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
        myPara3.textContent = 'Population: ' + town[i].currentPopulation;
        myPara4.textContent = 'Annual Rainfall: ' + town[i].averageRainfall +' inches';

        
        
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myImage);
        section.appendChild(myArticle);
    }
    }
}
