import type { NextPage } from 'next';
import React, { useContext } from 'react';
import TaskContext from '../../components/context/task';
import { CREATE_TASK } from '../../components/header/menu-items';
import { Layout } from '../../components/layout';
import Loading from '../../components/loading';
import Error from '../../components/random-task/error';
import ShuffleTasks from '../../components/shuffle-tasks';
import { ActionType } from '../../components/task/types';

const ACTIONS: ActionType[] = ['create', 'download', 'like', 'report'];

const Random: NextPage = () => {
  const { error, loading, tasks } = useContext(TaskContext);

  return (
    <Layout menu={{ items: [CREATE_TASK] }}>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : tasks ? (
        <ShuffleTasks actions={ACTIONS} />
      ) : null}
    </Layout>
  );
};

export default Random;
