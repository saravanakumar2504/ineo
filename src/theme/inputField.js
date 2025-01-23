import { styles } from "./styles";

export const MuiInputBase = {
  styleOverrides: {
    root: {
      backgroundColor: styles.editableFieldBackgroundColor,
      borderRadius: styles.editableFieldBorderRadius,
      padding: "5px",
    },
  },
};
export const MuiTextField = {
  styleOverrides: {
    root: {
      backgroundColor: styles.editableFieldBackgroundColor,
      borderRadius: styles.editableFieldBorderRadius,
    },
  },
};
