import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import express from "./images/expressjs.png";
import mongoDB from "./images/mongoDB.png";
import react from "./images/logo512.png";
import js from "./images/js.png";

const techStack = [
  {
    name: "React",
    tech: "frontend",
    image: `${react}`,
  },
  {
    name: "HTML",
    tech: "frontend",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    tech: "frontend",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png",
  },
  {
    name: "Redux",
    tech: "frontend",
    image: "https://redux.js.org/img/redux.svg",
  },
  {
    name: "Material UI",
    tech: "frontend",
    image: "https://mui.com/static/logo.png",
  },
  {
    name: "Node.js",
    tech: "backend",
    image: "https://nodejs.org/static/images/logo.svg",
  },
  {
    name: "Express.js",
    tech: "backend",
    image: `${express}`,
  },
  {
    name: "MongoDB",
    tech: "backend",
    image: `${mongoDB}`,
  },
  {
    name: "JavaScript",
    tech: "language",
    image: `${js}`,
  },
];

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
  picIcons: {
    display: "flex",
    alignItems: "center",
    // width: "maxwidth",
    margin: "auto",
  },
});

function TechIcon({ item }) {
  const classes = useStyles();
  const { name, image } = item;
  return (
    <Grid item md={2.5} textAlign="center" >
      <img
        src={`${image}`}
        alt={`${name} icon`}
        className={classes.picIcons}
        height="50px"
      />
      <Typography>{name}</Typography>
    </Grid>
  );
}

export function Skills() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={24} className={classes.paper}>
          <Typography className={classes.name} variant="h5">
            Frontend
          </Typography>
          <Grid container spacing={6}>
            {techStack
              .filter((item) => item.tech === "frontend")
              .map((item) => (
                <TechIcon item={item} />
              ))}
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper elevation={24} className={classes.paper}>
          <Typography className={classes.name} variant="h5">
            Backend
          </Typography>
          <Grid container spacing={6}>
            {techStack
              .filter((item) => item.tech === "backend")
              .map((item) => (
                <TechIcon item={item} />
              ))}
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper elevation={24} className={classes.paper}>
          <Typography className={classes.name} variant="h5">
            Languages
          </Typography>
          <Grid container spacing={6}>
            {techStack
              .filter((item) => item.tech === "language")
              .map((item) => (
                <TechIcon item={item} />
              ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
