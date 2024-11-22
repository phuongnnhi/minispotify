import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import useMusicPlayer from "../hook/usePlayerProvider";


export default function Controller() {
  const theme = useTheme();
  const {
    currentTrackIndex,
    trackList,
    togglePlay,
    playNextTrack,
    playPreviousTrack,
    isPlaying,
  } = useMusicPlayer();

  // Get current track details
  const currentTrack = currentTrackIndex !== null ? trackList[currentTrackIndex] : null;

  if (!currentTrack) {
    return null; // Do not render the controller if no track is selected
  }

  return (
    <Box sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%", // Ensures the Box spans the full width of the viewport
        display: "flex",
        justifyContent: "center", // Centers the Card horizontally
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
      }}>
    <Card
      sx={{
        maxWidth: "1200px", // Limit card width
        width: "100%", // Ensure it stretches within the Box
        display: "flex",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: { xs: "column", sm: "row" },
        zIndex: 1000,
      }}
    >
        <Box
  sx={{
    width: 80,
    height: 80,
    borderRadius: "8px", // Rounded corners
    overflow: "hidden", 
    margin: "7px"
  }}
>
      <CardMedia
        component="img"
        sx={{ width: "100%", height: "100%", objectFit: "cover"}}
        image={currentTrack.thumbnail}
        alt={`${currentTrack.name} thumbnail`}
      /></Box>
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, ml: 2 }}>
        <CardContent sx={{ flex: "1 0 auto", padding: "8px 0" }}>
          <div>
          <div style={{ fontWeight: "bold", fontSize:"1.5em", marginBottom:"6px" }}>
              {currentTrack.name}
            </div>
            <div className="song-author" style={{ color: "#383431FF" }}>
              {currentTrack.author || "Unknown Artist"}
            </div>
          </div>
        </CardContent>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
        <IconButton aria-label="previous" onClick={playPreviousTrack}>
          {theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>
        <IconButton aria-label="play/pause" onClick={togglePlay}>
          {isPlaying ? (
            <PauseIcon sx={{ height: 38, width: 38 }} />
          ) : (
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          )}
        </IconButton>
        <IconButton aria-label="next" onClick={playNextTrack}>
          {theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton>
      </Box>
    </Card>
    </Box>
  );
}