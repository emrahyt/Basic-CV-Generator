import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import CustomTF from "../../Common/CustomTF";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    paddingBottom: 25,
  },
  gridLeft: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  gridRight: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  workExp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0077b6",
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={7} className={classes.gridLeft}>
        <Typography className={classes.workExp}>WORK EXPERIENCE</Typography>
        <Experience />
        <Experience />
        <Experience />
        <Typography className={classes.workExp}>EDUCATION</Typography>
        <Education />
        <Education />
      </Grid>
      <Grid item xs={5} className={classes.gridRight}>
        <Typography className={classes.workExp}>TECHNICAL SKILLS</Typography>
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Typography className={classes.workExp}>PERSONAL PROJECTS</Typography>
        <CustomTF role='Project' />
        <CustomTF role='Project Desc' />
        <CustomTF role='Project Link' />
        <Typography className={classes.workExp}>LANGUAGE SKILLS</Typography>
        <CustomTF role='Language' />
        <CustomTF role='Proficiency' />
        <CustomTF role='Language' />
        <CustomTF role='Proficiency' />
        <CustomTF role='Language' />
        <CustomTF role='Proficiency' />
        <Typography className={classes.workExp}>TEACHING EXPERIENCE</Typography>
        <CustomTF role ='Experience Header' />
        <CustomTF role ='Experience Role' />
        <CustomTF role ='Date' />
        <Typography style={{
            textAlign: 'left',
            fontStyle: 'italic',
            fontSize: 14,
            fontWeight: 100,
            marginTop: 20
        }}>Achievements/Tasks</Typography>
        <CustomTF role='Experience Details' />
      </Grid>
    </Grid>
  );
};

export default Main;
