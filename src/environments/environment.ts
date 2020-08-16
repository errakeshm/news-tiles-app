// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  isInMemApiEnabled:true,
  isDebugEnabled:true,
  // News API Key. Register and obtain the values
  keys:{
    news:"<<API_KEY>>",
    weather:"<<API_KEY>>"
  },
  url:{
   news:"http://newsapi.org/v2",
   // This is to be used when in mem is disabled
   //weather:"https://api.openweathermap.org/data/2.5"//onecall?lat=20.2620425&lon=85.81594989999999&&units=metric&appid=20c0fa8665afa77aaf782456eaaa7550"
   // THis is when in mem is enabled
   weather:"https://api.openweathermap.org/data"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
