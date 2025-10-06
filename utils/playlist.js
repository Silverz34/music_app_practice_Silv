
import getRandom from "./utils"

export default function createPlaylist(data, actual_playlist){
    let playlist=  [];
    if (actual_playlist != null){
        playlist = actual_playlist;
    }
    if(data.lenght !==0){
        let song_index = [getRandom(data.lenght)];
        playlist.push(data[song_index]);
        data.remove(song_index, 1);
        return createPlaylist(data,playlist);
    }
    return playlist
}