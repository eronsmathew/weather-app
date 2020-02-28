"use strict";

const cityForm = document.getElementById("city-form");
const cityInput = document.getElementById("my-city");
const reportSection = document.getElementById("weather-report");


function  activatePlacesSearch(){
    var input = document.getElementById("my-city"); 
    var autocomplete = new google.maps.places.Autocomplete(input); 
}


let apiRequest = new XMLHttpRequest();

cityForm.addEventListener('submit', ($event) =>{
    $event.preventDefault();
    const chosenCity = cityInput.value;

    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity +
   '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e');
    apiRequest.send();

});

apiRequest.onreadystatechange = () => {
    if(apiRequest.readyState === 4){
        if(apiRequest.status === 404){
            return 'City not found!';
        }
        const response = JSON.parse(apiRequest.response);
        reportSection.textContent = 'The weather in ' + response.name + ' is ' + response.weather[0].main + '.';
    }
}
