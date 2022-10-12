import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

export interface PropTypes {
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
  const className = classNames(
    'button',
    `button-${type}`,
    disabled && 'button-disabled',
  );

  const content: JSX.Element = <div className="button-content">{children}</div>;

  return href ? (
    <Link href={href}>
      <a className={className}>{content}</a>
    </Link>
  ) : (
    <button className={className} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
