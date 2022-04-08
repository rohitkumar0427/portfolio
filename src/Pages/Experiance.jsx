import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  iconBox: {
    width: "4rem",
    height: "4rem",
  },
  name: {
    color: "#fff",
    fontWeight: "500",
  },
  paper: {
    padding: "1rem",
    "&:hover": {
      backgroundPosition: "100% 0",
      transition: "backgroundColor 1s ease-in-out",
      backgroundImage:
        "linear-gradient(to right, #F9004D, #e7014a, #c70341, #790127)",
      boxShadow: "0 5px 15px rgba(242, 97, 103, .4)",
    },
  },
  text: {
    color: "#8B8E97",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "900",
    fontStyle: "oblique",
  },
  duration: {
    color: "#8B8E97",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "light",
  },
});

const experiance = [
  {
    title: "SDE 1 Frontend",
    company: "Junglee Games",
    duration: "Dec,2021 - Present",
  },
  {
    title: "Software Engineer",
    company: "KPIT Technologies",
    duration: "Aug,2018 - Oct,2020",
  },
];

export default function Experiance() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={3}>
      {experiance.map((item) => {
        return (
          <Grid item xs={12}>
            <Paper elevation={24} className={classes.paper}>
              <Typography className={classes.name} variant="h5">
                {item.title}
              </Typography>
              <Typography variant="h6" align="justify" className={classes.text}>
                {item.company}
              </Typography>
              <Typography variant="body2" align="justify" className={classes.duration}>
                {item.duration}
              </Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}
