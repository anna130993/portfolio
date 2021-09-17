import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './Homepage.module.scss';

const Home = () => {
  return (
    <div className={styles.root}>
      <Card className={styles.card}>
        <CardMedia component='img' height='540px' image='/images/storm.jpeg' alt='main pic' />
      </Card>
    </div>
  );
};

export default Home;
