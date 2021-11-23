import React from 'react';
import './index.scss'

export function Button (props) {
  const { type = 'default', disabled } = props;
      return (
        <button {...props}
            className={`fantd-btn-${disabled ? 'disabled' : type}`}
            type="button"
        />
      )
}