import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const wrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '16px 20px',
  margin: '0px',
  border: '2px solid rgb(223, 223, 227)',
  borderRadius: '0px 5px 5px',
  outline: '0px',
  boxShadow: 'none',
  backgroundColor: 'rgb(255, 255, 255)',
  color: 'rgb(205, 205, 205)',
  transition: 'border-color 0.2s ease 0s',
  position: 'relative',
  fontSize: '15px',
};

const button = {
  marginLeft: '1em',
  display: 'block',
  border: '0px',
  cursor: 'pointer',
  height: '27px',
  lineHeight: '27px',
  fontSize: '12px',
  fontWeight: 600,
  borderRadius: '3px',
  padding: '0px 14px',
  backgroundColor: 'rgb(121, 130, 145)',
  color: 'rgb(255, 255, 255)',
  marginRight: '8px',
};

export default class Control extends React.Component {
  static propTypes = {
    field: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: ''
  };

  // The selection to maintain for the input element
  _sel = 0;

  // The input element ref
  _el = null;

  componentDidMount() {
    // Manually validate PropTypes - React 19 breaking change
    PropTypes.checkPropTypes(Control.propTypes, this.props, 'prop', 'Control');
    // Set a default if there is not one already:
    if ( !this.props.value ) {
      this.props.onChange( this.generateId() );
    }
  }

  // NOTE: This prevents the cursor from jumping to the end of the text for
  // nested inputs. In other words, this is not an issue on top-level text
  // fields such as the `title` of a collection post. However, it becomes an
  // issue on fields nested within other components, namely widgets nested
  // within a `markdown` widget. For example, the alt text on a block image
  // within markdown.
  // SEE: https://github.com/decaporg/decap-cms/issues/4539
  // SEE: https://github.com/decaporg/decap-cms/issues/3578
  componentDidUpdate() {
    if (this._el && this._el.selectionStart !== this._sel) {
      this._el.setSelectionRange(this._sel, this._sel);
    }
  }

  handleChange = e => {
    this._sel = e.target.selectionStart;
    this.props.onChange(e.target.value);
  };

  generateId = () => {
    const usePrefix = this.props.field.get('prefix');
    const prefix = usePrefix ? usePrefix + '-' : '';
    return prefix + shortid();
  };


  render() {
    const { field, onChange, forID, value, classNameWrapper, setActiveStyle, setInactiveStyle } = this.props;

  return (
    <div style={wrapper}>
      <input
        type='hidden'
        id={forID}
        value={value}
        onChange={(e) => onChange(e.target.value.trim())}
      />
      <span
        style={{
          lineHeight: '1.6em',
        }}>
        {value || this.generateId()}
      </span>
      { field.get('regenerate', false ) ? (
        <button
          onClick={() => {
            onChange(this.generateId());
          }}
          style={button}>
          Regenerate ID
        </button>
      ) : '' }
    </div>
  );
  }
}

