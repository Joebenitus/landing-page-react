import React from 'react';
import Container from '@material-ui/core/Container';
import useCurrentLocation from './../hooks/useCurrentLocation'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import portrait from './../portrait.JPG';

const useStyles = makeStyles(() => ({
  bg: {
    backgroundImage: `url(${portrait})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    height: '50vh'
  },
  textHeader: {
    fontSize: '16px'
  },
  textBody: {
    fontSize: '16px',
    lineHeight: '2'
  }
}))

const HeyThere = () => {

  const classes = useStyles()

  return (
    <Container>
    <h1>Hey there.</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className={classes.bg}></div>
        </Grid>
        <Grid item className={classes.textHeader} xs={12} sm={6}>
          <h2>My name is Joseph Karnafel.</h2>
          <h3 className={classes.textBody}>I am an ex-college student with a passion for technology and problem solving. I have always been fascinated with computers and I have known for a long time that my dream career is in tech. I love programming because it is a playground for my analytical mind to run wild.</h3>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HeyThere;