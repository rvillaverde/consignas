import React from 'react';

import styles from './footer.module.sass';

interface PropTypes {
  children: JSX.Element;
}

const Footer: React.FunctionComponent<PropTypes> = ({
  children,
}: PropTypes) => (
  <footer className={styles.footer}>
    <p className={styles.caption}>{children}</p>
  </footer>
);

export default Footer;
