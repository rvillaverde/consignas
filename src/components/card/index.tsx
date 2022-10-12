import classNames from 'classnames';
import React from 'react';
import Button, { PropTypes as ButtonPropTypes } from '../button';

import styles from './card.module.sass';

interface Action {
  href: string;
  label: string;
  type: ButtonPropTypes['type'];
}

interface PropTypes {
  actions?: Action[];
  children: JSX.Element;
  topImage?: string;
  type: 'large';
}

const Card: React.FunctionComponent<PropTypes> = ({
  actions,
  children,
  topImage,
  type,
}: PropTypes) => {
  return (
    <div className={classNames([styles.card, styles[type]])}>
      {topImage ? (
        <div
          className={styles['top-image']}
          style={{ backgroundImage: `url(${topImage})` }}
        ></div>
      ) : null}
      <div className={styles.content}>{children}</div>
      {actions && actions.length ? (
        <div className={styles.actions}>
          {actions.map(action => (
            <Button href={action.href} type={action.type}>
              {action.label}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Card;
