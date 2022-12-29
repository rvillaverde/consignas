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
import ShuffleButton from './button';

import styles from './mix.module.sass';

const TAG: TagType = 'narrativas-visuales';
const INTERVAL = 25;

const Random: NextPage = () => {
  const { error, loading, removeTask, tasks } = useTasks(TAG);
  const [shuffling, setShuffling] = useState<boolean>(false);
  const [task, setTask] = useState<TaskType>();

  const timer = useRef<number | undefined>(undefined);
  const countLimit = useRef<number>(0);

  useEffect(() => {
    if (shuffling) {
      shuffle();
    } else {
      clearInterval(timer.current);
      timer.current = undefined;

      if (task) {
        removeTask(task.id);
      }
    }

    return () => clearInterval(timer.current);
  }, [shuffling]);

  const setRandomTask = () => tasks && setTask(tasks[random(tasks.length)]);

  const shuffle = () => {
    if (!tasks) {
      return;
    }

    let count = 0;

    timer.current = window.setInterval(() => {
      if (count < countLimit.current) {
        setRandomTask();
        count += INTERVAL;
      } else {
        setShuffling(false);
      }
    }, INTERVAL);
  };

  const handleStartShuffling = (count: number) => {
    countLimit.current = count;
    setShuffling(true);
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
            {task ? <Task blur={shuffling} task={task} /> : null}
            <ShuffleButton disabled={shuffling} onEnd={handleStartShuffling} />
          </div>
        ) : null}
      </Layout>
    </TaskContext.Provider>
  );
};

export default Random;
