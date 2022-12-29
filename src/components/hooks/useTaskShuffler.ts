import { useContext, useEffect, useRef, useState } from 'react';
import { random } from '../../helpers/random';
import { Task } from '../../services/task';
import TaskContext from '../context/task';

const INTERVAL = 25;

const useTaskShuffler = (limit: number) => {
  const { tasks } = useContext(TaskContext);
  const [shuffling, setShuffling] = useState<boolean>(false);
  const [task, setTask] = useState<Task>();

  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (limit > 0) {
      shuffle();
    }

    return () => clearInterval(timer.current);
  }, [limit]);

  useEffect(() => {
    if (!shuffling) {
      clearInterval(timer.current);
      timer.current = undefined;
    }
  }, [shuffling]);

  const setRandomTask = () => setTask(tasks[random(tasks.length)]);

  const shuffle = () => {
    setShuffling(true);

    let count = 0;

    timer.current = window.setInterval(() => {
      if (count < limit) {
        setRandomTask();
        count += INTERVAL;
      } else {
        setShuffling(false);
      }
    }, INTERVAL);
  };

  return { shuffling, task };
};

export default useTaskShuffler;
