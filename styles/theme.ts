import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#83C5BE",
    },
    secondary: {
      main: "#E5D352",
    },
    error: {
      main: "#AB3428",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
