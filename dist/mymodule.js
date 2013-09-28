/*! MyModule - v0.0.0 - 2013-09-28

Grunt-AMD-Boilerplate-Module
============================
* Copyright (c) 2013 Ian White; Licensed  */

/*!
 * Console Lite
 * https://gist.github.com/impressiver/4343889
 *
 * Stop wayward debug messages from inadvertently jamming up browsers.
 * Setting `localStorage.DEBUG = true` will turn console messages on
 * again, though you still only get partial console functionality
 * (which is intentional).
 *
 * Copyright 2013 Impressiver LLC
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

(function(w) {
  

  var wC = w.console, rC = {}, lS = w.localStorage,
      fs = ["log", "error", "warn", "info", "debug", "dir", "trace", "time", "timeEnd"],
      isD = function() { return (!!(lS && lS.DEBUG)); }, noop = function(){}, i;

  for (i in fs) {
    rC[fs[i]] = (!!wC && isD()) ? wC[fs[i]].bind(wC) : noop;
  }

  window.console = rC;
  return rC;
})(window);
define("console", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.console;
    };
}(this)));

define('mymodule',['console'],
function (console) {
  

  console.log('Loading MyModule...');

  var MyModule = Object.create( {}, {
    holla: {
      value: function () {
        return 'back atcha';
      }
    }
  });

  return MyModule;
});
/*global require*/
(function () {
  

  require.config({

    paths: {
      console: '../lib/console-lite'
      // jquery: '../lib/jquery',
      // underscore: '../lib/underscore',
      // backbone: '../lib/backbone',
      // mousetrap: '../lib/mousetrap'
    },

    shim: {
      console: {
        exports: 'console'
      }
      // underscore: {
      //   exports: '_'
      // },
      // backbone: {
      //   deps: [
      //     'underscore',
      //     'jquery'
      //   ],
      //   exports: 'Backbone'
      // },
      // mousetrap: {
      //   exports: 'Mousetrap'
      // }
    }

  });

  require([
    'console', 'mymodule'
  ], function (
    console, MyModule
  ) {
    console.log('Bootstrapping MyModule...');
    console.log('Holla', MyModule.holla());
  });
}());
define("main", function(){});
