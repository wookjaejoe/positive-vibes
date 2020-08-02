import React from "react";
import { Box } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import { parseMdyml } from "./mdyml";

class PaperContents extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    if (this.props.src) {
      fetch(this.props.src)
        .then((response) => response.text())
        .then((text) => {
          this.setState({data: parseMdyml(text)})
        });
    }
  }

  render() {
    return (
      <Box>
        {this.state.data === null
          ? null
          : this.state.data.map((d) => (
              <ProjectCard {...d.metadata}>{d.body}</ProjectCard>
            ))}
      </Box>
    );
  }
}

export default function Papers() {
  return (
    <Box>
      <PaperContents src={process.env.PUBLIC_URL + "/papers.md"} />
    </Box>
  );
}
