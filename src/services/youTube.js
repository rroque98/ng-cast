angular.module('video-player')
  .service('youTube', function($http) {

    this.search = function(callback) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: 'bunnies',
          maxResults: 5,
          part: 'snippet',
          key: window.YOUTUBE_API_KEY
        }
        
        
      }).then(function successCallback(response) {
        console.log('Data Fetched!');
        callback(response.data.items);
      }, function errorCallback(response) {
        console.log('Fetch failed!');
      });
    };
  });
