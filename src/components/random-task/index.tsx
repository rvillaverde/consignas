import React, { useEffect, useState } from 'react';
import taskApi from '../../api/task';
import { Task } from '../../services/task';
import Button from '../button';
import Loading from '../loading';
import TaskComponent from '../task';

import styles from './random-task.module.sass';

const RandomTask: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);
  const [task, setTask] = useState<Task | undefined>();

  useEffect(() => {
    if (!task && !loading) {
      refreshTask();
    }
  }, []);

  const refreshTask = async () => {
    setLoading(true);
    const task = await taskApi.random();
    setTask(task);
    setLoading(false);
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

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles['random-task']}>
      {task && (
        <TaskComponent
          loading={saving}
          onLike={handleLike}
          onReport={handleReport}
          task={task}
        />
      )}
      <div className="actions">
        <Button onClick={refreshTask} type="primary">
          Nueva consigna
        </Button>
        <Button href="/new" type="secondary">
          Crear consigna
        </Button>
      </div>
    </div>
  );
};

export default RandomTask;
