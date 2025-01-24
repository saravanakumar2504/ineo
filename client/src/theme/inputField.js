import { styles } from "./styles";

export const MuiInputBase = {
  styleOverrides: {
    root: {
      backgroundColor: styles.editableFieldBackgroundColor,
      borderRadius: styles.editableFieldBorderRadius,
      // padding: "5px",
      height:"50px"
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
