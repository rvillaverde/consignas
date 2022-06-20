import type { NextPage } from 'next';
import Head from '../components/head';
import RandomTask from '../components/random-task';

import styles from '../../styles/Home.module.sass';
import Link from 'next/link';

const Random: NextPage = () => (
  <div className={styles.container}>
    <Head />

    <main className={styles.main}>
      <Link href="/">
        <a>
          <h1 className={styles.title}>Consignas fotográficas!</h1>
        </a>
      </Link>

      <RandomTask />
    </main>
  </div>
);

export default Random;
