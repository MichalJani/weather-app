import React, { Component } from 'react';
import { Grid, Container } from '@material-ui/core';

import stores from '../../stores';
import { apiCaller, statisticsKeys, formatDailyForecast } from '../../utils';

import { Forecast } from '../Forecast';
import { CurrentWeather } from '../CurrentWeather';
import { StatisticsTable } from '../StatisticsTable';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      cityName: 'Wrocław',
      isLoading: true
    };
  }

  formatData = data => {
    const forecastData = formatDailyForecast(data.daily);

    forecastData.map(forecast =>
      statisticsKeys.map(key =>
        stores[key.trackerType].insert(forecast[key.shortName])
      )
    );

    const currentData = {
      temp: data.current.temp,
      humidity: data.current.humidity,
      date: data.current.dt,
      sky: data.current.weather[0]
    };

    this.setState({
      ...this.state,
      forecastData,
      currentData,
      isLoading: false
    });

    console.log(this.state);
  };

  updateWeather = async () => {
    try {
      const weatherData = await apiCaller();

      this.formatData(weatherData);
    } catch (err) {
      if (err) console.error('Cannot fetch Weather Data from API, ', err);
    }
  };

  componentDidMount() {
    this.updateWeather();
  }

  render() {
    const { isLoading, cityName, currentData, forecastData } = this.state;

    return (
      <Container maxWidth='md'>
        {isLoading && <h3>Loading Weather...</h3>}
        {!isLoading && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <CurrentWeather cityName={cityName} currentData={currentData} />
            </Grid>
            <Grid item xs={12}>
              <Forecast forecastData={forecastData} />
            </Grid>
            <Grid item xs={12}>
              <StatisticsTable />
            </Grid>
          </Grid>
        )}
      </Container>
    );
  }
}
