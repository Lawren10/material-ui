import React from "react";
import {Typography} from "@mui/material";
import {CustomDiv} from "./components/styledMaterial";
import {Stack, Button} from "@mui/material";

function App() {
  return (
    <div>
      <Typography variant="h1">Material Design</Typography>
      <CustomDiv></CustomDiv>
      <Stack direction="row" spacing={2} marginY="2rem">
        <Button variant="outlined">outlined</Button>
        <Button variant="contained">default</Button>
        <Button variant="text">text</Button>
      </Stack>
    </div>
  );
}

export default App;
