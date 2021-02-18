import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import epicodusImg from './../epicodus.png';
import ttuImg from './../ttu.png';
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
  bgEpicodus: {
    backgroundImage: `url(${epicodusImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
  },
  bgTech: {
    backgroundImage: `url(${ttuImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '200px, 300px',
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

const Education = () => {

  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <h1 className={classes.marginHeader}>Education</h1>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <div className={classes.bgEpicodus}></div>
        </Grid>
        <Grid className={classes.textHeader} item xs={12} sm={8}>
          <h2>Epicodus</h2>
          <h3 className={classes.textBody}>I attended the August 2020 cohort at Epicodus. Epicodus is a 6 month full-stack web development boot camp. At Epicodus, I have learned several necessary skills to be successful in the tech field. My schedule consisted of 8 hours of pair programming every week day. Other than learning strong collaborative and interpersonal skills, I learned how to create a full stack web application using various tools such as Ruby on Rails, React with Redux, and PostgreSQL.</h3>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.bgTech}></div>
        </Grid>
        <Grid className={classes.textHeader} item xs={12} sm={8}>
          <h2>Texas Tech University</h2>
          <h3 className={classes.textBody}>After high school, I pursued a degree in computer science at Texas Tech University. At Texas Tech, I learned a lot of valuable computer science concepts such as hardware and algorithms. Additionally, I learned how to program using Python and C programming languages. My time at Texas Tech was incredibly important because even though I did not obtain my degree, it gave me a great foundation and led me to persue a more accelerated and focused education.</h3>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Education;