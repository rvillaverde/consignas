import React from 'react';
import { Task } from '../../../services/task';

interface TaskContextType {
  tag?: 'narrativas-visuales';
  tasks: Task[];
}

const TaskContext = React.createContext<TaskContextType>({ tasks: [] });

export default TaskContext;
