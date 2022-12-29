import React from 'react';

import styles from './empty-stack.module.sass';

const EmptyStack: React.FunctionComponent = () => (
  <div className={styles['empty-stack']}>
    <strong>Uia...!</strong>
    En este momento no tenemos más consignas para ofrecerte.
    <br />
    Creá una nueva para sumar más consignas al proyecto!
  </div>
);

export default EmptyStack;
