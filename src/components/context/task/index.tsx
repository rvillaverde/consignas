import React from 'react';
import { Prompt, Tag } from '../../../data';

export interface PromptContextType {
  create: (description: Prompt['description']) => Promise<void>;
  error: boolean;
  like: (id: Prompt['id']) => Promise<void>;
  loading: boolean;
  remove: (id: Prompt['id']) => void;
  report: (id: Prompt['id']) => Promise<void>;
  saving: boolean;
  tag?: Tag;
  prompts: Prompt[];
}

export const PromptContext = React.createContext<PromptContextType>({
  create: () => Promise.resolve(),
  error: false,
  like: () => Promise.resolve(),
  loading: false,
  remove: () => undefined,
  report: () => Promise.resolve(),
  saving: false,
  prompts: [],
});
