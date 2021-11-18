
    const inputWeatherValue = document.getElementById("weathercity")
    const search = document.getElementById("weathersearch")
    const key = "4de73181ea2471ccb578a4d96a5afe17"
    const error = document.getElementById("weathererror")
    const showData = document.getElementById("weathershowdata")
    const weather = document.getElementById("clouds")
    const place = document.getElementById("place")
    const temp = document.getElementById("weathertemp")

   inputWeatherValue.addEventListener("keyup", event => {
      if (event.keyCode === 13) {
         requestweatherapi()
      } else {
          event.preventDefault()
          search.addEventListener("click",requestweatherapi)
      }
  })
    const requestweatherapi = () => {
      const inputCity = inputWeatherValue.value
      //console.log(inputCity)
      let apiName = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${key}`
      fetch(apiName)
      .then(response => response.json())
      .then(data => {
         // console.log(data)
         if(data.cod == '400' || data.cod ==  "404") {
            // showData.innerHTML = "Please refresh and enter a valid City "

             inputWeatherValue.value = ''
         } else {
            //const temperature = data.temp
      //console.log(temperature)
     // temp.innerHTML = `${}`
     const temperature = "°c"
     weathertemp.innerHTML = Math.floor(data.main.temp - 273.15) + temperature
      clouds.innerHTML = data.weather[0].description
      place.innerHTML = data.name
         }
       })
    }

 
 