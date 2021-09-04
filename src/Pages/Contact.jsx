import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    background: {
      paper: "#191919",
      default: "#191919",
    },
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#rgb(249,0,77)",
      contrastText: "#fff",
    },
    action: {
      active: "#fff",
      hover: "rgba(249,0,77, 0.08)",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "maxContent",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    padding: theme.spacing(20, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  contactme: {
    fontWeight: "900",
    paddingBottom: "5rem",
  },
  text: {
    color: "#8B8E97",
    fontFamily: "Poppins, sans-serif",
    padding: "1rem",
  },
  contactIcon: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  i: {
    fontSize: "3rem",
    margin: "1rem 1rem",
    color: "#fff",
    transition: "transform 0.5s",
    "&:hover": {
      transform: "scale(1.5)",
    },
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className={classes.root} id="contact">
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Paper className={classes.paper}>
            <Typography
              variant="h3"
              align="center"
              className={classes.contactme}
            >
              Contact Me
            </Typography>
            <Typography align="center" className={classes.text}>
              Let`s get in touch and build something together!
            </Typography>
            <Grid className={classes.contactIcon}>
              <a
                href="tel:9686569737"
                aria-label="GitHub"
                rel="noreferrer"
                target="_blank"
              >
                <i className={`fas fa-phone-alt ${classes.i}`} />
              </a>
              <a
                href="mailto: rohitkumar0427@gmail.com"
                aria-label="email"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`far fa-envelope ${classes.i}`}></i>
              </a>
              <a
                href="https://twitter.com/imrkg2"
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fab fa-twitter ${classes.i}`}></i>
              </a>
              <a
                href="https://github.com/rohitkumar0427"
                aria-label="GitHub"
                rel="noreferrer"
                target="_blank"
              >
                <i className={`fab fa-github ${classes.i}`} />
              </a>

              <a
                href="https://www.linkedin.com/in/rkg1995/"
                aria-label="Linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fab fa-linkedin-in ${classes.i}`} />
              </a>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={false} sm={4} md={6} className={classes.image} />
      </Grid>
    </ThemeProvider>
  );
}
