import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

export interface PropTypes {
  children: JSX.Element | string | number;
  disabled?: boolean;
  onClick?: () => void;
  onPressEnd?: () => void;
  onPressStart?: () => void;
  round?: boolean;
  submit?: boolean;
  target?: '_blank' | '_self';
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
  round,
  submit,
  target,
  type,
}: PropTypes) => {
  const className = classNames(
    'button',
    `button-${type}`,
    disabled && 'button-disabled',
    round && 'button-round',
  );

  const content: JSX.Element = <div className="button-content">{children}</div>;

  return href ? (
    <Link href={href} className={className} target={target || '_self'}>
      {content}
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
