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

  useEffect(() => {
    if (shuffling && task) {
      remove(task.id);
    }
  }, [shuffling]);

  const handleStartShuffling = (count: number) => setLimit(count);

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
          ) : null}
          <ShuffleButton
            disabled={shuffling}
            onButtonRelease={handleStartShuffling}
          />
        </>
      ) : (
        <EmptyStack />
      )}
    </div>
  );
};

export default ShuffleTasks;
