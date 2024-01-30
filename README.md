to start the project (ng s -o --port 4200) ng serve -open
the main style (bootstrap) put into angular.json

1-in file angular.json we have 3 important thing "build" "serve" "test" the most we use is build

2- in file package.json we have the dependencies any library i will install will put in it like bootstrap
3- we will work -write the code- in file src in file app
and in src we have an assets file all static img not that come from user or file will put on it and we put the file that translate from arabic to english

angular is a single page put on the index.html file

------the project start with the file main.ts then will go to the component.ts then index.html  
-------in file app we will remove the testing file which called app.component.spec.ts
----the ui put in app.component.html
----app.component.ts we will put the function - call the API
-----we will work on main.ts file remove bootstrapApplication and make it dynamic using module crite file app.module.ts in the app file make export
----all the code in angular will be class to use it as a component we wii use @Component we use on of the desgin pattern called ---Decorator Pattern--- search-- all of them is class What makes it special? the @Component  
--we will make import in file app.module.ts by write @NgModule enter and it generate automatically 
--any conponant must have 5 thing 1-it's parent app.module.ts 2-it's name i mean it's selector 3-ui the html 4- it's function find in .ts (js)5-css

# Lab1Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



