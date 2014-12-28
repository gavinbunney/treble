(function($, window) {
  'use strict';

  function HomeView() {
    this.setup();
  }

  HomeView.prototype = {

    setup: function () {

      $('#main').html(JST.home({}));

      this.refresh = $.proxy(this.refresh, this);
      this.refresh();
    },

    refresh: function() {
      //
    }
  };

  window.HomeView = HomeView;

})(jQuery, window);