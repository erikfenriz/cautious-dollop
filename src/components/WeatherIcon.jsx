import React from 'react';
import PropTypes from 'prop-types';

const WeatherIcon = ({ icon, size = 1 }) => (
  <i className={`wi wi-day-${icon}`} style={{ fontSize: 10 * size }} />
);

WeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number
};

export default WeatherIcon;
