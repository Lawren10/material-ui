import {styled} from "@mui/material/styles";

export const CustomDiv = styled("div")(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  width: "50%",
  height: "10rem",
  animation: "move 2s linear alternate forwards",

  "@keyframes move": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(10rem)",
    },
  },
}));
