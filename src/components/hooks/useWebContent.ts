import { useEffect, useState } from 'react';
import webContentApi from '../../api/web-content';
import { WebContentContextType } from '../context/web-content';
import { Tag } from '../../data';

type Content = WebContentContextType['content'];

const useWebContent = (tag?: Tag) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [content, setContent] = useState<Content>({});

  useEffect(() => {
    fetchContent();
  }, [tag]);

  const fetchContent = async () => {
    setLoading(true);

    try {
      const webContent = await webContentApi.fetch(tag || 'default');

      const content: Content = webContent.reduce(
        (acc, c) => ({ ...acc, [c.key]: c.value }),
        {} as Content,
      );

      setContent(content);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { content, error, loading };
};

export default useWebContent;
