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
    <TimelineItem>
      <TimelineOppositeContent style={{ flex: "0 1 auto" }}>
        <Box width="50px">
          <Typography style={{color: "#f3c677"}}>{props.time}</Typography>
        </Box>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot/>
        {props.end ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>{props.children}</TimelineContent>
    </TimelineItem>
    
  );
}

function TimelineDivider() {
  return <Divider style={{marginTop: "8px"}} />
}

export default function Resume() {
  return (
    <React.Fragment>
      <Timeline>
        <TimelineEvent time="2017 Feb">
          <Typography>
            강원대학교 일반대학원 석사과정 졸업 - 전자통신공학 전공
          </Typography>
        </TimelineEvent>
        <TimelineDivider />
        <TimelineEvent time="2016 Dec">
          <Typography>슈어소프트테크 입사</Typography>
        </TimelineEvent>
        <TimelineDivider />
        <TimelineEvent time="2015 Mar">
          <Typography>
            강원대학교 일반대학원 석사과정 입학 - 전자통신공학 전공
          </Typography>
        </TimelineEvent>
        <TimelineEvent time="2015 Feb">
          <Typography>강원대학교 전자통신공학과 학사과정 졸업</Typography>
        </TimelineEvent>
        <TimelineDivider />
        <TimelineEvent time="2012 May">
          <Typography>산업정보통신 연구실(IIC Lab) 입실</Typography>
        </TimelineEvent>
        <TimelineDivider />
        <TimelineEvent time="2011 Sep">
          <Typography>강원대학교 복학 - 전자통신공학 전공</Typography>
        </TimelineEvent>
        <TimelineEvent time="2011 Aug">
          <Typography>육군 병장 만기 전역</Typography>
        </TimelineEvent>
        <TimelineDivider />
        <TimelineEvent time="2009 Oct">
          <Typography>육군 입대</Typography>
        </TimelineEvent>
        <TimelineEvent time="2009 Mar">
          <Typography>강원대학교 전기전자공학부 입학</Typography>
        </TimelineEvent>
        <TimelineEvent time="2009 Feb">
          <Typography>창신고등학교 자연계 졸업</Typography>
        </TimelineEvent>
        <TimelineDivider />
        <TimelineEvent time="....">
          <Typography>......</Typography>
        </TimelineEvent>
        <TimelineDivider />
        <TimelineEvent time="1991" end={true}>
          <Typography>태어남</Typography>
        </TimelineEvent>
      </Timeline>
    </React.Fragment>
  );
}
