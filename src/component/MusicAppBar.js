import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: "dark", // Enables dark mode globally
  },
});

export default function MusicAppBar() {
  return (
    <ThemeProvider theme={darkTheme}>
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center", 
        width: "100%", 
      }}
    >
    <Box sx={{ flexGrow: 1, maxWidth:"1200px", width:"100%"}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Mini Spotify
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </Box>
    </ThemeProvider>
  );
}