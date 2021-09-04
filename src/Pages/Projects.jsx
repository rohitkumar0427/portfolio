import { Grid, makeStyles, Typography } from "@material-ui/core";
import { ProjectCard } from "../Components/ProjectCard";
import hotels from "./images/hotels.png";

const useStyles = makeStyles({
  root: {
    height: "maxContent",
    padding: "3rem",
    backgroundColor: "#090909",
  },
  paddingMobile: {
    height: "maxContent",
    padding: "1rem",
  },
  aboutme: {
    fontWeight: "900",
    fontFamily: "Montserrat, sans-serif",
    marginBottom: "1rem",
  },
});

export default function Projects({ isMobile }) {
  const classes = useStyles();

  const projectDetails = [
    {
      title: "Pluralsight Clone",
      video: "https://youtu.be/RNF_sg1ktqg",
      description1:
        "Pluralsight, Inc. is an American privately held online education company that offers a variety of video training courses for software developers. In this app user can search for courses to upgrade his skills, take notes and watch videos online.",
      description3: "Done in collaboration with 2 members, In under 3 weeks.",
      site: "https://rohitkumar0427.github.io/pluralWebsite/",
      github: "https://github.com/rohitkumar0427/pluralWebsite",
      tech: ["HTML", "CSS", "JavaScript"],
      image:
        "https://www.pngmagic.com/product_images/pluralsight-logo-png-vector-file-free-download.png",
    },
    {
      title: "MonsterIndia Clone",
      video: "https://www.youtube.com/embed/RNF_sg1ktqg",
      description1:
        "MonsterIndia is an online job portal that allows candidates to search jobs. In this app, user can search for jobs based on city, categorizing them with rating and applying for the job",
      description3: "Done in collaboration with 3 members, In under 1 weeks.",
      site: "https://monsterindia.netlify.app/",
      github: "https://github.com/pallav1998/Monster_Project",
      tech: ["React", "Material UI", "JavaScript"],
      image:
        "https://media.monsterindia.com/trex/public/default/images/monster-logo.svg",
    },
    {
      title: "Hotels.com Clone",
      video: "https://www.youtube.com/embed/1dd-RBOU8KA",
      description1:
        " Hotels.com is a website for booking hotel rooms online and by telephone. In this app, user can search for hotels based on city, categorizing them with rating.",
      description3: "Done in collaboration with 3 members, In under 1 weeks.",
      site: "https://hotelsclone.netlify.app/",
      tech: ["React", "Redux", "Material UI"],
      github: "https://github.com/abhishekmah/Project-Hotels.com",
      image: `${hotels}`,
    },
  ];

  return (
    <div
      id="projects"
      className={
        !isMobile ? classes.root : `${classes.root} ${classes.paddingMobile}`
      }
    >
      <Typography variant="h2" className={classes.aboutme} align="center">
        Projects
      </Typography>
      <Grid container spacing="6">
        {projectDetails.map((item) => {
          return <ProjectCard item={item} />;
        })}
      </Grid>
    </div>
  );
}
