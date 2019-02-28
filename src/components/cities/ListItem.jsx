import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({ city }) => (
  <li>
    <Link to={`/weather?city=${city.name}&country=${city.country}`}>
      {city.name} ({city.country})
    </Link>
  </li>
);

ListItem.propTypes = {
  city: PropTypes.object.isRequired
};

export default ListItem;
