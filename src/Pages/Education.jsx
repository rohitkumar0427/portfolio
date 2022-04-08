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
    fontStyle: "oblique",
    fontWeight: "900",
  },
  duration: {
    color: "#8B8E97",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "light",
  },
});

const educationDetails = [
  {
    title: "Full Stack Web Development",
    school: "Masai School",
    duration: "Mar, 2021 - Nov, 2021",
  },
  {
    title: "Bachelor`s - Electronics and Communication Engineering",
    school: "BMS Institute of Technology & Management, Bengaluru",
    duration: "2014-2018",
  },
  {
    title: "Higher Secondary",
    school: "Himalayan Public School",
    duration: "2011-2013",
  },
];

export default function Education() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3}>
      {educationDetails.map((item) => {
        return (
          <Grid item xs={12}>
            <Paper elevation={24} className={classes.paper}>
              <Typography className={classes.name} variant="h5">
                {item.title}
              </Typography>
              <Typography
                variant="h6"
                align="justify"
                color="textPrimary"
                className={classes.text}
              >
                {item.school}
              </Typography>
              <Typography
                variant="body2"
                align="justify"
                className={classes.duration}
                >
                {item.duration}
              </Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}
