import { useEffect, useRef, useState } from 'react';
import Button from '.';

import styles from './button.module.sass';

const INTERVAL = 25;

interface PropTypes {
  disabled?: boolean;
  onPressEnd: (time: number) => void;
  onPressStart: () => void;
}

const ShuffleButton: React.FunctionComponent<PropTypes> = ({
  disabled,
  onPressEnd,
  onPressStart,
}: PropTypes) => {
  const [pressing, setPressing] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (pressing) {
      startCounting();
    } else {
      setCount(0);
      clearInterval(timer.current);
      timer.current = undefined;
    }

    return () => clearInterval(timer.current);
  }, [pressing]);

  const startCounting = () =>
    (timer.current = window.setInterval(() => {
      setCount(prev => prev + INTERVAL);
    }, INTERVAL));

  const handleStart = () => {
    setPressing(true);
    onPressStart();
  };

  const handleEnd = () => {
    setPressing(false);
    onPressEnd(count);
  };

  return (
    <div className={styles['button-wrapper']}>
      <span
        className={styles['button-halo']}
        style={{ transform: `Scale(${count / 2}%)` }}
      ></span>
      <Button
        disabled={disabled}
        onPressEnd={handleEnd}
        onPressStart={handleStart}
        round
        type="primary"
      >
        {pressing ? count : 'Mezclar'}
      </Button>
    </div>
  );
};

export default ShuffleButton;
