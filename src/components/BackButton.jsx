import React from 'react';
import styled from 'styled-components';
import LeftArrow from '../assets/img/left-arrow.svg';

const StyledButton = styled.button`
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  img {
    margin: auto;
    max-width: 100%;
  }
`;
const BackButton = () => (
  <StyledButton>
    <img src={LeftArrow} alt="back" title="Go back" />
  </StyledButton>
);

export default BackButton;
