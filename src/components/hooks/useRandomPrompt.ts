import React, { useEffect, useState } from 'react';
import { PromptContext } from '../context/task';
import { Prompt } from '../../data';

const TIMEOUT = 3000;

const useRandomPrompt = () => {
  const { prompts } = React.useContext(PromptContext);

  const [emptyStack, setEmptyStack] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<Prompt | undefined>();

  useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    setLoading(true);

    setTimeout(() => {
      const prompt = prompts.shift();

      if (prompt) {
        setPrompt(prompt);
      } else {
        setPrompt(undefined);
        setEmptyStack(true);
      }
      setLoading(false);
    }, TIMEOUT);
  };

  return { emptyStack, loading, refresh, prompt };
};

export default useRandomPrompt;
