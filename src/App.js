import Controller from "./component/Controller";
import "./App.css"
import TrackList from "./component/TrackList";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import MusicAppBar from "./component/MusicAppBar";
import { Box } from "@mui/material";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <MusicAppBar/>
        <Box sx={{
        width: "100%", // Ensures the Box spans the full width of the viewport
        display: "flex",
        justifyContent: "center", // Centers the Card horizontally
        // backgroundColor: "#f8f8f8",
      }}>
        <div style={{maxWidth: "1200px", width:"100%"}}>
        <h1 style={{ color: "white", fontSize: "40px", marginBottom: "10px" }}>
    Christmas List{" "}
    <span style={{ fontSize: "50px" }}>&#127876;</span>
  </h1></div></Box>
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;