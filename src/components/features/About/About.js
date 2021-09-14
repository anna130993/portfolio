import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './About.module.scss';

const About = () => (
  <section className={styles.root}>
    <Typography variant='h4' align='center' paragraph className={styles.text}>
      <h1>About me</h1>
    </Typography>
    <Typography align='center' paragraph>
      sdfsdfsdfsdfserfs
    </Typography>
  </section>
);

export default About;
