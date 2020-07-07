import React from "react";
import { makeStyles, Typography, Box, Divider } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import TechStack from "./TechStack";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {},
  italic: {
    fontStyle: "italic",
  },
}));

function Project(props) {
  const classes = useStyles();
  let [isExpanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, _isExpanded) => {
    setExpanded(_isExpanded);
  };

  return (
    <Accordion
      expanded={isExpanded}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Box>
          <Typography variant="h6">{props.title}</Typography>
          <Typography variant="caption" color="textSecontary">
            {props.term + " | " + props.company}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {props.children === undefined ? (
            <Skeleton my={0} height={180} />
          ) : (
            <Box fontSize="0.9rem" className={classes.projectDetails} my={1}>
              {props.children}
            </Box>
          )}
          <TechStack columnLength={4} values={props.techList} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

const projects = [
  <Project
  isExpanded={true}
    title="CodeScroll STATIC"
    term="Now ~ Mar 2019"
    company="슈어소프트테크"
    techList={[
      "Java",
      "Python",
      "SpringBoot",
      "Flask",
      "Docker",
      "Gitlab-CI",
      "Jenkins",
      "Nginx",
      "Angular6",
    ]}
  >
    CodeScroll STATIC은 웹 기반 코드 정적 분석 도구입니다. C/C++, Java, C#
    언어에 대한 정적 분석 기능을 지원합니다. 본 프로젝트에서 백엔드 서비스와
    Windows/Linux 클라이언트 사이드 프로그램을 개발하였고, DevOps도
    담당하였습니다.
    <br />
  </Project>,
  <Project
    title="EPRI MetricHub"
    term="Jan 2018 ~ Apr 2018"
    company="슈어소프트테크"
    techList={[
      "Java",
      "Python",
      "Groovy",
      "JS|HTML|CSS",
      "Ecilpse RCP",
      "HTTP",
    ]}
  ></Project>,
  <Project
    title="CodeScroll SNIPER"
    term="Mar 2017 ~ Dec 2017"
    company="슈어소프트테크"
    techList={["Java", "Ecilpse RCP", "Sqlite DB", "Jenkins"]}
  ></Project>,
  <Project
    title="CodeScroll Code Inspector"
    term="Mar 2017 ~ Dec 2017"
    company="슈어소프트테크"
    techList={["Java", "Ecilpse RCP", "Sqlite DB", "Jenkins"]}
  ></Project>,
  <Project
    title="EPRI Security Metric Calculator"
    term="Mar 2017 ~ Jun 2017"
    company="슈어소프트테크"
    techList={["Java", "Groovy", "JS|HTML|CSS", "Ecilpse RCP"]}
  ></Project>,
  <Project
    title="CodeScroll Controller Tester"
    term="Jan 2017 ~ Apr 2017"
    company="슈어소프트테크"
    techList={["Java", "Ecilpse RCP", "Sqlite DB", "Jenkins"]}
  ></Project>,
  <Project
    title="사용자 편의 중심 서비스 로봇 응용 개발을 지원하는 로봇 소프트웨어 플랫폼 개발"
    term="Mar 2013 ~ Dec 2016"
    company="강원대학교 산학협력단 | 산업정보통신 연구실 | 정부과제"
    techList={["Java", "C++", "Eclipse RCP"]}
  ></Project>,
  <Project
    title="제조 로봇용 실시간 지원 SW 플랫폼 기술 개발"
    term="Jul 2016 ~ Dec 2016"
    company="강원대학교 산학협력단 | 산업정보통신 연구실"
    techList={["C++", "Xenomai"]}
  ></Project>,
  <Project
    title="경성 실시간 개방형 SW 기반의 드론용 시스템 플랫폼 기술 개발"
    term="Sep 2013 ~ May 2015"
    company="강원대학교 산학협력단 | 산업정보통신 연구실 | 정부과제"
    techList={["C++"]}
  ></Project>,
  <Project
    title="스마트 디바이스 기반 로봇의 대규모 서비스 및 H/W 독립적인 서비스 공용화 지원을 위한 서비스 플랫폼 기술 개발과 핵심 로봇서비스 및 제품 3종 개발"
    term="Sep 2013 ~ May 2015"
    company="강원대학교 산학협력단 | 산업정보통신 연구실 | 정부과제"
    techList={["Java", "C++", "Eclipse RCP"]}
  ></Project>,
  <Project
    title="Interactive Posture Correction Coaching System"
    term="Jun 2015 ~ Jul 2015"
    company="스마트 비즈온"
    techList={["C#", "WPF", "Kinect"]}
  ></Project>,
  <Project
    title="큐브 타이머를 지원하는 안드로이드 애플리케이션 및 커뮤니티 서비스 개발"
    term="Dec 2013 ~ Feb 2014"
    company="Park distribution co. | 아르바이트"
    techList={["Java", "Android"]}
  ></Project>,
];

export default function Projects() {
  return (
    <Box>
      {projects.map((p, index) => (
        <Box>
          {/* {index === 0 ? null : <Divider />} */}
          {p}
          <Divider border/>
        </Box>
      ))}
    </Box>
  );
}
