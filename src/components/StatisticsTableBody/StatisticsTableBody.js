import React from 'react';

import { statisticsKeys } from '../../utils';

import { StatisticsTableRow } from '../StatisticsTableRow';

export const StatisticsTableBody = () => {
  return (
    <>
      {statisticsKeys.map(key => {
        const { shortName, longName, trackerType } = key;

        return (
          <StatisticsTableRow
            key={shortName}
            longName={longName}
            trackerType={trackerType}
          />
        );
      })}
    </>
  );
};

StatisticsTableBody.propTypes = {};
