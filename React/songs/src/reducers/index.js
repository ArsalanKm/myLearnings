import {combineReducers} from "redux";

const songsReducer = () => {
    return [
        {title: 'injda tehrane', duration: '4:05'},
        {title: 'tabestoon kutahe', duration: '4:05'},
        {title: 'man mijangam', duration: '4:05'},
        {title: 'injaneb', duration: '4:05'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED')
        return action.payload
    return selectedSong

}
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
