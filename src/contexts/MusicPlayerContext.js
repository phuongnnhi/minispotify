import React, { useState } from "react";
import Track1 from "../music/christmas-spirit-265741.mp3";
import Track2 from "../music/magic-christmas-night-264068.mp3";
import Track3 from "../music/sunset-beach-259654.mp3";
import Track4 from "../music/tell-me-the-truth-260010.mp3"

const MusicPlayerContext = React.createContext();


const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Christmas Spirit",
        author: "Top-Flow",
        file: Track1,
        thumbnail: "/thumbnail/1.jpeg"
      },
      {
        name: "Magic Christmas Night",
        author: "Top-Flow",
        file: Track2,
        thumbnail: "/thumbnail/2.jpeg"
      },
      {
        name: "Sunset Beach",
        author: "Top-Flow",
        file: Track3,
        thumbnail: "/thumbnail/3.jpeg"
      },
      {
        name: "Tell me the truth",
        author: "Denys_Brodovskyi",
        file: Track4,
        thumbnail: "/thumbnail/4.jpeg"
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  }


const MusicPlayerProvider = ({children}) =>{
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{state, setState}}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };