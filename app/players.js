const player={
    _last:document.getElementById("lastest"),
    _next: document.getElementById("forward"),
    _play: document.getElementById("play"),
    _controller: audioController,
    initializePlayer(){
        this._last.addEventListener('click', this._controller.nextSong);
        
    }

}