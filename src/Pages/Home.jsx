import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundColor: "#090909",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div id="home" style={{ marginTop: "4rem" }} className={classes.root}></div>
  );
}
