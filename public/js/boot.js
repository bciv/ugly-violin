require.config({
  paths: {
    jquery: '/js/libs/jquery',
    bootstrap: '/js/libs/bootstrap',
    underscore: '/js/libs/underscore',
    backbone: '/js/libs/backbone',
    marionette: '/js/libs/backbone.marionette',
    text: '/js/libs/text'
  },
  shim: {
    underscore: { exports: '_' },
    backbone: { exports: 'Backbone', deps: ['jquery','underscore']},
    marionette: { exports: 'Backbone.Marionette', deps: ['backbone']},
    bootstrap: { deps: ['jquery'] }  
  }
});

require(['App','jquery','bootstrap','Backbone','Marionette'], 
function(App) {
  //console.log('in boot...');
  App.initialize();
});
