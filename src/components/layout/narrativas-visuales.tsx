import React from 'react';
import { Tag } from '../../data';
import FooterNarrativasVisuales from '../footer/narrativas-visuales';
import Head from '../head';
import Header, { Menu } from '../header';

import styles from '../../../styles/Home.module.sass';

const TAG: Tag = 'narrativas-visuales';

const TITLE = 'Narrativas Visuales | Oráculo fotográfico';

interface PropTypes {
  children: React.ReactNode;
}

const MENU: Menu = {
  items: [
    {
      href: `/${TAG}/random`,
      id: 'random',
      label: 'Pedir consigna',
    },
    {
      href: `/${TAG}/about`,
      id: 'sobre-el-taller',
      label: 'Sobre el Taller',
    },
  ],
};

export const Layout = ({ children }: PropTypes) => (
  <div className={styles.container}>
    <Head />
    <Header href={`/${TAG}`} menu={MENU} title={TITLE} />
    <main className={styles.main}>{children}</main>
    <FooterNarrativasVisuales />
  </div>
);
