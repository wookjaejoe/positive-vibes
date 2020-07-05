import React from "react";
import { Grid, makeStyles, Divider, Typography, Box } from "@material-ui/core";
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
    <Typography variant="h3" className={classes.cardIndex}>
      {(props.value + ".").padStart(3, "0")}
    </Typography>
  );
}

function CardTitle(props) {
  return (
    <Typography variant="h3">
      {props.value}
    </Typography>
  );
}

export default class BritannyCard extends React.Component {
  render() {
    return (
      <Box>
        <Box mb={1}>
          <Grid container alignItems="flex-end">
            <Grid>
              <CardIndex value={this.props.index} />
            </Grid>
            <Grid>
              <CardTitle value={this.props.title} />
            </Grid>
            <Typography variant="caption">{this.props.caption}</Typography>
          </Grid>
        </Box>
        <Divider light></Divider>
        <Box my={1}>
          {this.props.children !== undefined ? this.props.children
          : <Skeleton variant="rect" height={400} />
        }
        </Box>
      </Box>
    );
  }  
}
