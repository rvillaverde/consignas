import type { NextPage } from 'next';
import { useEffect } from 'react';
import { TagType } from '../../../api/task';
import FooterNarrativasVisuales from '../../../components/footer/narrativas-visuales';
import Head from '../../../components/head';
import Header, { Menu } from '../../../components/header';
import useTasks from '../../../components/hooks/useTasks';
import Loading from '../../../components/loading';
import Error from '../../../components/random-task/error';
import RandomTask, { ActionType } from '../../../components/random-task';

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

      <FooterNarrativasVisuales />
    </div>
  );
};

export default Random;
