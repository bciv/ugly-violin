define(['models/Session'], function(Session) {
  var SessionCollection = Backbone.Collection.extend({
    model: Session
  });

  return SessionCollection;
});
