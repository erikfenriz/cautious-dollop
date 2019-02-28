import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1em 0 0;
  a {
    display: block;
    padding: 1em;
    box-sizing: border-box;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #3f51b5;
    }
  }
`;

const CitiesList = ({ list }) => (
  <StyledList>
    {list.map(city => (
      <ListItem key={city.full_name} city={city} />
    ))}
  </StyledList>
);

CitiesList.propTypes = {
  list: PropTypes.array.isRequired
};

export default CitiesList;
