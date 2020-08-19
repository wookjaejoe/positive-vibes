import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import { Box, Divider } from "@material-ui/core";

function TimelineEvent(props) {
  return (
    <Box>
      {props.year === undefined | props.start ? null : <TimelineDivider />}
      <TimelineItem>
        <TimelineOppositeContent style={{ flex: "0 1 auto" }}>
          <Box width="50px">
            <Typography style={{ color: "#ffd687" }}>
              {props.year === undefined ? null : props.year}
            </Typography>
            <Typography variant="caption" style={{ color: "#ffd687" }}>
              {props.month === undefined ? null : props.month}
            </Typography>
          </Box>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          {props.end ? null : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>{props.children}</TimelineContent>
      </TimelineItem>
    </Box>
  );
}

function TimelineDivider() {
  return <Divider style={{ marginTop: "8px" }} />;
}

export default function MyTimeline() {
  return (
    <React.Fragment>
      <Timeline>
        <TimelineEvent year="2017" month="Feb" start={true}>
          <Typography>
            강원대학교 일반대학원 석사과정 졸업 - 전자통신공학 전공
          </Typography>
        </TimelineEvent>
        <TimelineEvent year="2016" month="Dec">
          <Typography>슈어소프트테크 입사</Typography>
        </TimelineEvent>
        <TimelineEvent year="2015" month="Mar">
          <Typography>
            강원대학교 일반대학원 석사과정 입학 - 전자통신공학 전공
          </Typography>
        </TimelineEvent>
        <TimelineEvent month="Feb">
          <Typography>강원대학교 전자통신공학과 학사과정 졸업</Typography>
        </TimelineEvent>
        <TimelineEvent year="2012" month="May">
          <Typography>산업정보통신 연구실(IIC Lab) 입실</Typography>
        </TimelineEvent>
        <TimelineEvent year="2011" month="Sep">
          <Typography>강원대학교 복학 - 전자통신공학 전공</Typography>
        </TimelineEvent>
        <TimelineEvent month="Aug">
          <Typography>육군 병장 만기 전역</Typography>
        </TimelineEvent>
        <TimelineEvent year="2009" month="Oct">
          <Typography>육군 입대</Typography>
        </TimelineEvent>
        <TimelineEvent month="Mar">
          <Typography>강원대학교 전기전자공학부 입학</Typography>
        </TimelineEvent>
        <TimelineEvent month="Feb">
          <Typography>창신고등학교 자연계 졸업</Typography>
        </TimelineEvent>
        <TimelineEvent year="....">
          <Typography>......</Typography>
        </TimelineEvent>
        <TimelineEvent year="1991" month="Jan" end={true}>
          <Typography>창원시 마산합포구에서 태어남</Typography>
        </TimelineEvent>
      </Timeline>
    </React.Fragment>
  );
}
