export const formatDailyForecast = (dailyData, numForcastDays = 5) => {
  return dailyData
    .map(forecast => {
      const {
        temp: { min, max, day, morn, night },
        humidity,
        dt,
        weather
      } = forecast;

      return {
        minTemp: Math.round(min),
        maxTemp: Math.round(max),
        dayTemp: Math.round(day),
        mornTemp: Math.round(morn),
        nightTemp: Math.round(night),
        humidity: humidity,
        date: dt,
        sky: weather[0]
      };
    })
    .slice(0, numForcastDays);
};
