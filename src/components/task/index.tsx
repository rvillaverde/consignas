import html2canvas from 'html2canvas';
import moment from 'moment';
import React, { ChangeEvent, useRef, useState } from 'react';
import { Task } from '../../services/task';
import Button from '../button';
import DescriptionInput from './description-input';

import styles from './task.module.sass';

interface PropTypes {
  loading: boolean;
  onLike?: () => Promise<void>;
  onReport?: () => Promise<void>;
  onSave?: (description: Task['description']) => Promise<void>;
  task?: Task;
}

const Task: React.FunctionComponent<PropTypes> = ({
  loading,
  onLike,
  onReport,
  onSave,
  task,
}: PropTypes) => {
  const [description, setDescription] = useState<string>('');
  const [disableLike, setDisableLike] = useState<boolean>(false);
  const [disableReport, setDisableReport] = useState<boolean>(false);

  const ref = useRef<HTMLHeadingElement>(null);

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
    onLike && (await onLike());
    setDisableLike(true);
    setDisableReport(true);
  };

  const handleReport = async () => {
    onReport && (await onReport());
    setDisableLike(true);
    setDisableReport(true);
  };

  return (
    <div className={styles.task}>
      {task && (
        <div className={styles['task-image']} ref={ref}>
          <span className={styles['task-image-description']}>
            {task.description}
          </span>
          <span className={styles['task-image-watermark']}>
            consignasfotograficas.com
          </span>
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
      <div className="actions">
        {task ? (
          <>
            <Button disabled={loading} onClick={handleDownload} type="primary">
              Descargar
            </Button>
            <Button
              disabled={loading || !!disableLike}
              onClick={handleLike}
              type="secondary"
            >
              {`Me gusta (${task.likes})`}
            </Button>
            <Button
              disabled={loading || !!disableReport}
              onClick={handleReport}
              type="tertiary"
            >
              Reportar
            </Button>
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
    </div>
  );
};

export default Task;
