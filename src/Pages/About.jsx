import {
  ButtonGroup,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import picnew from "./latest.png";
import express from "./expressjs.png";
import { Skills } from "./Skills";

const useStyles = makeStyles({
  root: {
    height: "maxContent",
    width: "100%",
    padding: "3rem 3rem",
    backgroundColor: "#191919",
  },
  paddingMobile: {
    padding: "1rem",
  },
  paper: {
    height: "100%",
    backgroundImage: `url(${picnew})`,
    backgroundPosition: "top",
    filter: `grayscale(50%)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#191919",
    marginRight: "1rem",
  },
  aboutme: {
    fontWeight: "900",
    fontFamily: "Montserrat, sans-serif",
  },
  text: {
    color: "#8B8E97",
    fontFamily: "Poppins, sans-serif",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  buttonItem: {
    flexGrow: "1",
    color: "#F9004D",
    fontSize: "1.5rem",
    // textAlign: "center",
    "&:hover": {
      backgroundColor: "#F9004D",
      color: "#fff",
    },
  },
});

const techStack = [
  {
    name: "React",
    tech: "frontend",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
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
    image: "https://material-ui.com/static/logo_raw.svg",
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
    image:
      "https://webimages.mongodb.com/_com_assets/cms/mongodb_atlas-h0ai1yctwo.svg?auto=format%2Ccompress&ch=DPR",
  },
  {
    name: "JavaScript",
    tech: "language",
    image:
      "https://www.javascript.com/etc/clientlibs/pluralsight/main/images/js-logo.png",
  },
];

export default function About({ isMobile }) {
  const classes = useStyles();

  return (
    <Grid
      container
      id="about"
      className={
        !isMobile ? classes.root : `${classes.root} ${classes.paddingMobile}`
      }
      spacing={0}
    >
      <Grid item xs={0} sm={4} md={4} ls={4}>
        <Paper className={classes.paper} elevation={12}></Paper>
      </Grid>
      <Grid item xs={12} sm={8} md={8} ls={4}>
        <Typography variant="h2" className={classes.aboutme}>
          About Me
        </Typography>
        <Typography variant="h6" align="justify" className={classes.text}>
          Hi, I'm a curious and enthusiastic full-stack web developer with a
          good foundation in following libraries, frameworks and tools. I'd like
          to work in a team and keep on learning new things throughout my life.
          With this, I intend to work and solve problems for the betterment of
          society, an organization and myself.
        </Typography>
        <ButtonGroup className={classes.button}>
          <Button className={classes.buttonItem}>Skills</Button>
          {/* <Button className={classes.buttonItem}>Experiance</Button>
          <Button className={classes.buttonItem}>Education</Button> */}
        </ButtonGroup>
        <Grid container>
          <Skills />
        </Grid>
      </Grid>
    </Grid>
  );
}
