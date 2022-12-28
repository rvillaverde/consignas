import type { NextPage } from 'next';
import { useState } from 'react';
import { TagType } from '../../../api/task';
import TaskContext from '../../../components/context/task';
import useTasks from '../../../components/hooks/useTasks';
import { Layout } from '../../../components/layout/narrativas-visuales';
import Loading from '../../../components/loading';
import Error from '../../../components/random-task/error';
import { Task as TaskType } from '../../../services/task';
import { random } from '../../../helpers/random';
import Task from '../../../components/task';
import Button from '../../../components/button';

import styles from './shuffle.module.sass';

const TAG: TagType = 'narrativas-visuales';
const INTERVAL = 25;

const Random: NextPage = () => {
  const { error, loading, tasks } = useTasks(TAG);
  const [task, setTask] = useState<TaskType>();
  const [shuffling, setShuffling] = useState<boolean>(false);
  const [interval, setInterval] = useState<number | undefined>();

  const shuffle = () => {
    if (tasks) {
      setTask(tasks[random(tasks.length)]);
    }
  };

  const handleShuffleStart = () => {
    if (interval) {
      clearInterval(interval);
      setInterval(undefined);
    }

    setInterval(window.setInterval(shuffle, INTERVAL));
    setShuffling(true);
  };

  const handleShuffleEnd = () => {
    if (interval) {
      clearInterval(interval);
      setInterval(undefined);
    }

    setShuffling(false);
  };

  return (
    <TaskContext.Provider value={{ tag: TAG, tasks: tasks || [] }}>
      <Layout>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : tasks ? (
          <div className={styles['shuffle-tasks']}>
            {task ? <Task task={task} /> : null}
            {shuffling ? (
              <Button onClick={handleShuffleEnd} type="primary">
                Parar
              </Button>
            ) : (
              <Button onClick={handleShuffleStart} type="primary">
                Mezclar
              </Button>
            )}
          </div>
        ) : null}
      </Layout>
    </TaskContext.Provider>
  );
};

export default Random;
