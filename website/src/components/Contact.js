import React from "react";
import { Box, Typography } from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function TextWithIcon(props) {
  return (
    <Box display="flex" my={3}>
      {props.children}
      <Typography style={{ marginLeft: 10 }}>{props.text}</Typography>
    </Box>
  );
}

export default function Contact() {
  return (
    <Box>
      <Typography>언제든 편하게 연락주세요. 감사합니다.</Typography>
      <br />
      <TextWithIcon text="010-3711-9275">
        <PhoneAndroidIcon />
      </TextWithIcon>
      <TextWithIcon text="jwj0104@gmail.com">
        <MailOutlineIcon />
      </TextWithIcon>
    </Box>
  );
}
