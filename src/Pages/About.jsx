import {
  ButtonGroup,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import picnew from "./images/latest.png";
import { Skills } from "./Skills";
import { useState } from "react";
import Experiance from "./Experiance";
import Education from "./Education";

const useStyles = makeStyles({
  root: {
    height: "maxContent",
    // minHeight: "57vw",
    width: "100%",
    padding: "3rem 3rem",
    backgroundColor: "#191919",
  },
  paddingMobile: {
    padding: "1rem",
  },
  paper: {
    height: "100%",
    minHeight: "600px",
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
    margin: "1rem 0",
    justifyContent: "center",
    width: "100%",
  },
  buttonItem: {
    flexGrow: "1",
    color: "#F9004D",
    fontSize: "1.25rem",
    // textAlign: "center",
    "&:hover": { backgroundColor: "#F9004D", color: "#fff" },
  },
  activeButton: {
    backgroundColor: "#F9004D",
    color: "#fff",
  },
  showSkill: {
    height: "fitContent",
  },
});

export default function About({ isMobile }) {
  const classes = useStyles();
  const [active, setActive] = useState("skill");

  const handleActive = (activeTab) => setActive(activeTab);

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
          <Button
            className={`${classes.buttonItem} ${
              active === "skill" && classes.activeButton
            }`}
            onClick={() => handleActive("skill")}
          >
            Skills
          </Button>
          <Button
            className={`${classes.buttonItem} ${
              active === "experiance" && classes.activeButton
            }`}
            onClick={() => handleActive("experiance")}
          >
            Experiance
          </Button>
          <Button
            className={`${classes.buttonItem} ${
              active === "education" && classes.activeButton
            }`}
            onClick={() => handleActive("education")}
          >
            Education
          </Button>
        </ButtonGroup>
        <Grid container className={classes.showSkill}>
          {active === "skill" ? (
            <Skills />
          ) : (
            <>{active === "experiance" ? <Experiance /> : <Education />}</>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
