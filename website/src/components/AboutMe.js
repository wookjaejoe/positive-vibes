import React from "react";
import {
  Box,
  Typography,
  makeStyles,
  Fade,
  Link,
  Divider,
} from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";

import TechStack from "./TechStack";

const useStyles = makeStyles((theme) => ({
  paragraph: {
    marginBottom: "0.5rem",
  },
  desc: {
    color: "#f3c677",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    display: "inline-block",
  },
  link: {
    color: "#5bf",
  },
  blockquote: {
    fontStyle: "italic",
  },
  image: {
    position: "relative",
    height: 281,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
    transition: theme.transitions.create("opacity"),
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

function Portfolio() {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center">
      <ButtonBase
        focusRipple
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{ width: "500px" }}
        href={process.env.PUBLIC_URL + "/portfolio_positive-vibes.pdf"}
        download
      >
        <span className={classes.imageSrc} style={{}}>
          <img
            alt="portfolio-main"
            src={process.env.PUBLIC_URL + "/portfolio-main.png"}
            width="500px"
          />
        </span>
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            DOWNLOAD PORTFOLIO
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </Box>
  );
}

export default function AboutMe(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const descTransitDelay = 2500;

  const descList = ["Programmer", "Positive", "Creative", "Conscientiousness"];

  setTimeout(() => {
    if (value === descList.length - 1) {
      setValue(0);
    } else {
      setValue(value + 1);
    }
  }, descTransitDelay);

  return (
    <Box>
      <Box className={classes.paragraph}>
        <Typography display="inline">안녕하세요.</Typography>
        {descList.map((desc, index) =>
          value === index ? (
            <Fade key={index} in={true} timeout={500}>
              <Box component="span" className={classes.desc}>
                <Typography align="right">{desc}</Typography>
              </Box>
            </Fade>
          ) : null
        )}
        <Typography display="inline">조욱재입니다.</Typography>
      </Box>

      <Box className={classes.paragraph}>
        <Typography>
          현재{" "}
          <Link
            href="https://www.suresofttech.com"
            target="_blank"
            className={classes.link}
          >
            슈어소프트테크
          </Link>
          에서 웹 기반 정적 코드 검증 도구{" "}
          <Link
            href="https://www.suresofttech.com/ko/html/tool/code_static"
            target="_blank"
            className={classes.link}
          >
            CodeScroll STATIC
          </Link>
          을 개발하고 있습니다.
        </Typography>
      </Box>

      <Box className={classes.paragraph}>
        <Box
          borderLeft="solid 5px"
          paddingLeft="1rem"
          margin="1rem"
          className={classes.blockquote}
        >
          <Typography>
            어떤 초대든 사양하지 말고, 낯선 것을 거부하지 마라
          </Typography>
          <Typography>영화 "비치"</Typography>
        </Box>
        <Typography>
          개발자로 살아가는데 있어 가장 중요한 요소는 변화를 두려워하지 않는 것,
          스스로 배우려는 자세 그리고 꾸준한 노력이라 생각합니다. 항상 긍정적인
          태도로 좋은 변화를 만들겠습니다.
        </Typography>
      </Box>
      <Typography>최근 아래 기술을 다루었습니다:</Typography>
      <TechStack
        values={["Java", "Python", "SpringBoot", "React", "Flask", "Docker"]}
      />
      <Box py={3}>
        <Divider />
      </Box>
      <Portfolio />
    </Box>
  );
}
