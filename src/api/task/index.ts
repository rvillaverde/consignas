import { Prompt, Tag } from '../../data';

const promptApi = {
  create: async (description: Prompt['description']): Promise<void> => {
    const res = await fetch('/api/Prompts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    });

    return res.json();
  },
  like: async (id: Prompt['id']): Promise<Prompt> => {
    const res = await fetch(`/api/Prompts/${id}/like`, {
      method: 'POST',
    });

    return res.json();
  },
  list: async (tags?: Tag): Promise<Prompt[]> => {
    const res = await fetch(`/api/Prompts${tags ? '?tags=' + tags : '/'}`);
    return await res.json();
  },
  random: async (): Promise<Prompt> => {
    const res = await fetch('/api/Prompts/random');
    return await res.json();
  },
  report: async (id: Prompt['id']): Promise<Prompt> => {
    const res = await fetch(`/api/Prompts/${id}/report`, {
      method: 'POST',
    });

    return res.json();
  },
};

export default promptApi;
