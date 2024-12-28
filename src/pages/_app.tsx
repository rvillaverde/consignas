import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import usePrompts from '../components/hooks/usePrompts';
import useWebContent from '../components/hooks/useWebContent';
import { PromptContext } from '../components/context/task';
import WebContentContext from '../components/context/web-content';
import { Tag } from '../data';

import '../../styles/globals.sass';

const TAGS: Tag[] = ['default', 'narrativas-visuales'];

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const { pathname } = router;
  const tag = TAGS.find(t => pathname.indexOf(t) > -1);

  const { create, error, like, loading, prompts, remove, report, saving } =
    usePrompts(tag);

  const webContent = useWebContent(tag);

  useEffect(() => {
    updateBodyClass();
  }, [tag]);

  const updateBodyClass = () => {
    document.querySelector('body')?.classList.remove(...TAGS);

    if (tag) {
      document.querySelector('body')?.classList.add(tag);
    }
  };

  return (
    <WebContentContext.Provider value={webContent}>
      <PromptContext.Provider
        value={{
          create,
          error,
          like,
          loading,
          remove,
          report,
          saving,
          tag,
          prompts: prompts || [],
        }}
      >
        <Component {...pageProps} />
      </PromptContext.Provider>
    </WebContentContext.Provider>
  );
};

export default MyApp;
