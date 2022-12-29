import React, { useContext, useEffect, useState } from 'react';
import { Task as TaskType } from '../../services/task';
import ShuffleButton from '../button/shuffle';
import TaskContext from '../context/task';
import EmptyStack from '../empty-stack';
import useTaskShuffler from '../hooks/useTaskShuffler';
import Task from '../task';
import { ActionType } from '../task/types';

import styles from './shuffle-tasks.module.sass';

interface PropTypes {
  actions?: ActionType[];
  onRemoveTask?: (id: TaskType['id']) => void;
}

const ShuffleTasks: React.FunctionComponent<PropTypes> = ({
  actions,
}: PropTypes) => {
  const [limit, setLimit] = useState<number>(0);
  const { remove, tasks } = useContext(TaskContext);
  const { shuffling, task } = useTaskShuffler(limit);

  const handlePressStart = () => task && remove(task.id);

  const handlePressEnd = (count: number) => setLimit(count);

  return (
    <div className={styles['shuffle-tasks']}>
      {tasks && tasks.length ? (
        <>
          {task ? (
            <Task
              actions={shuffling ? [] : actions}
              blur={shuffling}
              task={task}
            />
          ) : (
            <h2>
              Presioná el botón para mezclar el mazo y soltá para obtener una
              consigna fotográfica al azar.
            </h2>
          )}
          <ShuffleButton
            disabled={shuffling}
            onPressEnd={handlePressEnd}
            onPressStart={handlePressStart}
          />
        </>
      ) : (
        <EmptyStack />
      )}
    </div>
  );
};

export default ShuffleTasks;
