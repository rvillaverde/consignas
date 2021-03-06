import { Task } from '../../services/task';

const taskApi = {
  create: async (description: Task['description']): Promise<Task> => {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    });

    return res.json();
  },
  get: async (id: Task['internalId']): Promise<Task> => {
    const res = await fetch(`/api/tasks/${id}`);
    return await res.json();
  },
  like: async (id: Task['id']): Promise<Task> => {
    const res = await fetch(`/api/tasks/${id}/like`, {
      method: 'POST',
    });

    return res.json();
  },
  list: async (): Promise<Task[]> => {
    const res = await fetch('/api/tasks/');
    return await res.json();
  },
  random: async (): Promise<Task> => {
    const res = await fetch('/api/tasks/random');
    return await res.json();
  },
  report: async (id: Task['id']): Promise<Task> => {
    const res = await fetch(`/api/tasks/${id}/report`, {
      method: 'POST',
    });

    return res.json();
  },
};

export default taskApi;
