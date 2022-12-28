import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
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

const Shuffle: NextPage = () => {
  const { error, loading, tasks } = useTasks(TAG);
  const [task, setTask] = useState<TaskType>();
  const [shuffling, setShuffling] = useState<boolean>(false);

  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (shuffling) {
      shuffle();
    } else {
      clearInterval(timer.current);
      timer.current = undefined;
    }

    return () => clearInterval(timer.current);
  }, [shuffling]);

  const shuffle = () => {
    if (tasks) {
      timer.current = window.setInterval(() => {
        setTask(tasks[random(tasks.length)]);
      }, INTERVAL);
    }
  };

  const handleShuffleStart = () => setShuffling(true);

  const handleShuffleEnd = () => setShuffling(false);

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

export default Shuffle;
