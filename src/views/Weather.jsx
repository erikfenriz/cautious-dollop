import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import API from '../services/api';
import CurrentWeather from '../components/CurrentWeather';
import DailyWeather from '../components/DailyWeather';
import FlexContainer from '../components/FlexContainer';
import SwitchButton from '../components/SwitchButton';
import BackButton from '../components/BackButton';
import CommonLayout from '../components/CommonLayout';
import Loader from '../components/Loader';

const StyledWeather = styled.div`
  h1 {
    font-size: 1.2em;
    flex-grow: 1;
    text-align: left;
    margin-left: 20px;
  }
`;

export default class Weather extends Component {
  state = {
    city: '',
    isCelsium: true,
    data: null
  };

  toggleMeasure = () => {
    this.setState(state => ({ isCelsium: !state.isCelsium }));
  };

  async componentDidMount() {
    const { city, country } = queryString.parse(this.props.location.search);
    const data = await API.getWeather({ city, country });
    this.setState(state => ({
      city,
      data
    }));
  }

  render() {
    const { isCelsium, data } = this.state;
    if (data) {
      return (
        <CommonLayout>
          <StyledWeather>
            <FlexContainer>
              <Link to="/">
                <BackButton />
              </Link>
              <h1>{data.request[0].query}</h1>
              <FlexContainer inline>
                <span>F</span>
                <SwitchButton
                  checked={isCelsium}
                  onChange={this.toggleMeasure}
                />
                <span>C</span>
              </FlexContainer>
            </FlexContainer>
            <CurrentWeather
              data={data.current_condition[0]}
              measure={isCelsium ? 'C' : 'F'}
            />
            <FlexContainer overflowed>
              {data.weather.map(day => (
                <DailyWeather
                  key={day.date}
                  day={day}
                  measure={isCelsium ? 'C' : 'F'}
                />
              ))}
            </FlexContainer>
          </StyledWeather>
        </CommonLayout>
      );
    } else {
      return <Loader />;
    }
  }
}
