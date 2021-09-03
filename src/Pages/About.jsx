import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundColor: "#191919",
  },
});

export default function About() {
  const classes = useStyles();

  return <div id="about" className={classes.root}></div>;
}
