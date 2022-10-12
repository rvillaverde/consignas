import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { TagType } from '../../api/task';
import Footer from '../../components/footer';
import Head from '../../components/head';
import Header, { Menu } from '../../components/header';

import styles from '../../../styles/Home.module.sass';
import Card from '../../components/card';

const TAG: TagType = 'narrativas-visuales';

const MENU: Menu = {
  items: [
    {
      external: true,
      href: 'https://www.santa-talleres.com/narrativas-visuales',
      id: 'sobre-el-taller',
      label: 'Sobre el Taller',
    },
  ],
};

const Random: NextPage = () => {
  useEffect(() => {
    document.querySelector('body')?.classList.add(TAG);
  }, []);

  return (
    <div className={styles.container}>
      <Head />
      <Header
        href={`/${TAG}`}
        menu={MENU}
        title="Consignas fotográficas - Narrativas visuales"
      />

      <main className={styles.main}>
        <Card
          actions={[
            {
              href: `/${TAG}/random`,
              label: 'Pedir consigna',
              type: 'primary',
            },
          ]}
          topImage={`/${TAG}/03.jpg`}
          type="large"
        >
          <p>
            Narrativas visuales es un método de exploración y entrenamiento
            visual a través de la práctica fotográfica. Un taller para
            investigar otros modos de mirar a través del desarrollo de consignas
            tomadas al azar del mazo de desafíos fotográficos. Se trata de 90
            consignas pensadas para abordar la práctica fotográfica desde
            diferentes puntos vinculados, no sólo a la práctica en sí, sino con
            la escritura, el video, la revisión de archivo, el diálogo con otros
            universos visuales, la investigación y la visualización de
            referentes clásicos y contemporáneos. La consigna es una punta de
            lanza que luego les participantes re-elaboran. Un disparador que nos
            sumerge en un nuevo mundo que inevitablemente implica otros modos de
            ver, buscando así activar el goce y el placer que nos brinda esta
            herramienta de expresión tan poderosa, la fotografía.
            <br />
            <br />
            Narrativas es un espacio para deambular, flotar, sumergirnos en las
            profundidades de la práctica acompañadas de un grupo que siempre
            termina siendo una red a donde podemos caer tranquilxs, sabiéndonos
            sostenidxs. Nos frustra y esa frustración es abono, nos allana el
            camino volviéndolo fértil para volver a empezar y ver crecer algo.
            Narrativas invita a la escritura sin imponerla, aunque siempre algo
            sale, es mágico. Narrativas también es revisarnos, iluminar nuestras
            resistencias, las expectativas y los espejos, y a partir de ahí
            encontrar calma aunque también quizás, en esa calma, podamos
            prendernos fuego.
          </p>
        </Card>
      </main>

      <Footer>
        <span>
          Oráculo de consignas desarrollado colaborativamente por{' '}
          <Link href="https://www.instagram.com/ruminga/">
            <a target="_blank">ruminga</a>
          </Link>{' '}
          y{' '}
          <Link href="https://www.santa-talleres.com/" target="_blank">
            <a target="_blank">Santa Talleres</a>
          </Link>
          .
        </span>
      </Footer>
    </div>
  );
};

export default Random;
