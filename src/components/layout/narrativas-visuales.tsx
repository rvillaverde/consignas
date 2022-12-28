import React, { useEffect } from 'react';
import { TagType } from '../../api/task';
import FooterNarrativasVisuales from '../footer/narrativas-visuales';
import Head from '../head';
import Header, { Menu } from '../header';

import styles from '../../../styles/Home.module.sass';

const TAG: TagType = 'narrativas-visuales';

const TITLE = 'Narrativas Visuales | Oráculo fotográfico';

interface PropTypes {
  children: React.ReactNode;
}

const MENU: Menu = {
  items: [
    {
      external: true,
      href: 'https://www.santa-talleres.com/narrativas-visuales',
      id: 'sobre-el-taller',
      label: 'Sobre el Taller',
    },
  ],
};

export const Layout = ({ children }: PropTypes) => {
  useEffect(() => {
    document.querySelector('body')?.classList.add(TAG);
  }, []);

  return (
    <div className={styles.container}>
      <Head />
      <Header href={`/${TAG}`} menu={MENU} title={TITLE} />
      <main className={styles.main}>{children}</main>
      <FooterNarrativasVisuales />
    </div>
  );
};
