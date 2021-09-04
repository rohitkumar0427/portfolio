import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import picnew from "./picnew.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    // width: "100%",
    margin: "auto",
    padding: "0 3rem",
    alignItems: "center",
    backgroundImage: `url(${picnew})`,
    backgroundPosition: "right bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#090909",
    fontWeight: "900",
  },
  paddingMobile: {
    padding: "1rem",
  },
  text: {
    fontWeight: "900",
    fontSize: "5rem",
    fontFamily: "Montserrat, sans-serif",
  },
  textSmall: {
    fontWeight: "900",
    fontSize: "1.75rem",
    fontFamily: "Montserrat, sans-serif",
  },
  span: {
    color: "#F9004D",
  },
  full: {
    color: "#9699A4",
  },
  button: {
    backgroundColor: "#F9004D",
    padding: "0.5rem 1rem",
  },
});

export default function Home({isMobile}) {
  const classes = useStyles();

  return (
    <div id="home" className={!isMobile ? classes.root : `${classes.paddingMobile} ${classes.root}`}>
      <Grid md={9} sm={12} lg={7} xs={12}>
        {!isMobile ? (
          <>
            <Typography variant="h5" className={classes.full}>
              Full Stack Web Developer
            </Typography>
            <Typography variant="h2" className={classes.text}>
              Hello, I`m{" "}
              <span className={`${classes.span} ${classes.text}`}>Rohit</span>
              <br />
              Welcome to my World.
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body1" className={classes.full}>
              Full Stack Web Developer
            </Typography>
            <Typography variant="h2" className={classes.textSmall}>
              Hello, I`m{" "}
              <span className={`${classes.span} ${classes.textSmall}`}>
                Rohit
              </span>
              <br />
              Welcome to my World.
            </Typography>
          </>
        )}
        <Button className={classes.button}>Download CV</Button>
      </Grid>
    </div>
  );
}
