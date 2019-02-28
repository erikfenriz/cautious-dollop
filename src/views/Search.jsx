import React, { Component } from 'react';
import styled from 'styled-components';
import API from '../services/api';
import SearchIcon from '../assets/img/search.svg';
import IconedInput from '../components/IconedInput';
import CitiesList from '../components/cities/CitiesList';
import CommonLayout from '../components/CommonLayout';

const StyledSeachForm = styled.form`
  .form__position {
    cursor: pointer;
    border-bottom: 2px dotted #eee;
    transition: 0.2s linear all;
    &:hover {
      border-color: #3f51b5;
    }
  }
  .form__error {
    color: #f44336;
  }
`;

export default class Search extends Component {
  state = {
    query: '',
    error: '',
    list: []
  };

  handleGeoposition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        this.setState(
          { query: `${coords.latitude}, ${coords.longitude}` },
          this.getCities
        );
      });
    } else {
      this.setState({ error: 'Failed to get a position' });
    }
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.getCities();
  };

  getCities = async () => {
    try {
      const { query } = this.state;
      const list = await API.findCities(query);
      this.setState({ list });
    } catch (e) {
      this.setState({ error: e });
    }
  };

  render() {
    const { query, list, error } = this.state;
    return (
      <CommonLayout>
        <StyledSeachForm onSubmit={this.handleSubmit}>
          <IconedInput icon={SearchIcon}>
            <input
              type="text"
              name="query"
              placeholder="City"
              value={query}
              onChange={this.handleChange}
            />
          </IconedInput>
          <p>
            <small>or</small>
          </p>
          <p>
            use my{' '}
            <span className="form__position" onClick={this.handleGeoposition}>
              current position
            </span>
          </p>
          {error && <p className="form__error">{error}</p>}
          <CitiesList list={list} />
        </StyledSeachForm>
      </CommonLayout>
    );
  }
}
