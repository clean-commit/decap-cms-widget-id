import React from 'react';
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

export class Control extends React.Component {
  generateId() {
    const { field } = this.props;
    const usePrefix = field.get('prefix');
    const prefix = usePrefix ? usePrefix + '-' : '';
    return prefix + shortid();
  }

  render() {
    const { forID, value, onChange } = this.props;
    this.generateId = this.generateId.bind(this);
    if (!value) {
      onChange(this.generateId());
    }

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
        <button
          onClick={() => {
            onChange(this.generateId());
          }}
          style={button}>
          Regenerate ID
        </button>
      </div>
    );
  }
}

Control.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.node,
  classNameWrapper: PropTypes.string.isRequired,
};

Control.defaultProps = {
  value: '',
};

export const Widget = {
  // name that will be used in config.yml
  name: 'uuid',
  controlComponent: Control,
};
