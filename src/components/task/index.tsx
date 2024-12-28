import classNames from 'classnames';
import html2canvas from 'html2canvas';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../button';
import { PromptContext } from '../context/task';
import DescriptionInput from './description-input';
import { ActionType } from './types';
import { Prompt as PromptType } from '../../data';

import styles from './task.module.sass';

interface PropTypes {
  actions?: ActionType[];
  blur?: boolean;
  loading?: boolean;
  onSave?: (description: PromptType['description']) => Promise<void>;
  task?: PromptType;
}

const Task: React.FunctionComponent<PropTypes> = ({
  actions,
  blur,
  loading,
  onSave,
  task,
}: PropTypes) => {
  const { like, report, tag } = React.useContext(PromptContext);

  const [description, setDescription] = useState<string>('');
  const [disableLike, setDisableLike] = useState<boolean>(false);
  const [disableReport, setDisableReport] = useState<boolean>(false);

  const url = `consignasfotograficas.com${tag ? `/${tag}` : ''}`;

  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setDisableLike(false);
    setDisableReport(false);
  }, [task]);

  const showActions = (): boolean => !task || (!!actions && actions.length > 0);

  const handleChange = (input: string) => {
    setDescription(input);
  };

  const handleSave = () => {
    onSave && onSave(description);
  };

  const handleDownload = async () => {
    const { current } = ref;

    if (current) {
      const canvas = await html2canvas(current);
      const data = canvas.toDataURL('image/jpg');
      const link = document.createElement('a');

      if (typeof link.download === 'string') {
        link.href = data;
        link.download = `Consigna - ${moment().format('YYYY-MM-DD')}`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(data);
      }
    }
  };

  const handleLike = async () => {
    task && (await like(task.id));
    setDisableLike(true);
    setDisableReport(true);
  };

  const handleReport = async () => {
    task && (await report(task.id));
    setDisableLike(true);
    setDisableReport(true);
  };

  const hasAction = (action: ActionType): boolean =>
    !!actions && actions.indexOf(action) > -1;

  return (
    <div className={classNames(styles.task, blur && styles.blur)}>
      {task && (
        <div className={styles['task-image']} ref={ref}>
          <span className={styles['task-image-description']}>
            {task.description}
          </span>
          <span className={styles['task-image-watermark']}>{url}</span>
        </div>
      )}
      <div className={styles.description}>
        {task ? (
          task.description
        ) : (
          <DescriptionInput
            onChange={handleChange}
            onSubmit={handleSave}
            value={description}
          />
        )}
      </div>
      {showActions() ? (
        <div className="actions">
          {task ? (
            <>
              {hasAction('download') && (
                <Button
                  disabled={loading}
                  onClick={handleDownload}
                  type="primary"
                >
                  Descargar
                </Button>
              )}
              {hasAction('like') && (
                <Button
                  disabled={loading || !!disableLike}
                  onClick={handleLike}
                  type="secondary"
                >
                  {`Me gusta (${task.likes})`}
                </Button>
              )}
              {hasAction('report') && (
                <Button
                  disabled={loading || !!disableReport}
                  onClick={handleReport}
                  type="tertiary"
                >
                  Reportar
                </Button>
              )}
            </>
          ) : (
            <>
              <Button disabled={loading} onClick={handleSave} type="primary">
                Guardar
              </Button>
              <Button href="/" type="tertiary">
                Cancelar
              </Button>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Task;
