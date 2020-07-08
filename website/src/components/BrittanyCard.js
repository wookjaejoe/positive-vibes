import React from "react";
import { Grid, makeStyles, Divider, Typography, Box, Container } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  cardIndex: {
    marginRight: "1rem"
  },
  cardTitle: {},
  cardContents: {},
}));

function CardIndex(props) {
  const classes = useStyles();
  return (
    <Typography variant="h6" className={classes.cardIndex}>
      {(props.value + ".").padStart(3, "0")}
    </Typography>
  );
}

function CardTitle(props) {
  return (
    <Typography variant="h3" style={{fontWeight: "bold"}}>
      {props.value}
    </Typography>
  );
}

export default function BritannyCard(props) {
    return (
      <Container maxWidth={props.maxWidth === undefined ? "md" : props.maxWidth}>
        <Box mb={1}>
          <Grid container alignItems="flex-end">
            <Grid>
              <CardIndex value={props.index} />
            </Grid>
            <Grid>
              <CardTitle value={props.title} />
            </Grid>
            <Typography variant="caption">{props.caption}</Typography>
          </Grid>
        </Box>
        <Divider light></Divider>
        <Box my={1}>
          {props.children !== undefined ? props.children
          : <Skeleton variant="rect" height={400} />
        }
        </Box>
      </Container>
    );
}
