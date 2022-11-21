import React from 'react';
import Head from '../head';
import Header, { Menu } from '../header';

import styles from '../../../styles/Home.module.sass';

interface PropTypes {
  children: React.ReactNode;
  menu?: Menu;
}

export const Layout = ({ children, menu }: PropTypes) => (
  <div className={styles.container}>
    <Head />
    <Header href="/" menu={menu} title="Consignas fotográficas" />
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}></footer>
  </div>
);
