import { useContext, useEffect, useRef, useState } from 'react';
import { random } from '../../helpers/random';
import { PromptContext } from '../context/task';
import { Prompt } from '../../data';

const INTERVAL = 25;

const useTaskShuffler = (limit: number) => {
  const { prompts } = useContext(PromptContext);
  const [shuffling, setShuffling] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<Prompt>();

  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (limit > 0) {
      shuffle();
    }

    return () => clearInterval(timer.current);
  }, [limit]);

  useEffect(() => {
    if (!shuffling) {
      clearInterval(timer.current);
      timer.current = undefined;
    }
  }, [shuffling]);

  const setRandomTask = () => setPrompt(prompts[random(prompts.length)]);

  const shuffle = () => {
    setShuffling(true);

    let count = 0;

    timer.current = window.setInterval(() => {
      if (count < limit) {
        setRandomTask();
        count += INTERVAL;
      } else {
        setShuffling(false);
      }
    }, INTERVAL);
  };

  return { shuffling, prompt };
};

export default useTaskShuffler;
