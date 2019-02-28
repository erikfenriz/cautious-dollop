import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const switchHeight = 25;
const switchWidth = 50;
const switchPadding = 6;

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: ${switchWidth}px;
  height: ${switchHeight}px;
  margin: 0 5px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span {
      background-color: #3f51b5;
    }
    &:focus + span {
      box-shadow: 0 0 1px #3f51b5;
    }
    &:checked + span:before {
      transform: translateX(${switchWidth - switchHeight}px);
    }
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
    &:before {
      position: absolute;
      content: '';
      height: ${switchHeight - switchPadding}px;
      width: ${switchHeight - switchPadding}px;
      left: ${switchPadding / 2}px;
      bottom: ${switchPadding / 2}px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
`;

const SwitchButton = ({ checked, onChange }) => (
  <StyledLabel>
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span />
  </StyledLabel>
);

SwitchButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  labels: PropTypes.array
};

export default SwitchButton;
