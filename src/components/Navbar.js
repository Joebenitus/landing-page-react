import React from 'react';
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
  const location = useCurrentLocation(null)
  
  return (
    <Container>
    <div className={classes.root}>
      <Grid container direction='row' justify='space-evenly' alignItems='center'>
        <Grid item className={classes.title} xs={6}>
          <h1 className={classes.title}>Joseph Karnafel</h1>
        </Grid>
        <Grid item className={classes.itemList} xs={6}>
          <h2>
            <span className={classes.item} id='projects'>Projects</span> | <span className={classes.item} id='skills'>Skills</span> | <span className={classes.item} id='education'>Education</span> | <span className={classes.item} id='experience'>Experience</span> | <span className={classes.item} id='about-me'>About Me</span> 
          </h2>
        </Grid>
      </Grid>
    </div>
    </Container>
  )
}

export default Navbar;
