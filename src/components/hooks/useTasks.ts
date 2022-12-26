import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';
import taskApi, { TagType } from '../../api/task';
import { Task } from '../../services/task';

// @TODO: use local storage to filter tasks that user already got
const useTasks = (tag?: TagType) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const tasks = await taskApi.list(tag);
      setTasks(shuffle(tasks));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, tasks };
};

export default useTasks;
