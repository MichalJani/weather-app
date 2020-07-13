import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { ForecastDayCard } from '../ForecastDayCard';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

export const Forecast = ({ forecastData }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {forecastData.map(day => (
        <ForecastDayCard key={day.date} day={day} />
      ))}
    </div>
  );
};

Forecast.propTypes = {
  forecastData: PropTypes.arrayOf(
    PropTypes.shape({
      minTemp: PropTypes.number.isRequired,
      maxTemp: PropTypes.number.isRequired,
      dayTemp: PropTypes.number.isRequired,
      mornTemp: PropTypes.number.isRequired,
      nightTemp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      date: PropTypes.number.isRequired,
      sky: PropTypes.object.isRequired
    }).isRequired
  ).isRequired
};
