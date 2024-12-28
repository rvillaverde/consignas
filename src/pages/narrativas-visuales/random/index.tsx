import type { NextPage } from 'next';
import { PromptContext } from '../../../components/context/task';
import { Layout } from '../../../components/layout/narrativas-visuales';
import Loading from '../../../components/loading';
import Error from '../../../components/random-task/error';
import { useContext } from 'react';
import ShuffleTasks from '../../../components/shuffle-tasks';
import { ActionType } from '../../../components/task/types';

const ACTIONS: ActionType[] = ['download'];

const Random: NextPage = () => {
  const { loading, error, prompts } = useContext(PromptContext);

  return (
    <Layout>
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
