import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { TagType } from '../../../api/task';
import Footer from '../../../components/footer';
import Head from '../../../components/head';
import Header, { Menu } from '../../../components/header';
import Loading from '../../../components/loading';
import Error from '../../../components/random-task/error';
import RandomTask, { ActionType } from '../../../components/random-task';
import useTasks from '../../../components/hooks/useTasks';

import styles from '../../../../styles/Home.module.sass';

const ACTIONS: ActionType[] = ['download', 'like', 'next'];
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
  const { error, loading, tasks } = useTasks(TAG);

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
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : tasks ? (
          <RandomTask actions={ACTIONS} tasks={tasks} />
        ) : null}
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
