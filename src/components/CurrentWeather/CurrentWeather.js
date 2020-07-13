import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { backgroundSkyBlue } from '../../utils';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5vh',
    padding: '5%',
    backgroundColor: backgroundSkyBlue
  },
  weather: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '310px'
  },
  temp: {
    fontSize: '50px',
    fontWeight: 'bold'
  },
  weatherDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export const CurrentWeather = ({ cityName, currentData }) => {
  const classes = useStyles();
  const { sky, temp, humidity } = currentData;

  return (
    <Paper className={classes.container}>
      <h2>{cityName}</h2>
      <div className={classes.weather}>
        <div className={classes.weatherDetails}>
          <i className={`owf owf-${sky.id} owf-5x`} />
          <div>{sky.description}</div>
        </div>
        <div className={classes.weatherDetails}>
          <div className={classes.temp}>{temp}°C</div>
          <div className={classes.humidity}>Humidity: {humidity}</div>
        </div>
      </div>
    </Paper>
  );
};

CurrentWeather.propTypes = {
  cityName: PropTypes.string.isRequired,
  currentData: PropTypes.shape({
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    sky: PropTypes.object.isRequired,
    temp: PropTypes.number.isRequired
  }).isRequired
};
