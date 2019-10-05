import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      background: {
        default: "#121212"
      }
    },
    props: {
      MuiTextField: {
        variant: "outlined"
      },
      MuiButtonBase: {
        disableRipple: true
      },
      MuiStepButton: {
        style: {
          textAlign: "left"
        }
      },
      MuiTab: {
        style: {
          minWidth: "135px"
        }
      }
    },
    typography: {
      fontFamily:
        "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      h5: {
        fontWeight: 700
      },
      h6: {
        fontWeight: 700
      }
    }
  })
);

export default theme;
