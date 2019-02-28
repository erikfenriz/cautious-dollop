import React from 'react';
import styled from 'styled-components';
import LoaderImg from '../assets/img/waiting.svg';

const StyledLoader = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  img {
    width: 100px;
    height: 100px;
    display: block;
    margin: auto;
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => (
  <StyledLoader>
    <img src={LoaderImg} alt="loader" />
  </StyledLoader>
);

export default Loader;
