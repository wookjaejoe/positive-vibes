import React from "react";
import { makeStyles, Box, Divider, Typography } from "@material-ui/core";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const projects = [
  <ProjectCard
    isExpanded={true}
    title="Article | 스텁(stub)은 언제 어떻게 사용할까?"
    caption="2018 | 슈어소프트테크"
    link="https://m.blog.naver.com/suresofttech/221204092938"
  >
    <Typography>
      스텁을 사용한 테스트 기법과 CodeScroll Controller Tester에서 제공하는 스텁
      기능 소개을 소개합니다. 스텁은 테스트 중인 모듈이 의존하는 소프트웨어 구성
      요소의 동작을 시뮬레이션하는 프로그램입니다. 동적 테스트 도구인 CodeScroll
      Controller Tester는 스텁을 효율적으로 작성하고 관리할 수 있는 다양한
      기능을 제공합니다. 스텁을 사용한 테스트 기법에 대해 자세히 알아보도록
      하겠습니다.
    </Typography>
  </ProjectCard>,
  <ProjectCard
    isExpanded={true}
    title="Article | CONTROLLER TESTER의 ALM 도구 연동 기능"
    caption="2017₩ | 슈어소프트테크"
    link="https://m.blog.naver.com/suresofttech/221160560270"
  >
    <br />
  </ProjectCard>,
  <ProjectCard
    isExpanded={true}
    title="논문 | 소프트웨어 컴포넌트 기반 로봇 시스템을 위한 입출력 연관 기반 테스트 케이스 생성의 새로운 기법"
    captions={[
      "New Method for I/O Relationship-based Test Case Generation for Software Component-based Robot System",
      "2016 | 제어로봇시스템학회",
    ]}
  >
    <Typography>
      The SW component-based robot system (CBRS) has a serious problem that may
      generate more test cases unless the input/output (I/O) relationships are
      more accurately analyzed. Because the number of test cases affects the
      testing time, it is better to keep the number small. Therefore, this paper
      proposes a new IO relationship-based combination technique (newIOReCT) for
      test generation. It is assumed that the newIOReCT uses the verified test
      cases of the basic SW components of a CBRS, and the given I/O
      relationships among the components are used in the test case generation
      process. The proposed method generates the test cases based on the output
      of the CBRS regardless of the types of I/O relationships of the system,
      which makes the number of test cases generated by the proposed method
      smaller than those generated by the conventional methods. Some CBRS
      examples are given to validate the newIOReCT method through comparison
      with another method.
    </Typography>
  </ProjectCard>,
  <ProjectCard
    isExpanded={true}
    title="논문 | 로봇 소프트웨어 시험을 위한 입력 파라미터 연관관계 기반 테스트 케이스 생성 및 축소 방법"
    captions={[
      "Relationship of Input parameter Based Method for Generation and Reduction of Test Cases For Robot Software Testing",
      "2016 | 제어로봇시스템학회",
    ]}
  ></ProjectCard>,
  <ProjectCard
    isExpanded={true}
    title="논문 | 휴머노이드 로봇 응용을 쉽게 작성할 수 있는 로봇 시나리오 언어"
    captions={[
      "Robot Scenario Language for Making Easily Humanoid Robot Application",
      "2016 | 제어로봇시스템학회",
    ]}
  ></ProjectCard>,
  <ProjectCard
    isExpanded={true}
    title="논문 | 손쉬운 로봇 응용 개발을 위한 비주얼 프로그래밍 환경 구조"
    captions={[
      "Visual Programming Environment Architecture for Easily Developing Robot applications",
      "2014 | 제어로봇시스템학회",
    ]}
  ></ProjectCard>,
  <ProjectCard
    isExpanded={true}
    title="특허 | 컴포넌트 기반 시스템에 대한 실시간 적합성 검사 방법 및 장치 및 컴퓨터 판독 가능한 저장 매체"
    caption="REAL-TIME CONFORMANCE TESTING METHOD AND APPARATUS FOR SYSTEM BASED ON COMPONENT, AND COMPUTER-READABLE RECORDING MEDIUM FOR THE SAME"
    techColumnLength={1}
    techList={[
      "IPC : G06F 11/22 G06F 11/36",
      "출원인 : 강원대학교산학협력",
      "출원번호 : 1020160165912",
      "출원일자 : 2016.12.07",
      "등록번호 : 1019183640000",
      "등록일자 : 2018.11.07",
      "공개번호 : 1020180065289",
      "공개일자 : 2018.06.18",
      "대리인 : 특허법인",
      "무한발명자 : 박홍성 조욱재",
      "법적상태 : 등록",
    ]}
  >
    <Typography>
      컴포넌트 기반 시스템에 대한 실시간 적합성 검사 방법 및 장치 및 컴퓨터 판독
      가능한 저장 매체가 개시된다. 컴포넌트 기반 시스템에 대한 실시간 적합성
      검사 방법은, 상기 시스템을 구성하는 컴포넌트들을 테스트하기 위한 테스트
      케이스들을 생성하는 단계; 상기 생성된 테스트 케이스들에 기초하여 상기
      컴포넌트들을 테스트하는 것에 의해 각 테스트 케이스에 대한 컴포넌트의 수행
      사이클 수를 계산하는 단계; 상기 계산된 컴포넌트의 수행 사이클 수에
      기초하여 컴포넌트들의 최악 수행 시간(Worst-Case Execution Time, WCET)을
      계산하는 단계; 및 상기 계산된 컴포넌트들의 최악 수행 시간과 상기
      컴포넌트들의 입출력 연관관계 정보에 기초하여 상기 시스템의 실시간 적합성
      여부를 판단하는 단계를 포함할 수 있다.
    </Typography>
  </ProjectCard>,
];

export default function Projects() {
  return (
    <Box>
      {projects.map((p, index) => (
        <Box>
          {p}
          <Divider border />
        </Box>
      ))}
    </Box>
  );
}
