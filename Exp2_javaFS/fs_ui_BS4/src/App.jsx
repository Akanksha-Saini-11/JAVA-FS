import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Box
} from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box className="root-center">
      {}
      <Box className="ui-wrapper">
        {}
        <AppBar position="static" className="appbar">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Material UI Demo
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        {}
        <Card className="card">
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              User Registration
            </Typography>

            <TextField
              label="Name"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Email"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
            />

            <Button
              variant="contained"
              fullWidth
              className="submit-btn"
            >
              Register
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default App;
