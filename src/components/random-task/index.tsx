import React, { useEffect, useState } from 'react';
import taskApi from '../../api/task';
import { Task } from '../../services/task';
import Button from '../button';
import Loading from '../loading';
import TaskComponent from '../task';

import styles from './random-task.module.sass';

interface PropTypes {
  actions: ActionType[];
  tasks: Task[];
}

export type ActionType = 'create' | 'download' | 'like' | 'next' | 'report';

const RandomTask: React.FunctionComponent<PropTypes> = ({
  actions,
  tasks,
}: PropTypes) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);
  const [emptyStack, setEmptyStack] = useState<boolean>(false);
  const [task, setTask] = useState<Task | undefined>();

  useEffect(() => {
    if (!task && !loading) {
      refreshTask();
    }
  }, []);

  const refreshTask = async () => {
    setLoading(true);

    setTimeout(() => {
      const task = tasks.shift();
      if (task) {
        setTask(task);
      } else {
        setTask(undefined);
        setEmptyStack(true);
      }
      setLoading(false);
    }, 3000);
  };

  const handleLike = async () => {
    if (task) {
      setSaving(true);
      const res = await taskApi.like(task.id);
      setTask(res);
      setSaving(false);
    }
  };

  const handleReport = async () => {
    if (task) {
      setSaving(true);
      const res = await taskApi.report(task.id);
      setTask(res);
      setSaving(false);
    }
  };

  const hasAction = (action: ActionType): boolean =>
    actions.indexOf(action) > -1;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles['random-task']}>
      {task && (
        <TaskComponent
          actions={actions}
          loading={saving}
          onLike={handleLike}
          onReport={handleReport}
          task={task}
        />
      )}
      {emptyStack && (
        <div className={styles['empty-stack']}>
          <strong>Uia...!</strong>
          En este momento no tenemos más consignas para ofrecerte.
          <br />
          Creá una nueva para sumar más consignas al proyecto!
        </div>
      )}
      <div className="actions">
        {hasAction('create') && (
          <Button href="/new" type="primary">
            Crear consigna
          </Button>
        )}
        {!emptyStack && hasAction('next') && (
          <Button onClick={refreshTask} type="secondary">
            Nueva consigna
          </Button>
        )}
      </div>
    </div>
  );
};

export default RandomTask;
