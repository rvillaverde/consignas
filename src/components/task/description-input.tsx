import React, { ChangeEvent, RefObject } from 'react';

import styles from './task.module.sass';

interface PropTypes {
  onChange: (input: string) => void;
  onSubmit: () => void;
  value: string;
}

class DescriptionInput extends React.Component<PropTypes> {
  ref: RefObject<HTMLInputElement> = React.createRef();

  componentDidMount = () => {
    if (this.ref.current) {
      this.ref.current.focus();
    }
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return this.props.onChange(e.target.value);
  };

  handleKeyUp = (e: React.KeyboardEvent) => {
    const { onSubmit, value } = this.props;

    if (e.code === 'Enter') {
      if (value.length) {
        onSubmit();
      }
    }
  };

  render() {
    return (
      <input
        className={styles.input}
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        type="text"
        placeholder="Escribí acá tu consigna"
        ref={this.ref}
      ></input>
    );
  }
}

export default DescriptionInput;
