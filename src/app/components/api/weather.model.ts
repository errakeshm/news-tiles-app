export interface ICurrent{
    date:number;
    sunrise:number;
    sunset:number;
    temp:number;
    feels_like:number;
    visibility:number;
    wind_speed:number;
    weather:Array<IWeatherCondition>;
}
export interface  IWeatherCondition{
    id:number;
    main:string;
    description:string;
    icon:string;
}
export interface IDailyTemp{
    day:number;
    min:number;
    max:number;
}
export interface IDaily {
    date:number;
    sunrise:number;
    sunset:number;
    feels_like:number;
    visibility:number;
    wind_speed:number;
    weather:Array<IWeatherCondition>;
    temp:IDailyTemp;

}
export interface IWeatherModel{
    lat:number;
    lon:number;
    timezone:string;
    current:ICurrent;
    daily:Array<IDaily>;
}