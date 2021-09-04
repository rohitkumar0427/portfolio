import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
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
    height: "100vh",
    // alignItems: "center",
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
  },
  text: {
    color: "#8B8E97",
    fontFamily: "Poppins, sans-serif",
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className={classes.root} id="contact">
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography
              variant="h3"
              align="center"
              className={classes.contactme}
            >
              Get in Touch
            </Typography>
            <Typography align="center" className={classes.text}>
              I'm currently actively looking for any new opportunities, in
              full-stack web development. If you are an employer looking for a
              dedicated web developer, HIRE me before someone else does.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={6} className={classes.image} />
      </Grid>
    </ThemeProvider>
  );
}


{
  /* <form
              className={classes.form}
              noValidate
              // onSubmit={(e) => e.preventDefault()}
            >
              <TextField
                variant="outlined"
                className={classes.textfield}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your Name"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                className={classes.textfield}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Your email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                className={classes.textfield}
                margin="normal"
                fullWidth
                name="subject"
                label="Write a subject"
                id="subject"
              />
              <TextField
                variant="outlined"
                className={classes.textfield}
                margin="normal"
                multiline={true}
                fullWidth
                name="message"
                label="Your Message"
                id="message"
                minRows={5}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Submit
              </Button>
            </form> */
}