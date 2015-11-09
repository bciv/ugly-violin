define(['SocialNetView', 'text!templates/logout.html'], function(SocialNetView, logoutTemplate) {
  var logoutView = SocialNetView.extend({
    requireLogin: true,

	el: $('#content'),

    events: {
      //"submit form": "login"
    },

    logout: function() {
      $.get('/logout',
        this.$('form').serialize(), function(data) {
        window.location.hash = 'logout';
      }).error(function(){
        $("#error").text('Unable to logout.');
        $("#error").slideDown();
      });
      return false;
    },

    render: function() {
      this.$el.html(logoutTemplate);
      $("#error").hide();
      $("input[name=email]").focus();
    }
  });

  return logoutView;
});
