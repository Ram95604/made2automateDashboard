import { createUseStyles } from "react-jss";

export default function AvatarStyles() {
  const useStyles = createUseStyles({
    Avatar: {
      width: "50px",
      height: "80px",

      "& img": {
        width: "90px",
        borderRadius: "0px",
        marginRight:"90px"
      },
    },
  });

  const classes = useStyles();
  return classes;
}
