import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

export interface PropTypes {
  children: JSX.Element | string | number;
  disabled?: boolean;
  onClick?: () => void;
  onPressEnd?: () => void;
  onPressStart?: () => void;
  rounded?: boolean;
  submit?: boolean;
  type: 'primary' | 'secondary' | 'tertiary';
  href?: string;
}

const Button: React.FunctionComponent<PropTypes> = ({
  children,
  disabled,
  href,
  onClick,
  onPressEnd,
  onPressStart,
  rounded,
  submit,
  type,
}: PropTypes) => {
  const className = classNames(
    'button',
    `button-${type}`,
    disabled && 'button-disabled',
    rounded && 'button-rounded',
  );

  const content: JSX.Element = <div className="button-content">{children}</div>;

  return href ? (
    <Link href={href}>
      <a className={className}>{content}</a>
    </Link>
  ) : (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={onPressStart}
      onMouseUp={onPressEnd}
      onTouchEnd={onPressEnd}
      onTouchStart={onPressStart}
      type={submit ? 'submit' : 'button'}
    >
      {content}
    </button>
  );
};

export default Button;
