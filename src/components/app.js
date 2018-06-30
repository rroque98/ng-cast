angular.module('video-player')

  .component('app', {
  // TODO
    controller: function() {
      this.videos = window.exampleVideoData;
      this.video = window.exampleVideoData[0];

      this.onClick = () => {
        console.log('clicked');
      };
    },
    templateUrl: 'src/templates/app.html' 
  });
