var SoundcloudUser = function(){
  this.userTracks = [],
  this.searchSongs();
}

SoundcloudUser.prototype.searchSongs = function(){
  SC.connect(function(){
    SC.get('/me/tracks', function(
      foundTracks){
      $.ajax({
        url: '/tracks',
        method: 'POST',
        data: {tracks: foundTracks},
        dataType: 'JSON'
      }).success(function(response){
        $('body').append(response)
      })
    })
  })
}