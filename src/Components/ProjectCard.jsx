import {
  Grid,
  Paper,
  Box,
  Typography,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    height: "90%",
    display: "flex",
    padding: "1rem",
    flexDirection: "column",
    marginBottom: "2rem",
    "&:hover": {
      backgroundPosition: "100% 0",
      transition: "backgroundColor 1s ease-in-out",
      backgroundImage:
        "linear-gradient(to bottom, #F9004D, #e7014a, #c70341, #790127)",
      boxShadow: "0 5px 15px rgba(242, 97, 103, .4)",
    },
  },
  des: {
    flexGrow: 1,
    color: "#8B8E97",
    fontWeight: "400",
  },
  title: {
    fontWeight: "900",
    fontFamily: "Montserrat, sans-serif",
    color: "#fff",
  },
  name: {
    color: "#fff",
    fontWeight: "500",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  buttonItem: {
    flexGrow: "1",
    "&:hover": {
      backgroundColor: "#F9004D",
    },
  },
});

export function ProjectCard({ item }) {
  const classes = useStyles();

  const {
    title,
    description1,
    description2,
    description3,
    site,
    image,
    github,
  } = item;

  return (
    <Grid item md={4} sm={6} xs={12}>
      <Paper className={classes.root}>
        <Box>
          <img src={image} alt="logo" srcset="" width="100%" height="200px" />
        </Box>
        <Box className={classes.des}>
          <Typography variant="h5" className={classes.name}>
            {title}
          </Typography>
          <Typography className={classes.des} align="justify">
            {description1}
          </Typography>
          {/* <Typography>{description2}</Typography>
          <Typography className={classes.des}>{description3}</Typography> */}
        </Box>
        <ButtonGroup className={classes.button}>
          <Button
            className={classes.buttonItem}
            onClick={() => window.open(`${site}`)}
          >
            Demo
          </Button>
          <Button
            className={classes.buttonItem}
            onClick={() => window.open(`${github}`)}
          >
            Github
          </Button>
        </ButtonGroup>
      </Paper>
    </Grid>
  );
}
