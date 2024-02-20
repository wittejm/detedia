import { QuestionMark } from "@mui/icons-material";
import { Button, Grid, TextField, Tooltip, Typography } from "@mui/material";
import Item from "@mui/material/Grid";
import React, { useState } from "react";

export default function Maker() {

  const [tagValue, setTagValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [wordsValue, setWordsValue] = useState("");
  
  return (
    <div>
      <h3>Puzzle Maker</h3>
      This feature is a work in progress and doesn't do anything yet.
      <Grid
        container
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="flex-end"
      >
        <Grid item xs={4} display="flex" justifyContent="flex-end">
          <Item>
            Name:
            <Tooltip
              title={
                <Typography fontSize={16}>
                  {" "}
                  This can be anything. It appears as the page header.
                </Typography>
              }
            >
              <QuestionMark fontSize={"inherit"} />
            </Tooltip>
          </Item>
        </Grid>
        <Grid item xs={8} display="flex" justifyContent="flex-start">
          <Item>
            <TextField id="nameField" label="" variant="outlined" value={nameValue} onChange={(e)=>setNameValue(e.target.value)} />
          </Item>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="flex-end">
          <Item>
            Words:
            <Tooltip
              title={
                <Typography fontSize={16}>
                  {" "}
                  Space- or comma-separated, 1-7 words, all of length 5, no
                  punctuation.{" "}
                </Typography>
              }
            >
              <QuestionMark fontSize={"inherit"} />
            </Tooltip>
          </Item>
        </Grid>
        <Grid item xs={8} display="flex" justifyContent="flex-start">
          <Item>
            <TextField id="wordsField" label="" variant="outlined"  value={wordsValue} onChange={(e)=>setWordsValue(e.target.value)}/>
          </Item>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="flex-end"></Grid>
        <Grid item xs={8} display="flex" justifyContent="flex-start">
          <Item>
            <Button size="large" variant="contained" onClick={()=>0}>Create!</Button>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
