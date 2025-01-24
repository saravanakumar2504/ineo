import { createTheme } from "@mui/material";
import { MuiButton } from "./button";
import { MuiInputBase, MuiTextField } from "./inputField";
import { MuiTypography } from "./typography";

const defaultThemeStyles = {
  editableFieldBackgroundColor: "#c0dce4",
  editableFieldBorderRadius: "8px",
  btnBackgroundColor: "#302c64",
  btnBorderRadius: "8px",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: defaultThemeStyles.btnBackgroundColor,
    },
  },
  components: {
    MuiButton,
    MuiInputBase,
    MuiTextField,
    MuiTypography,
  },
});
