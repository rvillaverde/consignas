import type { NextPage } from 'next';
import Head from '../../components/head';
import RandomTask, { ActionType } from '../../components/random-task';
import Loading from '../../components/loading';
import Error from '../../components/random-task/error';
import Header from '../../components/header';
import useTasks from '../../components/hooks/useTasks';

import styles from '../../../styles/Home.module.sass';

const ACTIONS: ActionType[] = ['create', 'download', 'like', 'next', 'report'];

const Random: NextPage = () => {
  const { error, loading, tasks } = useTasks();

  return (
    <div className={styles.container}>
      <Head />
      <Header href="/" title="Consignas fotográficas" />

      <main className={styles.main}>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : tasks ? (
          <RandomTask actions={ACTIONS} tasks={tasks} />
        ) : null}
      </main>
    </div>
  );
};

export default Random;
