const audiController = {
    _nextSongs: [],
    _lastSongs: [],
    _actualSong: null,
    _progress_bar: document.getElementById("progress"),
    _controller: document.getElementById("media"),
    initializePlayer(playlist){
        this._nextSongs= playlist;
        this._controller.addEventListener('timeupdate', function(){
            player._progress_bar.value= (this.currentime)});
    }
}