angular.module('video-player')

  .component('app', {
  // TODO
    controller: function(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];

      this.selectVideo = (video) => {
        console.log('title click');
        this.currentVideo = video;
      };

      this.searchResults = (input) => {
        this.results = youTube.search(input, this.handleHTTPData.bind(this));
      };
      

      this.handleHTTPData = (data) => {
        this.videos = data;
        this.currentVideo = this.videos[0];
      };
    
      //initialize from youTube
      this.searchResults('doggies');
    },
    templateUrl: 'src/templates/app.html' 
  });
