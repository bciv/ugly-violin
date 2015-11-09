define([
  'Backbone',
  'Marionette'
  // regions
  // collections
  // views/menu..
  // views/footer..
], // nav, menu, footer ...
function (Backbone, Marionette) {
  'use strict';
  
  var app=new Marionette.Application();
  
  app.addRegions({
    menu: '#main-nav',
    main: '#main',
    footer: '#footer'
  });
  
//  app.addInitializer(function(){
//    app.menu.show(menu);
//    app.footer.show(footer);
//  })

  app.on("initialize:after",function(options){
    if(Backbone.history){
      Backbone.history.start();
    }
  });
  
  // what is vent?  render menu here somehow
  
  return windows.app=app;
  
});
