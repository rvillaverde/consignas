import type { NextPage } from 'next';
import Head from '../components/head';
import RandomTask from '../components/random-task';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Task } from '../services/task';
import taskApi from '../api/task';
import Loading from '../components/loading';
import Error from '../components/random-task/error';

import styles from '../../styles/Home.module.sass';
import { shuffle } from 'lodash';

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

      <main className={styles.main}>
        <Link href="/">
          <a>
            <h1 className={styles.title}>Consignas fotográficas!</h1>
          </a>
        </Link>

        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : tasks ? (
          <RandomTask tasks={tasks} />
        ) : null}
      </main>
    </div>
  );
};

export default Random;
