import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import TaskContext from '../../components/context/task';
import { Layout } from '../../components/layout';
import {
  CREATE_TASK,
  NARRATIVAS_VISUALES,
} from '../../components/header/menu-items';
import Error from '../../components/new-task/error';
import Success from '../../components/new-task/success';
import TaskComponent from '../../components/task';
import { Task } from '../../services/task';

import styles from '../../../styles/Home.module.sass';

const Home: NextPage = () => {
  const { create, saving } = useContext(TaskContext);
  const [created, setCreated] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSave = async (description: Task['description']) => {
    try {
      await create(description);
      setCreated(true);
    } catch (e) {
      setError(true);
    }
  };

  const handleNewTask = () => {
    setError(false);
    setCreated(false);
  };

  return (
    <Layout menu={{ items: [CREATE_TASK, NARRATIVAS_VISUALES] }}>
      {!created && <h1 className={styles.title}>Nueva consigna:</h1>}

      {created ? (
        <Success onNewTask={handleNewTask} />
      ) : error ? (
        <Error onNewTask={handleNewTask} />
      ) : (
        <TaskComponent loading={saving} onSave={handleSave} />
      )}
    </Layout>
  );
};

export default Home;
