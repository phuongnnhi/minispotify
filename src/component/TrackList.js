import { Box, Stack } from "@mui/material";
import useMusicPlayer from "../hook/usePlayerProvider";

const TrackList=() => {
const { trackList, currentTrackIndex, playTrack } = useMusicPlayer();

return (
    <>
    <Box sx={{
        marginTop: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "center", 
        paddingBottom: "100px",
      }}>
    <Stack spacing={1} sx={{
        maxWidth:"1200px",
        width:"100%",
    }}>
      {trackList.map((track, index) => (
        <div key={index}
            className={`track-item ${currentTrackIndex === index ? "active" : ""}`}
            onClick={() => playTrack(index)}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            padding: "10px",
            color: currentTrackIndex === index ? "#383431FF" : "white",
            borderRadius: "5px",
            background: currentTrackIndex === index ? "#EBDBCCFF" : "#6B645D80",
          }}
        >
            {/* Thumbnail */}
          <img
            src={track.thumbnail}
            alt={`${track.name} thumbnail`}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "5px",
              marginRight: "10px",
              objectFit: "cover",
            }}
          />
        {/* Track Details */}
        <div>
            <div className="song-title" style={{ fontWeight: "bold" }}>
              {track.name}
            </div>
            <div className="song-author" style={{ fontSize: "0.9em", color: currentTrackIndex === index ? "#555" : "#E6D7C8FF" }}>
              {track.author || "Unknown Artist"}
            </div>
          </div>
   
   </div>
      ))}
      </Stack>
      </Box>
    </>
  );
  };
  
  export default TrackList;