import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";
import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
