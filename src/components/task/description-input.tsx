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
    const { value } = this.props;

    return (
      <div className={styles['description-input']} data-value={value}>
        <textarea
          onChange={this.handleChange}
          onKeyPress={this.handleKeyDown}
          ref={this.ref}
          value={value}
        />
      </div>
    );
  }
}

export default DescriptionInput;
