import React from 'react';
import Button from '../../button';

import styles from './success.module.sass';

interface PropTypes {
  onNewTask: () => void;
}

const Success: React.FunctionComponent<PropTypes> = ({
  onNewTask,
}: PropTypes) => (
  <div className={styles.success}>
    <p>Gracias! Tu consigna ha sido creada.</p>
    <div className="actions">
      <Button onClick={onNewTask} type="primary">
        Crear otra consigna
      </Button>
      <Button href="/" type="secondary">
        Ir al inicio
      </Button>
    </div>
  </div>
);

export default Success;
