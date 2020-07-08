import React from "react";
import { makeStyles, Box, Divider } from "@material-ui/core";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const projects = [
  <ProjectCard
    isExpanded={true}
    title="제 3회 OPRoS 창작 로봇 경진 대회"
    caption="산업통상자원부 주관"
    techList={[""]}
  >
    <br />
  </ProjectCard>,
  <ProjectCard
  isExpanded={true}
  title="제 2회 OPRoS 창작 로봇 경진 대회"
  caption="산업통상자원부 주관"
  techList={[""]}
>
  <br />
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
