import type { NextPage } from 'next';
import React, { useContext } from 'react';
import { PromptContext } from '../../components/context/task';
import { CREATE_TASK } from '../../components/header/menu-items';
import { Layout } from '../../components/layout';
import Loading from '../../components/loading';
import Error from '../../components/random-task/error';
import ShuffleTasks from '../../components/shuffle-tasks';
import { ActionType } from '../../components/task/types';

const ACTIONS: ActionType[] = ['create', 'download', 'like', 'report'];

const Random: NextPage = () => {
  const { error, loading, prompts } = useContext(PromptContext);

  return (
    <Layout menu={{ items: [CREATE_TASK] }}>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : prompts ? (
        <ShuffleTasks actions={ACTIONS} />
      ) : null}
    </Layout>
  );
};

export default Random;
