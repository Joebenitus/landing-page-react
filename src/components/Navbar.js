import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import useCurrentLocation from './../hooks/useCurrentLocation';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      fontWeight: '300'
    },
    itemList: {
      fontSize: '14px',
      '& h2': {
        fontWeight: '300'
      }
    },
    item: {
      padding: '2px',
      height: '100%',
      width: 'auto',
      color: 'white',
      transition: theme.transitions.create(['background-color', 'color', 'transformScale'], {
        duration: theme.transitions.duration.standard
      }),
      '&:hover': {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(0, 0, 0)',
        cursor: 'pointer',
      },
      '&:active': {
        color: 'rgb(255, 255, 255)'
      }
    }
  }));

const Navbar = () => {

  const classes = useStyles();
  const [location, setLocation] = useState(null)
  
  return (
    <Container>
      <div className={classes.root}>
        <Grid container direction='row' justify='space-evenly' alignItems='center'>
          <Grid item className={classes.title} xs={6}>
            <h1 className={classes.title}>Joseph Karnafel</h1>
          </Grid>
          <Grid item className={classes.itemList} xs={6}>
            <h2>
              <span className={classes.item} id='about-me' onClick={() => setLocation(1)}>About Me</span> | <span className={classes.item} id='projects' onClick={() => setLocation(2)}>Projects</span> | <span className={classes.item} id='skills' onClick={() => setLocation(3)}>Skills</span> | <span className={classes.item} id='education' onClick={() => setLocation(4)}>Education</span> | <span className={classes.item} id='experience' onClick={() => setLocation(5)}>Experience</span>  
            </h2>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Navbar;
