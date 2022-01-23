import React, { useState, useEffect } from "react";
import Player from "./components/Player";

function Audio() {
const [songs, setSongs] = useState([
    {
      title: "タイトル1",
      artist: "人",
      img_src: "./audio.JPG",
      src: "./sample.mp3",
    },
    {
      title: "タイトル2",
      artist: "人2",
      img_src: "./audio.JPG",
      src: "./sample.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

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
      {/* <Header /> */}
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default Audio;
