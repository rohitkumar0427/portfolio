import { Grid, Typography } from "@material-ui/core";

export default function Footer() {
  return (
    <Grid
      style={{
        display: "flex",
        // height: "10vh",
        padding: "0.5rem 1rem",
        color: "#8B8E97",
        borderTop: "1px solid grey",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Typography>
        Designed and build by Rohit Gupta.<br/> All rights reserved.
      </Typography>
    </Grid>
  );
}
