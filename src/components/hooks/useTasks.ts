import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';
import taskApi, { TagType } from '../../api/task';
import { Task } from '../../services/task';

// @TODO: use local storage to filter tasks that user already got
const useTasks = (tag?: TagType) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);
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

  const create = async (description: Task['description']) =>
    await taskApi.create(description);

  const like = async (id: Task['id']) => {
    if (!tasks) {
      return Promise.reject();
    }

    const task = tasks.find(t => t.id === id);

    if (task) {
      setSaving(true);
      await taskApi.like(task.id);
      task.likes++;
      setSaving(false);

      return Promise.resolve();
    }

    return Promise.reject('Task not found');
  };

  const report = async (id: Task['id']) => {
    if (!tasks) {
      return Promise.reject();
    }

    const task = tasks.find(t => t.id === id);

    if (task) {
      setSaving(true);
      await taskApi.report(task.id);
      task.reports++;
      setSaving(false);

      return Promise.resolve();
    }

    return Promise.reject('Task not found');
  };

  const remove = (id: Task['id']) =>
    setTasks(tasks?.filter(task => task.id !== id));

  return { create, error, like, loading, remove, report, saving, tasks };
};

export default useTasks;
