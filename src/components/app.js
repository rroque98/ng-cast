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
        console.log('video search results!');
        //youTube.getVideosData(params);
        this.results = youTube.search(input, this.handleHTTPData.bind(this));
        // console.log(this.results);
      };

      this.handleHTTPData = (data) => {
        this.videos = data;
        this.currentVideo = this.videos[0];
      };
    },
    templateUrl: 'src/templates/app.html' 
  });
