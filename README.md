# EClass

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

# Creating E-class classification app

## Steps:

### Step 1: Installing skeleton angular app

Installation of angular app is done using following command:
```shell
ng new dundts
```
which creates a project by the name ''dundts''.

### Step 2: Creation of main-app module

This module is intended to maintain main-app page content. 
Headers, footers, sidebar, etc and links to other modules are kept here.

Also, in order to show content of main-app html into app.component.html, the tag `<router-outlet>` is utilized.
In addition, a child (main-app) is defined in app-routing.module.ts to import **main-app** module into **app** module.

### Step 3: Creation of Eclass module

This module is the main container of eclass system project. 
Each component or module related to elcass system is placed inside this module.