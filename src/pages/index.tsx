import type { NextPage } from 'next';
import Head from '../components/head';
import RandomTask from '../components/random-task';

import styles from '../../styles/Home.module.sass';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <h1 className={styles.title}>Consignas fotográficas!</h1>

        <RandomTask />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
