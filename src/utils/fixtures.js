export const statisticsKeys = [
  {
    shortName: 'mornTemp',
    longName: 'Morning temperature',
    trackerType: 'mornTempDataTracker'
  },
  {
    shortName: 'dayTemp',
    longName: 'Day temperature',
    trackerType: 'dayTempDataTracker'
  },
  {
    shortName: 'nightTemp',
    longName: 'Night temperature',
    trackerType: 'nightTempDataTracker'
  },
  {
    shortName: 'humidity',
    longName: 'Humidity',
    trackerType: 'humidityDataTracker'
  }
];

export const statisticsValues = [
  { valueType: 'min', method: 'showMin' },
  { valueType: 'max', method: 'showMax' },
  { valueType: 'mean', method: 'showMean' },
  { valueType: 'mode', method: 'showMode' }
];

export const backgroundSkyBlue = '#f1f9fd';
