import type { NextPage } from 'next';
import { CREATE_TASK } from '../../components/header/menu-items';
import useTasks from '../../components/hooks/useTasks';
import { Layout } from '../../components/layout';
import Loading from '../../components/loading';
import RandomTask, { ActionType } from '../../components/random-task';
import Error from '../../components/random-task/error';

const ACTIONS: ActionType[] = ['download', 'like', 'next', 'report'];

const Random: NextPage = () => {
  const { error, loading, tasks } = useTasks();

  return (
    <Layout menu={{ items: [CREATE_TASK] }}>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : tasks ? (
        <RandomTask actions={ACTIONS} tasks={tasks} />
      ) : null}
    </Layout>
  );
};

export default Random;
