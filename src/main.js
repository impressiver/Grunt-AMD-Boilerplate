/*global require*/
(function () {
  'use strict';

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