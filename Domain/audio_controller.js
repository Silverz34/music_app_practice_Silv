const audioController = {
    _nextSongs: null,
    _lastSongs: null,
    _actualSong: null,
    _progress_bar: document.getElementById("progress"),
    _controller: document.getElementById("media"),
    initializePlayer(playlist) {
        this._nextSongs = playlist;
        this._lastSongs = new Array();
        this._controller.addEventListener('timeupdate', function () {
            player._progress_bar.value = (this.currentTime / this.duration) * 100;
        });
        this._progress_bar.addEventListener('input', function (){
            audioController._controller.currentTime = (this.value/100) * audioController._controller.duration;
        })
        this._actualSong = this._nextSongs.pop();
    },
    loadSong: function () {
        audioController._controller.src = audioController._actualSong.song_url;
    },
    nextSong: function() {
        if(audioController._nextSongs.length !== 0){
            audioController._lastSongs.push(audioController._actualSong);
            audioController._actualSong = audioController._nextSongs.pop();
            audioController.loadSong();
        }
    },
    lastSong: function() {
        audioController._nextSongs.push(audioController._actualSong);
        audioController._actualSong = audioController._lastSongs.pop();
        audioController.loadSong();
    },
    playPause(){

    }
}

export default audioController;