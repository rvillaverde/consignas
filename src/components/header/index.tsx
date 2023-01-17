import Link from 'next/link';
import React from 'react';

import styles from './header.module.sass';

interface PropTypes {
  href: string;
  menu?: Menu;
  title: string;
}

export interface Menu {
  items: MenuItem[];
}

export interface MenuItem {
  external?: boolean;
  href: string;
  id: string;
  label: string;
}

const Header: React.FunctionComponent<PropTypes> = ({
  href,
  menu,
  title,
}: PropTypes) => (
  <header className={styles.header}>
    <Link href={href}>
      <h1 className={styles.title}>{title}</h1>
    </Link>
    {menu && (
      <menu>
        <ul>
          {menu.items.map(item => (
            <li key={item.id}>
              <Link
                href={item.href}
                target={item.external ? '_blank' : '_self'}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </menu>
    )}
  </header>
);

export default Header;
