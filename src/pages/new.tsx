import type { NextPage } from 'next';
import { useState } from 'react';
import taskApi from '../api/task';
import Head from '../components/head';
import TaskComponent from '../components/task';
import { Task } from '../services/task';

import styles from '../../styles/Home.module.sass';
import Success from '../components/new-task/success';
import Error from '../components/new-task/error';

const Home: NextPage = () => {
  const [saving, setSaving] = useState<boolean>(false);
  const [created, setCreated] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSave = async (description: Task['description']) => {
    setSaving(true);
    try {
      await taskApi.create(description);
      setSaving(false);
      setCreated(true);
    } catch (e) {
      setSaving(false);
      setError(true);
    }
  };

  const handleNewTask = () => {
    setError(false);
    setCreated(false);
  };

  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        {!created && <h1 className={styles.title}>Nueva consigna:</h1>}

        {created ? (
          <Success onNewTask={handleNewTask} />
        ) : error ? (
          <Error />
        ) : (
          <TaskComponent loading={saving} onSave={handleSave} />
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
