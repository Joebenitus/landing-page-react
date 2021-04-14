import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '300px',
    '& h1': {
      textAlign: 'center',
      fontWeight: '300',
      fontSize: '40px',
      paddingBottom: '50px'
    },
  },
  marginHeader: {
    marginBottom: '50px'
  },
  skills: {
    textAlign: 'center',
    '& h3': {
      fontWeight: '300',
      fontSize: '25px'
    }
  }
}))

const Skills = () => {

  useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);

  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <h1 data-aos='fade-down'>Skills</h1>

      <Grid container justify='center' alignItems='center' spacing={2}>
        <Grid item container data-aos='fade-up'>
          <Grid className={classes.skills} item xs={12} sm={3}>
            <h3>JavaScript</h3>
          </Grid>
          <Grid className={classes.skills} item xs={12} sm={3}>
            <h3>React/Redux</h3>
          </Grid>
          <Grid className={classes.skills} item xs={12} sm={3}>
            <h3>Ruby on Rails</h3>
          </Grid>
          <Grid className={classes.skills} item xs={12} sm={3}>
            <h3>REST APIs</h3>
          </Grid>
        </Grid>

        <Grid item container data-aos='fade-up'>
          <Grid className={classes.skills} item xs={12} sm={3}>
            <h3>HTML</h3>
          </Grid>
          <Grid className={classes.skills} item xs={12} sm={3}>
            <h3>Node.js</h3>
          </Grid>
          <Grid className={classes.skills} item xs={12} sm={3}>
            <h3>Test Driven Development</h3>
          </Grid>
          <Grid className={classes.skills} item xs={12} sm={3}>
            <h3>PostgreSQL</h3>
          </Grid>
        </Grid>

        <Grid item container data-aos='fade-up'>
          <Grid className={classes.skills} item xs={12} sm={3}>
            <h3>Pair Programming</h3>
          </Grid>
          <Grid className={classes.skills} item xs={12} sm={3}>
            <h3>Curious</h3>
          </Grid>
          <Grid className={classes.skills} item xs={12} sm={3}>
            <h3>Fast Learner</h3>
          </Grid>
          <Grid className={classes.skills} item xs={12} sm={3}>
            <h3>Communication Skills</h3>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Skills;