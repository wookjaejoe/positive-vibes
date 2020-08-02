import React from "react";
import ReactMarkdown from "react-markdown";
import Yaml from "js-yaml";
import path from "path";
import { Box } from "@material-ui/core";

const SECTION_DIVIDER = "-----";
const METADATA_WRAPPER = "---";

export class MdymlData {
  constructor(props) {
    this.metadata = props.metadata;
    this.body = props.body;
  }
}

export function parseMdyml(text) {
  return parseList(text);
}

export function parseList(text) {
  return text.split(SECTION_DIVIDER).map((section) => parseItem(section));
}

const renderers = {
  image: (props) => {
    let style = null;
    if (props.alt === "<") {
      style = {
        width: "50%",
        float: "left",
      };
    } else if (props.alt === ">") {
      style = {
        width: "50%",
        float: "right",
      };
    } else {
      style = { width: "100%" };
    }

    return (
      <Box mr={5}>
        <img
          alt={props.alt}
          src={path.resolve(process.env.PUBLIC_URL, props.src)}
          style={style}
        />
      </Box>
    );
  },
};

export function parseItem(text) {
  // split by line
  const lines = text.split(/\r?\n/);

  // line index of header start
  let hs = 0;

  // line index of header end
  let he = 0;

  // count for identifing header and body in all lines of text
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === METADATA_WRAPPER) {
      if (count === 0) {
        // the first divider of the text
        hs = i + 1;
      } else if (count === 1) {
        // the secondary divider of the text
        he = i;
      } else {
        // ignore the more of the divider
        break;
      }

      count++;
    }
  }

  // join lines for body
  const bodyText = lines.slice(he + 1, lines.length).join("\n");
  return new MdymlData({
    metadata: Yaml.load(lines.slice(hs, he).join("\n")),
    body: <ReactMarkdown source={bodyText} renderers={renderers} />,
  });
}
