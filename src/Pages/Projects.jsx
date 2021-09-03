import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundColor: "#090909",
  },
});

export default function Projects() {
  const classes = useStyles();

  return <div id="projects" className={classes.root}></div>;
}
