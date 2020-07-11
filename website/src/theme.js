import { createMuiTheme } from "@material-ui/core/styles";

let isDark = true;
const DEFAULT_BGCOLOR_DARK = "#1e1e21";

export const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    fontFamily: "monaco, Consolas, Roboto, Helvetica, Arial, sans-serif",
  },
  palette: {
    type: isDark ? "dark" : null,
    background : {
      default : isDark ? DEFAULT_BGCOLOR_DARK : null,
      paper: isDark ? DEFAULT_BGCOLOR_DARK : null
    },
    primary: {
      main: "#2979ff"
    },
    secondary: {
      main: "#14a37f"
    }
  },
});
