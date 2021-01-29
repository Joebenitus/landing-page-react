import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';

import SearchIcon from '@material-ui/icons/Search';

const ColorButton = withStyles(() => ({
  root: {
    color: 'rgb(255, 255, 255)',
    backgroundColor: '#3e2dbd',
    '&:hover': {
      backgroundColor: '#3325a1',
    },
  },
}))(Button);


const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    '& svg': {
      margin: theme.spacing(0.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
}));



export default function TestForm() {
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <ButtonGroup>
          <Grid container alignItems='center'>
            <InputBase id="keywords" placeholder="Keywords"/>
            <Divider orientation='vertical' flexItem/>
            <InputBase id="location" placeholder="Location"/>
          </Grid>
          <ColorButton type="submit" aria-label="search">
            <SearchIcon />
          </ColorButton>
        </ButtonGroup>
      </form>
    </>  

    
  );
}
