# TheBagelry

This project is the source code for The Bagelry's web site in Evergreen Colorado.

## Setup

1. Install nvm by downloading nvm-setup.exe from web and insalling.
1. Then install nvm 12: `nvm install 12`
1. Use nvm 12: `nvm use 12.22.12` or whatever version it says was installed
1. Install ng-cli: `npm i -g @angular/cli@9.1.9`
1. Build: `ng s --o`
1. Set PowerShell executtion policy if get an error running ng `Set-ExecutionPolicy -ExecutionPolicy

## Development server

Run `ng s --o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g c component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng b --prod --output-hashing=none` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng t` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).