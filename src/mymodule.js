if (typeof define !== 'function') {
  /*global define:true, require:false, module:false */
  /*jshint latedef:false */
  var define = require('amdefine')(module);
}

define(function (require) {
  'use strict';

  var console = require('console');

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