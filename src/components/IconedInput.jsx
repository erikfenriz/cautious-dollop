import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconedInput = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 1em auto;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: url(${p => p.icon}) no-repeat center center;
    position: absolute;
    right: 5px;
    top: 3px;
  }
  input {
    width: 100%;
    margin: 0;
    padding: 5px;
    box-sizing: border-box;
    border: solid #eee;
    border-width: 0 0 2px 0;
    text-align: center;
    &:focus {
      outline: none;
      border-color: #3f51b5;
    }
  }
`;

IconedInput.propTypes = {
  icon: PropTypes.string.isRequired
};

export default IconedInput;
