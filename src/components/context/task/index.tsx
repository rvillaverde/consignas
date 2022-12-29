import React from 'react';
import { Task } from '../../../services/task';

export interface TaskContextType {
  create: (description: Task['description']) => Promise<void>;
  error: boolean;
  like: (id: Task['id']) => Promise<void>;
  loading: boolean;
  remove: (id: Task['id']) => void;
  report: (id: Task['id']) => Promise<void>;
  saving: boolean;
  tag?: 'narrativas-visuales';
  tasks: Task[];
}

const TaskContext = React.createContext<TaskContextType>({
  create: () => Promise.resolve(),
  error: false,
  like: () => Promise.resolve(),
  loading: false,
  remove: () => undefined,
  report: () => Promise.resolve(),
  saving: false,
  tasks: [],
});

export default TaskContext;
