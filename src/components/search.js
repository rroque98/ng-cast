angular.module('video-player')
  .component('search', {
    bindings: {
      result: '<'
    },
    controller: function(youTube) {
      this.search = function(input) {
        youTube.search(input, this.result);
      };
    },
    templateUrl: 'src/templates/search.html' 
  });
