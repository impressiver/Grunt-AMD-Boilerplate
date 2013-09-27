define(['console'],
function (console) {
  'use strict';

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