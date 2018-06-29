angular.module('video-player')

  .component('app', {
  // TODO
    controller: function() {
      this.videos = window.exampleVideoData;
    },
    templateUrl: 'src/templates/app.html' 
  });
