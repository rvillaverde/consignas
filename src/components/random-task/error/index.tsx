import React from 'react';
import Button from '../../button';

import styles from './error.module.sass';

const Error: React.FunctionComponent = () => (
  <div className={styles.error}>
    <p>Hubo un error al pedir tu consigna. Por favor intentalo más tarde.</p>
    <div className="actions">
      <Button href="/new" type="primary">
        Crear consigna
      </Button>
      <Button href="/" type="secondary">
        Ir al inicio
      </Button>
    </div>
  </div>
);

export default Error;
