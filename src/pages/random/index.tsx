import { shuffle } from 'lodash';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from '../../components/head';
import RandomTask, { ActionType } from '../../components/random-task';
import { Task } from '../../services/task';
import taskApi from '../../api/task';
import Loading from '../../components/loading';
import Error from '../../components/random-task/error';
import Header from '../../components/header';

import styles from '../../../styles/Home.module.sass';

const ACTIONS: ActionType[] = ['create', 'download', 'like', 'next', 'report'];

const Random: NextPage = () => {
  const [tasks, setTasks] = useState<Task[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!tasks) {
      fetchTasks();
    }
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const tasks = await taskApi.list();
      setTasks(shuffle(tasks));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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
