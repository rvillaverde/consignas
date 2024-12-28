import React, { useContext, useState } from 'react';
import { Prompt } from '../../data';
import ShuffleButton from '../button/shuffle';
import { PromptContext } from '../context/task';
import EmptyStack from '../empty-stack';
import useTaskShuffler from '../hooks/useTaskShuffler';
import Task from '../task';
import { ActionType } from '../task/types';

import styles from './shuffle-tasks.module.sass';

interface PropTypes {
  actions?: ActionType[];
  onRemoveTask?: (id: Prompt['id']) => void;
}

const ShuffleTasks: React.FunctionComponent<PropTypes> = ({
  actions,
}: PropTypes) => {
  const [limit, setLimit] = useState<number>(0);
  const { remove, prompts } = useContext(PromptContext);
  const { shuffling, prompt } = useTaskShuffler(limit);

  const handlePressStart = () => prompt && remove(prompt.id);

  const handlePressEnd = (count: number) => setLimit(count);

  return (
    <div className={styles['shuffle-tasks']}>
      {prompts && prompts.length ? (
        <>
          {prompt ? (
            <Task
              actions={shuffling ? [] : actions}
              blur={shuffling}
              task={prompt}
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
