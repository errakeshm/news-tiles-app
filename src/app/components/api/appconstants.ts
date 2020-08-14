import { environment } from 'src/environments/environment';

export class AppConstants{
    // frequency of rotate tiles
    public static VARIANCE_TRANSITION_RATE={"MAX":4, "MIN":2};
    public static LATITUDE = "LATITUDE";
    public static LONGITUDE = "LONGITUDE";
    public static WeatherCodeImgMap = {
        "04n" : { icon: "wi wi-rain", img:"rain.jpg" },
        "04d" : { icon: "wi wi-rain", img:"rain.jpg" },
        "02d" : { icon: "wi wi-cloudy", img:"cloudy.jpg" },
        "02n" : { icon: "wi wi-cloudy", img:"cloudy.jpg" },
        "03n" : { icon: "wi wi-cloudy", img:"cloudy.jpg" },
        "03d" : { icon: "wi wi-cloudy", img:"cloudy.jpg" },
        "09n" : { icon: "wi wi-rain", img:"rain.jpg" },
        "09d" : { icon: "wi wi-rain", img:"rain.jpg" },
        "10d" : { icon: "wi wi-rain", img:"rain.jpg" },
        "10n" : { icon: "wi wi-rain", img:"rain.jpg" },
        "01n" : { icon: "wi wi-day-sunny", img:"sunny.jpg" },
        "01d" : { icon: "wi wi-day-sunny", img:"sunny.jpg" },
        "11d" : { icon: "wi wi-thunderstorm", img:"thunderstorm.jpg" },
        "11n" : { icon: "wi wi-thunderstorm", img:"thunderstorm.jpg" },
        "13d" : { icon: "wi wi-snow", img:"snow.jpg" },
        "13n" : { icon: "wi wi-snow", img:"snow.jpg" },
    };
}