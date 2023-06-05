import { TextField } from "@mui/material";
import React from "react";

export default function Maker() {
  return (
    <div>
      <div>Puzzle Maker</div>
      <div>
        Id:
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
      <div>
        Name:
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
      <div>
        Words:
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    </div>
  );
}
