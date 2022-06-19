import type { NextPage } from 'next';
import Head from '../components/head';
import TaskComponent from '../components/task';
import { Task } from '../services/task';

import styles from '../../styles/Home.module.sass';
import taskApi from '../api/task';
import { useState } from 'react';
import Button from '../components/button';

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
        <h1 className={styles.title}>Nueva consigna:</h1>

        {created ? (
          <div>
            <p>Gracias! Tu consigna ha sido creada.</p>
            <Button onClick={handleNewTask} type="primary">
              Crear otra consigna
            </Button>
            <Button href="/" type="secondary">
              Ir al inicio
            </Button>
          </div>
        ) : error ? (
          <div>
            <p>
              Hubo un error al crear tu consigna. Por favor intentalo más tarde
            </p>
            <Button href="/" type="primary">
              Ir al inicio
            </Button>
          </div>
        ) : (
          <TaskComponent loading={saving} onSave={handleSave} />
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
