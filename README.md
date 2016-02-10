## Modular apps

Common ground for all modules and apps. In your own company you might break these out as separate repositories

### Up and running

```
npm install
npm start
```

### html5demoapp.com

This is the new site we are building which uses the common module style.

### Legacy site

In legacy-site you have a jQuery based site that was written a while ago and still works fine but the code cannot
be shared with your WebApp and iOS content.

### html5sales-angular

In html5sales-angular you have an Angular based web app.



Objectives:

Assemble the App according to your framework but base in on modules that are framework independent.

Leverage modern JavaScript Language, Standard Lib, Idomatic Libs.

Enable sharing code between existing jQuery based website and newer Angular/Ember/React web apps.

Strong Testing Tools

Strong Component Model/Conventions




common simple expressions - util functions, DOM, native lib, language

great common npm modules

module format for jQuery, Angular, Ember, React

### Principles of build

Keep project build in single file 'gulpfile.js'


Improvements:

make a module based on jQuery common compatible

show how to set libs up using `generator-babel-boilerplate`

Change management; Some parts should have little or no dependencies to avoid revolutions. The further down the stack it is the more it must evolve. The apps can experiment but the underlying libraries must be well encapsulated and free to evolve avoiding both stagnation and upheaval.
