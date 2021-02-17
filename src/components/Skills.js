import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '300px',
    marginBottom: '300px'
  },
  marginHeader: {
    marginBottom: '50px'
  },
  skills: {
    textAlign: 'center'
  }
}))

const Skills = () => {

  const classes = useStyles()

  return (
    <Container className={classes.root}>
    <h1 className={classes.marginHeader}>Skills</h1>
      <Grid container justify='center' alignItems='center' spacing={2}>
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
    </Container>
  )
}

export default Skills;