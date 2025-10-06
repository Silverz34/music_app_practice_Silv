const playerInterface = {
    _caratula: document.getElementById("song-img"),
    _title: document.getElementById("title"),
    _artist: document.getElementById("artist"),
    loadSong(song){
        this._caratula.src = song.caratula;
        this._title.innerText = song.song_name;
        this._artist.innerText = song.artist_name;
    }
}

export default playerInterface;