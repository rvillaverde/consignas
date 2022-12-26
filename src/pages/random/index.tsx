import type { NextPage } from 'next';
import React from 'react';
import TaskContext from '../../components/context/task';
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
    <TaskContext.Provider value={{ tasks: tasks || [] }}>
      <Layout menu={{ items: [CREATE_TASK] }}>
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
