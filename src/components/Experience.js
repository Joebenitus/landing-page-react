import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import jobsmightImg from '../assets/images/jobsmight.png';
import { makeStyles } from '@material-ui/core/styles';

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
  bgJobsmight: {
    backgroundImage: `url(${jobsmightImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '400px',
    height: '100%'
  },
  textHeader: {
    '& h2': {
      fontWeight: '300',
      paddingBottom: '25px'
    }, 
    '& h3': {
      fontWeight: '300',
      lineHeight: '2'
    },
  },
}))

const Experience = () => {

  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <h1 className={classes.marginHeader}>Experience</h1>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <div className={classes.bgJobsmight}></div>
        </Grid>
        <Grid className={classes.textHeader} item xs={12} sm={8}>
          <h2>JobsMight</h2>
          <h3 className={classes.textBody}>After Epicodus, I interned for a company called JobsMight as a full-stack engineer. At JobsMight, I worked with a large codebase written in the MERN stack (MongoDB, Express.js, React.js, and Node.js). Some of my responsibilities included performing QA testing, performance optimization, authenticating API responses, implementing payment functionality, and building a new landing page. Even though I was unfamiliar with MongoDB and Express.js, I was able to learn and utilize these tools in the first week.</h3>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Experience;