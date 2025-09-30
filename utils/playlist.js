
import getRandom from "./utils"

export default function createPlaylist(data, actual_playlist){
    const playlist=  [];
    if (current_playlist != null){
        playlist = current_playlist
    }
    if(playlist.lenght !==0){
        let song_index = [getRandom(data.lenght)]
        playlist.push(song_index);
        data.remove(song_index)
        return createPlaylist(data,playlist)
    }
    return playlist
}