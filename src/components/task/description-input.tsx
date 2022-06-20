import React, { ChangeEvent, RefObject } from 'react';

import styles from './task.module.sass';

interface PropTypes {
  onChange: (input: string) => void;
  onSubmit: () => void;
  value: string;
}

class DescriptionInput extends React.Component<PropTypes> {
  ref: RefObject<HTMLTextAreaElement> = React.createRef();

  componentDidMount = () => {
    if (this.ref.current) {
      this.ref.current.focus();
    }
  };

  handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    this.props.onChange(e.target.value);

  handleKeyDown = (e: React.KeyboardEvent) => {
    const { onSubmit, value } = this.props;

    if (e.code === 'Enter') {
      e.preventDefault();
      if (value.length) {
        onSubmit();
      }
    }
  };

  render() {
    return (
      <textarea
        className={styles.input}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyDown}
        // type="text"
        // placeholder="Escribí tu consigna acá"
        ref={this.ref}
      ></textarea>
    );
  }
}

export default DescriptionInput;
