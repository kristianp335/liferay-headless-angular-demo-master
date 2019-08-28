# Liferay Headless Demo

Simple Angular app that demonstrates some of the headless CMS features in Liferay DXP 7.2+. Retrieves web content article in raw, localised and rendered form.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

Clone repo

Navigate inside the directory

npn install

npm install -g @angular/cli

ng serve (this will start the application on a node server)

You can edit the calls made to Liferay's Headless Delivery API in /src/app/services/liferay/liferay.service.ts

Credit to John Feeney for building this in the first place.

!!!Important you will get CORS errors if you try and run this locally with a local instance of Liferay. This is due to differing port numbers etc. 
Therefore you need to run it from Chrome with security turned off. On windows you can do this by creating a shortcut to Chrome like this 
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\Temp\chrome-dev-session". You can 
do it in Linux and Mac as well, look up the method online.

![Alt text](img/Liferay-Headless-Demo.png?raw=true "Liferay Headless Demo")


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
