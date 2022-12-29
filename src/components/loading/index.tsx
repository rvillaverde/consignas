import React from 'react';

import styles from './loading.module.sass';

const Loading: React.FunctionComponent = () => {
  return (
    <div className={styles['loading-wrapper']}>
      <p>Cargando consignas...</p>
      <div className={styles['lds-ellipsis']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
