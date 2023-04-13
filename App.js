import { useState, useEffect } from 'react';
import Player from './components/Player/Player';

function App() {
    const [songs] = useState([
        {
            title: "Forget me too ft. Halsey",
            artist: "Machine Gun Kelly",
            img_src: "C:/Users/KIIT/Desktop/music app/images/song-1.png",
            src: "C:/Users/KIIT/Desktop//music app/music/Machine Gun Kelly - forget me too (Lyrics) ft. Halsey.mp3"
        },
        {
            title: "Ed Sheeran & Justin Bieber - I Don't Care ",
            artist: "Ed Sheeran & Justin Bieber",
            img_src: "images/song-2.png",
            src: "music/Ed Sheeran & Justin Bieber - I Don't Care [Official Lyric Video].mp3"
        },
        {
            title: "Forget me too",
            artist: "Machine Gun Kelly",
            img_src: "images/song-3.jpg",
            src: "music/Machine Gun Kelly - forget me too (Lyrics) ft. Halsey.mp3"
        },
        {
            title: "Song 4",
            artist: "Artist 4",
            img_src: "music/song-4.png",
            src: "music/Witt Lowry - Into Your Arms (Lyrics) ft. Ava Max - [No Rap].mp3"
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex]);

    return (
        <div className="App">
            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
            />
        </div>
    );
}

export default App;
