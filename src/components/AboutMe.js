import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import portrait from '../assets/images/portrait.JPG';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '30px',
    marginBottom: '300px',
    '& h1': {
      textAlign: 'center',
      fontWeight: '300',
      fontSize: '40px',
      paddingBottom: '50px'
    },
    '& h2': {
      fontWeight: '300',
      paddingBottom: '25px'
    }
  },
  marginHeader: {
    marginBottom: '50px'
  },
  bg: {
    backgroundImage: `url(${portrait})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '400px'
  },
  textHeader: {
    '& h3': {
      fontWeight: '300',
      lineHeight: '2'
    }, 
  },
}))

const AboutMe = () => {

  useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);

  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <h1>About Me</h1>
      <h2 data-aos='fade-right'>My name is Joseph Karnafel.</h2>
      <Grid container spacing={2}>
        <Grid data-aos='fade-right' item xs={12} sm={6}>
          <div className={classes.bg}></div>
        </Grid>
        <Grid data-aos='fade' item className={classes.textHeader} xs={12} sm={6}>
          <h3>I am a former college student with a passion for technology and problem solving. I have always been fascinated with computers and I have known for a long time that my dream career is in tech. I love programming because it is a playground for my analytical mind to run wild.</h3>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutMe;