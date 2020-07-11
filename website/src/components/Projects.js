import React from "react";
import {
  makeStyles,
  Box,
  Divider,
  Typography,
  Badge,
  Chip,
} from "@material-ui/core";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
  root: {},
  tags: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const projects = [
  <ProjectCard
    title="Positive Vibes"
    subtitle="개인 웹사이트"
    caption="Now ~ Jun 2020 | 개인 프로젝트"
    tags={[
      "React",
      "Gatsby",
      "Material UI"
    ]}
  >
    <Typography>
      Owen Site ...
    </Typography>
  </ProjectCard>,
  <ProjectCard
    title="CodeScroll STATIC"
    subtitle="웹 기반 정적 코드 분석 도구"
    caption="Now ~ Mar 2019 | 슈어소프트테크"
    tags={[
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
    <Typography>
      CodeScroll STATIC은 웹 기반 코드 정적 분석 도구입니다. C/C++, Java, C#
      언어에 대한 정적 분석 기능을 지원합니다. 본 프로젝트에서 백엔드 서비스와
      Windows/Linux 클라이언트 사이드 프로그램을 개발하였고, DevOps도
      담당하였습니다.
    </Typography>
  </ProjectCard>,
  <ProjectCard
    title="Security Data Aggregation Framework"
    subtitle="전기 도메인 보안 취약점 검증 플랫폼"
    caption="Jan 2018 ~ Apr 2018 | 슈어소프트테크"
    tags={["Java", "Python", "Groovy", "JS|HTML|CSS", "Eclipse RCP", "HTTP"]}
  ></ProjectCard>,
  <ProjectCard
    title="CodeScroll SNIPER"
    subtitle="C/C++ 코드 정적 검증 도구 - 런타임 오류 검증"
    caption="Mar 2017 ~ Dec 2017 | 슈어소프트테크"
    tags={["Java", "Eclipse RCP", "Sqlite DB", "Jenkins"]}
  ></ProjectCard>,
  <ProjectCard
    title="CodeScroll Code Inspector"
    subtitle="C/C++ 코드 정적 검증 도구 - 코딩 규칙 검증"
    caption="Mar 2017 ~ Dec 2017 | 슈어소프트테크"
    tags={["Java", "Eclipse RCP", "Sqlite DB", "Jenkins"]}
  ></ProjectCard>,
  <ProjectCard
    title="EPRI Security Metric Calculator"
    subtitle="전기 도메인 보안 취약점 검증 도구"
    caption="Mar 2017 ~ Jun 2017 | 슈어소프트테크"
    tags={["Java", "Groovy", "JS|HTML|CSS", "Eclipse RCP"]}
  ></ProjectCard>,
  <ProjectCard
    title="CodeScroll Controller Tester"
    subtitle="C/C++ 코드 동적 검증 도구"
    caption="Jan 2017 ~ Apr 2017 | 슈어소프트테크"
    tags={["Java", "Eclipse RCP", "Sqlite DB", "Jenkins"]}
  ></ProjectCard>,
  <ProjectCard
    title="사용자 편의 중심 서비스 로봇 응용 개발을 지원하는 로봇 소프트웨어 플랫폼 개발"
    caption="Mar 2013 ~ Dec 2016 | 강원대학교 산학협력단 | 산업정보통신 연구실 | 정부과제"
    tags={["Java", "C++", "Eclipse RCP"]}
  ></ProjectCard>,
  <ProjectCard
    title="제조 로봇용 실시간 지원 SW 플랫폼 기술 개발"
    caption="Jul 2016 ~ Dec 2016 | 강원대학교 산학협력단 | 산업정보통신 연구실"
    tags={["C++", "Xenomai"]}
  ></ProjectCard>,
  <ProjectCard
    title="경성 실시간 개방형 SW 기반의 드론용 시스템 플랫폼 기술 개발"
    caption="Sep 2013 ~ May 2015 | 강원대학교 산학협력단 | 산업정보통신 연구실 | 정부과제"
    tags={["C++"]}
  ></ProjectCard>,
  <ProjectCard
    title="스마트 디바이스 기반 로봇의 대규모 서비스 및 H/W 독립적인 서비스 공용화 지원을 위한 서비스 플랫폼 기술 개발과 핵심 로봇서비스 및 제품 3종 개발"
    caption="Sep 2013 ~ May 2015 | 강원대학교 산학협력단 | 산업정보통신 연구실 | 정부과제"
    tags={["Java", "C++", "Eclipse RCP"]}
  ></ProjectCard>,
  <ProjectCard
    title="Interactive Posture Correction Coaching System"
    caption="Jun 2015 ~ Jul 2015 | 스마트 비즈온"
    tags={["C#", "WPF", "Kinect"]}
  ></ProjectCard>,
  <ProjectCard
    title="큐브 타이머를 지원하는 안드로이드 애플리케이션 및 커뮤니티 서비스 개발"
    caption="Dec 2013 ~ Feb 2014 | Park distribution co. | 아르바이트"
    tags={["Java", "Android"]}
  ></ProjectCard>,
];

export default function Projects() {
  const classes = useStyles();
  const tagCountMap = new Map();
  projects.forEach((p, _) => {
    if (p.props.tags !== undefined) {
      p.props.tags.forEach((t, _) => {
        tagCountMap.set(t, tagCountMap.has(t) ? tagCountMap.get(t) + 1 : 1);
      });
    }
  });

  return (
    <Box >
      <Box m={3} className={classes.tags}>
        <Typography>All used : </Typography>
        {Array.from(tagCountMap.keys()).map((key) => (
          <Badge badgeContent={tagCountMap.get(key)} color="primary" invisible={tagCountMap.get(key) === 1}>
            <Chip
              variant="outlined"
              size="small"
              label={<Typography variant="caption">{key}</Typography>}
              color="secondary"
            ></Chip>
          </Badge>
        ))}
      </Box>
      <Divider />

      {projects.map((p, index) => (
        <Box>
          {p}
          <Divider border />
        </Box>
      ))}
    </Box>
  );
}
