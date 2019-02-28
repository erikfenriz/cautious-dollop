import React from 'react';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';

const StyledDaily = styled.div`
  width: 80px;
  flex-shrink: 0;
  font-size: 12px;
  margin: 1em 0;
  p {
    margin: 10px 0 20px 0;
  }
`;

const DaylyWeather = ({ day, measure }) => {
  const minTemp = day[`mintemp${measure}`];
  const maxTemp = day[`maxtemp${measure}`];
  return (
    <StyledDaily>
      <p>{day.weekday}</p>
      <WeatherIcon icon={day.icon_class} size={3} />
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        <p key={measure}>
          {minTemp} - {maxTemp} °{measure}
        </p>
      </ReactCSSTransitionGroup>
    </StyledDaily>
  );
};

DaylyWeather.propTypes = {
  day: PropTypes.object.isRequired,
  measure: PropTypes.string.isRequired
};

export default DaylyWeather;
