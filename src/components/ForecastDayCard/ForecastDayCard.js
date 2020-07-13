import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Card,
  CardContent,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { backgroundSkyBlue } from '../../utils';

const useStyles = makeStyles(() => ({
  card: {
    flexGrow: 1,
    width: '20%',
    backgroundColor: backgroundSkyBlue
  },
  cardContent: {
    textAlign: 'center',
    padding: '20px 8px'
  },
  title: {
    paddingBottom: '10px'
  },
  description: {
    paddingTop: '5px',
    fontSize: '12px',
    color: 'dark-grey',
    height: '35px'
  }
}));

export const ForecastDayCard = ({ day }) => {
  const classes = useStyles();
  const { date, dayTemp, humidity, sky } = day;

  let newDate = new Date();
  newDate.setTime(date * 1000);
  const weekDay = moment(newDate).format('dddd');
  const adjustedWeekDay = useMediaQuery('(min-width:500px)')
    ? weekDay
    : weekDay.substring(0, 3);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <div className={classes.title}>{adjustedWeekDay}</div>
        <i className={`owf owf-${sky.id} owf-3x`} />
        <Typography variant='h6'>{dayTemp}°C</Typography>
        <div>H: {humidity}</div>
        <div className={classes.description}>{sky.description}</div>
      </CardContent>
    </Card>
  );
};

ForecastDayCard.propTypes = {
  day: PropTypes.shape({
    dayTemp: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
    sky: PropTypes.object.isRequired
  }).isRequired
};
