import React, { useContext } from 'react';
import TaskContext from '../context/task';
import useRandomTask from '../hooks/useRandomTask';
import Loading from '../loading';
import TaskComponent from '../task';
import { ActionType } from '../task/types';

import styles from './random-task.module.sass';

interface PropTypes {
  actions: ActionType[];
}

const RandomTask: React.FunctionComponent<PropTypes> = ({
  actions,
}: PropTypes) => {
  const { saving } = useContext(TaskContext);
  const { emptyStack, loading, refresh, task } = useRandomTask();

  const hasAction = (action: ActionType): boolean =>
    actions.indexOf(action) > -1;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles['random-task']}>
      {task && <TaskComponent actions={actions} loading={saving} task={task} />}
      {emptyStack && (
        <div className={styles['empty-stack']}>
          <strong>Uia...!</strong>
          En este momento no tenemos más consignas para ofrecerte.
          <br />
          Creá una nueva para sumar más consignas al proyecto!
        </div>
      )}
    </div>
  );
};

export default RandomTask;
