class WeatherService {
    getWeatherCity = (cityName) =>{
       return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=10f864efb47c9d92144f6e274d6fc057`)
    }
}


export default WeatherService

// const service =new WeatherService()

// service.getWeatherCity.then(res=> JSON.parse(res)).then(data=>{

// })