import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import BrittanyCard from "./components/BrittanyCard";
import { Slide, IconButton, Button, Avatar, Divider } from "@material-ui/core";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Portfolio from "./components/PortfolioWrapper";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    color: "#5bf",
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function CardWrapper(props) {
  return (
    <Box my={15}>
      <BrittanyCard {...props}>{props.children}</BrittanyCard>
    </Box>
  );
}

function MenuDivider() {
  return (
    <Divider
      flexItem
      orientation="vertical"
      style={{ height: "1rem", alignSelf: "center" }}
    />
  );
}

export default function App(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color="inherit">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <Avatar
                alt="WookJae Jo"
                src={process.env.PUBLIC_URL + "/favicon.ico"}
              />
            </IconButton>
            <Typography variant="h6" className={classes.title}></Typography>
            <Button className={classes.menuButton}>Welcome</Button>
            <MenuDivider />
            <Button className={classes.menuButton}>Services</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <CardWrapper index={0} maxWidth="sm" title="About Me">
        <AboutMe />
      </CardWrapper>
      <CardWrapper index={1} maxWidth="sm" title="Resume">
        <Resume />
      </CardWrapper>
    </React.Fragment>
  );
}
