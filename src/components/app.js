angular.module('video-player')

  .component('app', {
  // TODO
    controller: function(youTube) {
      this.videos = [];
      this.currentVideo = {};
      this.selectVideo = (video) => {
        console.log('title click');
        this.currentVideo = video;
      };

      this.searchResults = (data) => {
        this.videos = data;
        this.currentVideo = this.videos[0];
      };
      
      //initialize from youTube
      youTube.search('doggies', this.searchResults.bind(this));
    },
    templateUrl: 'src/templates/app.html' 
  });
