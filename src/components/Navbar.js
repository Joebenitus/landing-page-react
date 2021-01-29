import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      fontSize: '16px',
    },
    itemList: {
      fontSize: '14px'
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
  const [visibleState, setVisibleState] = React.useState(null);

  const handleNavigation = (location) => {
    setVisibleState(location);
    console.log(visibleState);
  }
  
  return (
    <div className={classes.root}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item className={classes.title} xs={6}>
          <h1>Joseph Karnafel</h1>
        </Grid>
        <Grid item className={classes.itemList} xs={6}>
          <h2>
            <span className={classes.item} id='projects' onClick={() => handleNavigation('projects')}>Projects</span> | <span className={classes.item} id='skills' onClick={() => handleNavigation('skills')}>Skills</span> | <span className={classes.item} id='education' onClick={() => handleNavigation('education')}>Education</span> | <span className={classes.item} id='experience'>Experience</span> | <span className={classes.item} id='about-me'>About Me</span> 
          </h2>
        </Grid>
      </Grid>
    </div>
  )
}

export default Navbar;
