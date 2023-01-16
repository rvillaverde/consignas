import { WebContent } from '../../services/web-content';
import { TagType } from '../task';

const webContentApi = {
  fetch: async (tag: TagType): Promise<WebContent[]> => {
    const res = await fetch(`/api/web-content?tag=${tag}`);
    return await res.json();
  },
};

export default webContentApi;
