import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { TagType } from '../api/task';
import useTasks from '../components/hooks/useTasks';
import TaskContext, { TaskContextType } from '../components/context/task';

import '../../styles/globals.sass';

const TAGS: TagType[] = ['narrativas-visuales'];

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const { pathname } = router;
  const tag = TAGS.find(t => pathname.indexOf(t) > -1);

  const { create, error, like, loading, remove, report, saving, tasks } =
    useTasks(tag);

  useEffect(() => {
    tag && document.querySelector('body')?.classList.add(tag);
  }, [tag]);

  const value: TaskContextType = {
    create,
    error,
    like,
    loading,
    remove,
    report,
    saving,
    tag,
    tasks: tasks || [],
  };

  return (
    <TaskContext.Provider value={value}>
      <Component {...pageProps} />
    </TaskContext.Provider>
  );
};

export default MyApp;
