import type { NextPage } from 'next';
import Head from '../components/head';
import RandomTask from '../components/random-task';

import styles from '../../styles/Home.module.sass';

const Random: NextPage = () => {
  console.log('Random');
  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <h1 className={styles.title}>Consignas fotográficas!</h1>

        <RandomTask />
      </main>
    </div>
  );
};

export default Random;
