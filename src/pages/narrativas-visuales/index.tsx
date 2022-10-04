import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import { Task } from '../../services/task';
import taskApi, { TagType } from '../../api/task';
import Head from '../../components/head';
import Loading from '../../components/loading';
import Error from '../../components/random-task/error';
import RandomTask, { ActionType } from '../../components/random-task';

import styles from '../../../styles/Home.module.sass';

const ACTIONS: ActionType[] = ['download', 'like', 'next'];
const TAG: TagType = 'narrativas-visuales';

const Random: NextPage = () => {
  const [tasks, setTasks] = useState<Task[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    document.querySelector('body')?.classList.add(TAG);

    if (!tasks) {
      fetchTasks();
    }
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const tasks = await taskApi.list(TAG);
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

      <main className={styles.main}>
        <Link href="/">
          <a>
            <h1 className={styles.title}>
              Consignas fotográficas - Narrativas visuales
            </h1>
          </a>
        </Link>

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
