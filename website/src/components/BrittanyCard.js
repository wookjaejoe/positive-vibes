import React from "react";
import { Grid, makeStyles, List, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

export default function BrittanyCard(props) {
  const classes = useStyles();
  return (
    <List>
      <li my={3}>
        <Grid container>
          <Grid>{props.index + ". "}</Grid>
          <Grid>Title</Grid>
          <Grid>Ruler here</Grid>
        </Grid>
      </li>
      <Divider />
      Some contents
    </List>
  );
}
