import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import hellabyteImg from '../assets/images/hellabyte.png';
import poserbotImg from '../assets/images/poserbot.png';
import minecraftImg from '../assets/images/minecraftshop.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

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
  hellabyteImg: {
    backgroundImage: `url(${hellabyteImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%'
  },
  poserbotImg: {
    backgroundImage: `url(${poserbotImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%'
  },
  minecraftImg: {
    backgroundImage: `url(${minecraftImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
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
  textBody: {
    fontSize: '16px',
    lineHeight: '2'
  }
}))

const Projects = () => {

  useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);

  const classes = useStyles()

  return (
    <Container className={classes.root}>
    <h1 data-aos='fade-down' className={classes.marginHeader}>Projects</h1>
      <Grid container spacing={5}>
        <Grid data-aos='fade-right' item xs={12} sm={4}>
          <div className={classes.hellabyteImg}></div>
        </Grid>
        <Grid data-aos='fade-right' item className={classes.textHeader} xs={12} sm={8}>
          <h2>Hellabyte</h2>
          <h3 className={classes.textBody}>Hellabyte is a clicker game in which the goal is to collect as many bytes of data as possible. The game begins with the user accumulating 1 byte of data every time they click the 'download bytes' button. Bytes can be used as currency to purchase upgrades which increase your production speed. This happens either via upgrading how many bytes you recieve per click (Click Upgrades), or by purchasing auto-miners which grant X amount of bytes per second automatically (Auto Upgrades). After purchasing several upgrades, the user may accumulate absurd amounts of bytes up to an absolute max of 1 Hellabyte (1,024<sup>24</sup> bytes). Hellabyte was made using React and Redux.</h3>
        </Grid>

        <Grid data-aos='fade-left' item className={classes.textHeader} xs={12} sm={8}>
          <h2>Poserbot</h2>
          <h3 className={classes.textBody}>Poserbot is a ruby gem that generates random sentences for your databases or your own amusement. Poserbot uses libraries of various nouns, adjectives, and verbs to populate several different potential sentence templates. This project was also an opportunity to learn how to publish Ruby Gems. Since being published, Poserbot has amassed over 700 downloads! This project was made during Epicodus Team Week. My team included Adam Mansell, Alex Goodwin, and Ophelia Swen.</h3>
        </Grid>
        <Grid data-aos='fade-left' item xs={12} sm={4}>
          <div className={classes.poserbotImg}></div>
        </Grid>
        <Grid data-aos='fade-right' item xs={12} sm={4}>
          <div className={classes.minecraftImg}></div>
        </Grid>
        <Grid data-aos='fade-right' item className={classes.textHeader} xs={12} sm={8}>
          <h2>Minecraft Shop</h2>
          <h3 className={classes.textBody}>A Rails application which allows the user to create product listings and reviews for those products. Full CRUD functionality is included with both classes (Product and Review). A product can have many reviews (one-to-many relationship). This project was made using Ruby on Rails with a PostgreSQL database.</h3>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Projects;