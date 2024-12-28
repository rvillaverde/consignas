import { Tag, WebContent } from '../../data';

const webContentApi = {
  fetch: async (tag: Tag): Promise<WebContent[]> => {
    const res = await fetch(`/api/web-content?tag=${tag}`);
    return await res.json();
  },
};

export default webContentApi;
