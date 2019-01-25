# **Online Store**
####  Week3 TypeScript and Angular Independent Project at Epicodus, 01/18/2019
#### Tanvi Garg   

  ---
## Description
An e-commerce website using Angular.

  ---
## Table of Contents
  1. [Specifications](#specs-work)
  2. [Setup on OSX](#setup)
  2. [Technologies Used](#Tech-used)
  3. [Configuration/dependencies](#config-dep)
  4. [MIT License](#mit-lic)

  ---
## Specifications <a name="specs-work"></a>

| Behavior | Input | Output |
|----------|-------|--------|
|  Program takes a user's medical issue and recieve a list of doctors in Portland, OR area | User Input: Flu | List of Doctors that treat the User Input Medical Issue |
|   Program takes a user's input for a doctor name to receive a list of doctors in the Portland area that fit the search query| User Input: "SomeName" | A valid List Of Doctors is returned with information included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients  |
| Program takes a user's input for a doctor name and if query response doesn't include any doctors, then user should recieve a notification  hat states that no doctors meet the criteria.| User Input: "SomeName"  | "No Doctors available with SomeName in Portland, OR area" |
| Program's API call for a user query results in an error (any message not a 200 OK), the application should return a notification to user that states what the error is.|  User Query: Doctor Name | "There was an error processing your request"|
| Program's API call for a user query results in an error (any message not a 200 OK), the application should return a notification to user that states what the error is.|  User Query: "Flu" | "There was an error processing your request"|

---
## Setup on OSX <a name="setup"></a>

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Go to GitHub profile and clone the repo from [Doctor Lookup](https://github.com/TanviCodeLife/doctor-lookup.git). Use `git clone <project url>` command to pull it to a local repository in your Home directory.
*  Navigate to root of project directory
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Technologies Used <a name="Tech-used"></a>

* HTML5/CSS3
* Bootstrap
* Font Awesome
* ES6
* Typescipt
* Node.js
* Angular v5.2.0
* Protractor
* TSLint


---
## Additional Configuration/Dependencies <a name="config-dep"></a>

  | Dependency                           | Description                                                                |
  | ------------------------------------ | -------------------------------------------------------------------------- |
  | FormsModule                |            Additional module to enable two way Data Binding using ngModel directive in forms                                         
---
## License <a name="mit-lic"></a>

This software is licensed under the MIT license.

Copyright (c) 2018 **Tanvi Garg**
