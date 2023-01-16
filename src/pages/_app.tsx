import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { TagType } from '../api/task';
import useTasks from '../components/hooks/useTasks';
import useWebContent from '../components/hooks/useWebContent';
import TaskContext from '../components/context/task';
import WebContentContext from '../components/context/web-content';

import '../../styles/globals.sass';

const TAGS: TagType[] = ['default', 'narrativas-visuales'];

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const { pathname } = router;
  const tag = TAGS.find(t => pathname.indexOf(t) > -1);

  const { create, error, like, loading, remove, report, saving, tasks } =
    useTasks(tag);

  const webContent = useWebContent(tag);

  useEffect(() => {
    updateBodyClass();
  }, [tag]);

  const updateBodyClass = () =>
    tag && document.querySelector('body')?.classList.add(tag);

  return (
    <WebContentContext.Provider value={webContent}>
      <TaskContext.Provider
        value={{
          create,
          error,
          like,
          loading,
          remove,
          report,
          saving,
          tag,
          tasks: tasks || [],
        }}
      >
        <Component {...pageProps} />
      </TaskContext.Provider>
    </WebContentContext.Provider>
  );
};

export default MyApp;
