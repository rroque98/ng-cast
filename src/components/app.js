angular.module('video-player')

  .component('app', {
  // TODO
    controller: function() {
      this.videos = window.exampleVideoData;
      this.video = this.videos[0];

      this.onClick = () => {
        console.log('clicked');
      };
      this.selectVideo = () => {
        console.log('video selected!');
      };
      this.searchResults = () => {
        console.log('video search results!');
      };
    },
    templateUrl: 'src/templates/app.html' 
  });
