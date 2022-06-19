import Link from 'next/link';
import React from 'react';

interface PropTypes {
  children: JSX.Element | string;
  disabled?: boolean;
  onClick?: () => Promise<void> | void;
  type: 'primary' | 'secondary' | 'tertiary';
  href?: string;
}

const Button: React.FunctionComponent<PropTypes> = ({
  children,
  disabled,
  href,
  onClick,
  type,
}: PropTypes) => {
  return href ? (
    <Link href={href}>
      <a className={`button-${type}`}>{children}</a>
    </Link>
  ) : (
    <button className={`button-${type}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
