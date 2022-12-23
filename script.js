let weather={
    "apikey":"cae831131e4b99d0544685c49525dcfe",
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            +"&units=metrics&appid="
            + this.apikey
        )
        .then((response)=>response.json())
        .then((data)=>console.log(data));

    },
  

};

