import type { NextPage } from 'next';
import Button from '../components/button';
import Head from '../components/head';

import styles from '../../styles/Home.module.sass';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <h1 className={styles.title}>Consignas fotográficas!</h1>

        <div className={styles.card}>
          <p>
            Consignas fotográficas es un proyecto colaborativo en donde podés
            obtener una consigna aleatoria que funcione como inspiración o
            disparador de una idea, serie o proyecto fotográfico a desarrollar o
            simplemente como un desbloqueo creativo para sacar la cámara con un
            propósito puntual en mente.
          </p>
          <p>
            También podés crear consignas nuevas que serán incluidas
            automáticamente en nuestra base de datos para que otrxs puedan
            acceder a ellas.
          </p>
          <p>
            Compartilo con amigues, fotógrafos o aficionados que cuantos más
            seamos, más diversas van a ser las consignas que tengamos para
            ofrecerte y más rico se va a volver el proyecto. Bienvenidx!
          </p>
        </div>

        <div className="actions">
          <Button href="/random" type="primary">
            Pedir consigna
          </Button>
          <Button href="/new" type="secondary">
            Crear consigna
          </Button>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
