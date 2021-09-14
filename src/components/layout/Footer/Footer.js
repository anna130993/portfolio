import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.root}>
      <footer className={styles.footer}>
        <Grid container>
          <Grid item xs={12} sm={4} className={styles.single}>
            <Typography variant='h6' className={styles.text}>Shortcuts</Typography>
            <Box className={styles.text}>
              <Link color='inherit' component={RouterLink} to='/about-me'>About</Link>
            </Box>
            <Box className={styles.text}>
              <Link color='inherit' component={RouterLink} to='/projects'>Projects</Link>
            </Box>
            <Box className={styles.text}>
              <Link color='inherit' component={RouterLink} to='/contact'>Contact</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.single}>
            <Box className={styles.copyright}>
              <Typography variant='body2' color='inherit' className={styles.text}>
                <Link color='inherit' href='/'>
                Anna Podsiadło
                </Link> {'  '}
                {new Date().getFullYear()}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.single}>
            <Typography variant='h6' className={styles.text}>Find me on:</Typography>
            <Button className={styles.btn} href='https://www.linkedin.com/in/anna-podsiad%C5%82o-b09768218/'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Button>
            <Button className={styles.btn} href='https://github.com/anna130993'>
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};

export default Footer;
