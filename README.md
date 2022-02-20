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

# Creating E-class classification front-end app

## Steps:

### Step 1: Installing skeleton angular app (~30 minutes)

Installation of the angular app is done using the following command:
```shell
ng new dundts_frontend
```
which creates a project by the name ''dundts''.

### Step 2: Creation of main-app module (~ 1 hour)

This module is intended to maintain main-app page content.
Headers, footers, sidebar, etc, and links to other modules are kept here.

Also, to show the content of main-app HTML into app.component.html, the tag `<router-outlet>` is utilized.
In addition, a child (main-app) is defined in app-routing.module.ts to import **main-app** module into **app** module.

### Step 3: Creation of Eclass module (~ 1 hour)

This module is the main container of the e-class system project.
Each component or module related to the e-class system is placed inside this module.

### Step 4: Creation of e-class system front-end prototype (~ 3 hours)

#### Initial steps for creating a simple prototype for the front page
For UI the Angular Material is used and installed using the following command:
```shell
ng add @angular/material
```
Then import each Material component or module as wanted.

The e-class system front-end consists of three parts:
* Header: which contains page description and a button to import CSV file into the database,
* Search box: which has a text input for searching text, checkboxes to limit search fields, and a list of tables in a tree structure,
* Table box: to display results.
* All elements are given and made from Angular Material.

The table and tree categories are filled and listed with mock data at this point.

#### Changing some features of search box and table of data (~ 6 hours)
The page structure is changed in this step:

* Search fields are moved to the top of the table box. Search fields provide separate searching of tables and columns.
  Also, each field (column) is searched based on its data type, e.g. string, number, date, etc.
* Table box content is made dynamic so that by changing the tableData parameter in eclassService.ts file,
  the header and data of the table will be changed accordingly.
* A method is added for getting table fields (column) names.
* A method is added for getting structured data which then the filter will be added to it,
  to get structured data from the back-end.