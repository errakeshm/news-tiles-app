# News App (Based on a tile like UI)

![](tiles-news-app.gif)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

* Add your news api key in the AppConstants.ts
* Do an **npm install** to install the node packages
* Change the configurations as per your need. All Configurations are present in environment.ts/environment.prod.ts
* Start the server in your live development server using **npm start**
* This is under development. More features and improvements will be added gradually.

## Configurations (environment)

* isInMemApiEnabled : true|false
If set as true this will enable the Angular In-Memory API, that will fetch the data from a set of dummy data rather than hitting the News API.
Use it to reduce calls to NewsAPI
* isDebugEnabled:true,
If set then this will log the logging statements in the console
* apiKey:"<<API_KEY>>"
Obtain the API key by registering in NewsAPI.org and set the key value here
* Set the News API URL
  url:{
    primary:"http://newsapi.org/v2",
  }

## Note
* This is under development. More features and improvements will be added
* This is for educational purpose. You are free to copy the code and edit however you like.
