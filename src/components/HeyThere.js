import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';


const useStyles = makeStyles(() => ({
  root: {
    height: '400px',
    marginTop: '30px',
    marginBottom: '300px'
  },
  mainTxt: {
    fontWeight: '300',
    fontSize: '60px',
    textAlign: 'center',
    padding: '100px'
  }
}))

const AboutMe = () => {

  useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);

  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <h1 data-aos='fade-up' className={classes.mainTxt}>Hey there.</h1>
    </Container>
  )
}

export default AboutMe;