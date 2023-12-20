import image from "../made2auto.jpg";
import AvatarStyles from "../Styles/AvatarStyles";
export default function Avatar() {
  const classes = AvatarStyles();
  return (
    <div className={classes.Avatar}>
      <img src={image} alt="logo"></img>
    </div>
  );
}
