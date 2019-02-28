import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';

const StyledWeather = styled.div`
  text-align: left;
  h2,
  h3 {
    font-weight: normal;
  }
  .weather__data {
    color: #3f51b5;
    display: flex;
    align-items: center;
    margin: 1em 0;
    p {
      display: block;
      width: 150px;
      font-size: 4em;
      margin: 0;
    }
  }
`;

const CurrentWeather = ({ data, measure }) => (
  <StyledWeather>
    <h2>{data.formatted_date}</h2>
    <h3>{data.weatherDesc[0].value}</h3>
      <div className="weather__data" key={measure}>
        <p>{measure === 'C' ? `${data.temp_C}°C` : `${data.temp_F}°F`}</p>
        <WeatherIcon icon={data.icon_class} size={6} />
      </div>
  </StyledWeather>
);

CurrentWeather.propTypes = {
  data: PropTypes.object.isRequired,
  measure: PropTypes.string.isRequired
};

export default CurrentWeather;
