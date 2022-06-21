import React from 'react';
import Button from '../../button';

import styles from './error.module.sass';

interface PropTypes {
  onNewTask: () => void;
}

const Error: React.FunctionComponent<PropTypes> = ({
  onNewTask,
}: PropTypes) => (
  <div className={styles.error}>
    <p>Hubo un error al crear tu consigna. Por favor intentalo más tarde.</p>
    <div className="actions">
      <Button onClick={onNewTask} type="primary">
        Crear consigna
      </Button>
      <Button href="/" type="secondary">
        Ir al inicio
      </Button>
    </div>
  </div>
);

export default Error;
