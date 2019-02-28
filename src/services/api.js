import axios from 'axios';
import uniqBy from 'lodash/uniqBy';
import getIconClass from './icons';

const API_URL = 'http://api.worldweatheronline.com/premium/v1/';
const API_KEY = process.env.REACT_APP_API_KEY;
const API_ERROR_MESSAGE = 'Could not connect to server';
console.log(API_KEY);
const http = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
    format: 'json',
    lang: 'en'
  }
});

http.interceptors.response.use(
  res => res.data,
  error => Promise.reject(API_ERROR_MESSAGE)
);

function findCities(query) {
  function formatResponse(res) {
    const cities = res.search_api.result.map(item => ({
      name: `${item.areaName[0].value}`,
      country: `${item.country[0].value}`,
      full_name: `${item.areaName[0].value}-${item.country[0].value}`,
      lat: item.latitude,
      lon: item.longitude
    }));
    return uniqBy(cities, 'full_name');
  }
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.get(`search.ashx?popular=no&q=${query}`);
      if (res.data && res.data.error) {
        throw res.data.error.reduce((acc, curr) => `${acc}${curr.msg}\n`, '');
      }
      const formattedResponse = formatResponse(res);
      resolve(formattedResponse);
    } catch (e) {
      reject(e);
    }
  });
}

function getWeather({ city, country }) {
  function formatResponse(res) {
    const weekDays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    const formatted = { ...res.data };
    formatted.current_condition[0].formatted_date = new Date().toDateString();
    formatted.current_condition[0].icon_class = getIconClass(
      formatted.current_condition[0].weatherCode
    );
    formatted.weather = formatted.weather.map(item => {
      const itemDate = new Date(item.date);
      return {
        ...item,
        icon_class: getIconClass(item.hourly[0].weatherCode),
        weekday: weekDays[itemDate.getDay()]
      };
    });
    return formatted;
  }
  return new Promise(async (resolve, reject) => {
    try {
      const params = {
        num_of_days: 7,
        tp: 12,
        q: `${city},${country}`
      };
      const res = await http.get('/weather.ashx', { params });
      resolve(formatResponse(res));
    } catch (e) {
      reject(API_ERROR_MESSAGE);
    }
  });
}

const API = {
  findCities,
  getWeather
};

export default API;
