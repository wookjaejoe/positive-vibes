import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontSize: 13,
    fontFamily: "monaco, Consolas, Roboto, Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "1.5rem"
    },
    h2: {
      fontSize: "1.4rem"
    },
    h3: {
      fontSize: "1.3rem"
    },
    h4: {
      fontSize: "1.2rem"
    },
    h5: {
      fontSize: "1.1rem"
    },
    h6: {
      fontSize: "1rem"
    },
    
  },
  palette: {
    type: "dark",
    // primary: {
    //   main: "#1a237e"
    // },
    // secondary: {
    //   main:"#f44336"
    // },
    // background: {
    // },
  },
});
