import React from "react";
import { Grid, List, ListItem } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

export default function TechStack(props) {
  const columnLength =
    props.columnLength === undefined ? 3 : props.columnLength;
  return props.values === undefined ? null : (
    <Grid container>
      {[...new Array(columnLength)].map((_, i) => (
        <Grid key={i}>
          <List>
            {props.values
              .filter((_, index) => index % columnLength === i)
              .map((v, i) => (
                <ListItem
                  key={i}
                  style={{
                    padding: "0.4rem",
                    paddingLeft: "0.8rem",
                    paddingRight: "0.8rem",
                  }}
                >
                  <ArrowRightIcon />
                  {v}
                </ListItem>
              ))}
          </List>
        </Grid>
      ))}
    </Grid>
  );
}
