import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';
import taskApi from '../../api/task';
import { Prompt, Tag } from '../../data';

// @TODO: use local storage to filter tasks that user already got
const usePrompts = (tag?: Tag) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [prompts, setPrompts] = useState<Prompt[]>();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    // setLoading(true);
    try {
      const tasks = await taskApi.list(tag);

      setPrompts(shuffle(tasks));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const create = async (description: Prompt['description']) =>
    await taskApi.create(description);

  const like = async (id: Prompt['id']) => {
    if (!prompts) {
      return Promise.reject();
    }

    const task = prompts.find(t => t.id === id);

    if (task) {
      setSaving(true);
      await taskApi.like(task.id);
      task.likes++;
      setSaving(false);

      return Promise.resolve();
    }

    return Promise.reject('Prompt not found');
  };

  const report = async (id: Prompt['id']) => {
    if (!prompts) {
      return Promise.reject();
    }

    const task = prompts.find(t => t.id === id);

    if (task) {
      setSaving(true);
      await taskApi.report(task.id);
      task.reports++;
      setSaving(false);

      return Promise.resolve();
    }

    return Promise.reject('Prompt not found');
  };

  const remove = (id: Prompt['id']) =>
    setPrompts(prompts?.filter(task => task.id !== id));

  return {
    create,
    error,
    like,
    loading,
    remove,
    report,
    saving,
    prompts,
  };
};

export default usePrompts;
