Grunt AMD Boilerplate
=====================

###
Skeleton project structure for developing and publishing Javascript
[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) modules, for both client
([Require.js](http://requirejs.org/)) and server ([Node.js](http://nodejs.org/)).
###

The purpose of this template is *not* to generate a complete Javascript web
application, but rather the modular components that you might use in various web
applications. In other words, this template makes it easy to build
[npm](https://npmjs.org/) modules.

It's organized so that you can develop components with a structured, organized
codebase and then compile everything down to a single javascript file when you
are ready to publish.

Various Parts:
  -  [Grunt](http://gruntjs.com/):     Automates common tasks: test, build, clean
  -  [Jasmine](http://pivotal.github.io/jasmine/):   Behavior-driven test framework
  -  [Karma](http://karma-runner.github.io/):     Javascript test runner
  -  [PhantomJS](http://phantomjs.org/): Headless browser for running tests
  -  [RequireJS](http://requirejs.org/): AMD loader optimized for the browser

## Getting Started
  #  You need to have `npm` installed (it comes with [node](http://nodejs.org/))
  #  Clone this repository: `git clone git@github.com:impressiver/Grunt-AMD-Boilerplate.git && cd Grunt-AMD-Boilerplate`
  #  Install dependencies: `npm install`
  #  ...