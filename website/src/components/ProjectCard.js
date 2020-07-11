import React from "react";
import { makeStyles, Typography, Box, Chip, Divider } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    color: "#ffd687",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();
  let [isExpanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, _isExpanded) => {
    setExpanded(_isExpanded);
  };

  // TODO : 링크
  return (
    <Accordion expanded={isExpanded} onChange={handleChange(true)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Box>
          <Typography className={classes.title}>{props.title}</Typography>
          <Typography variant="subtitle2">{props.subtitle}</Typography>
          <Typography variant="caption">{props.caption}</Typography>
          {props.captions === undefined
            ? null
            : props.captions.map((v, i) => (
                <Typography variant="caption">
                  {i === 0 ? null : <br />}
                  {v}
                </Typography>
              ))}
          <Box className={classes.tags}>
            {props.tags === undefined
              ? null
              : props.tags.map((v, i) => (
                  <Chip
                    variant="outlined"
                    size="small"
                    label={<Typography variant="caption">{v}</Typography>}
                    color="secondary"
                  />
                ))}
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {props.children === undefined ? (
            <Skeleton my={0} height={180} />
          ) : (
            <Box className={classes.projectDetails} my={1}>
              {props.children}
            </Box>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
