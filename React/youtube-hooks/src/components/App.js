import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideo from "../hooks/useVideo";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)

    const [videos, search] = useVideo('programming')

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])
    

    const onVideoSelect = video => {
        setSelectedVideo(video);
    };
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={onVideoSelect}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;