import { useEffect, useState } from 'react';
import { Task } from '../../services/task';

const TIMEOUT = 3000;

const useRandomTask = (tasks: Task[]) => {
  const [emptyStack, setEmptyStack] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [task, setTask] = useState<Task | undefined>();

  useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    setLoading(true);

    setTimeout(() => {
      const task = tasks.shift();
      if (task) {
        setTask(task);
      } else {
        setTask(undefined);
        setEmptyStack(true);
      }
      setLoading(false);
    }, TIMEOUT);
  };

  return { emptyStack, loading, refresh, task };
};

export default useRandomTask;
