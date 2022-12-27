import type { NextPage } from 'next';
import { useEffect } from 'react';
import { TagType } from '../../../api/task';
import TaskContext from '../../../components/context/task';
import useTasks from '../../../components/hooks/useTasks';
import { Layout } from '../../../components/layout/narrativas-visuales';
import Loading from '../../../components/loading';
import Error from '../../../components/random-task/error';
import RandomTask, { ActionType } from '../../../components/random-task';

const ACTIONS: ActionType[] = ['download', 'like', 'next'];
const TAG: TagType = 'narrativas-visuales';

const Random: NextPage = () => {
  const { error, loading, tasks } = useTasks(TAG);

  useEffect(() => {
    document.querySelector('body')?.classList.add(TAG);
  }, []);

  return (
    <TaskContext.Provider value={{ tag: TAG, tasks: tasks || [] }}>
      <Layout>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : tasks ? (
          <RandomTask actions={ACTIONS} />
        ) : null}
      </Layout>
    </TaskContext.Provider>
  );
};

export default Random;
