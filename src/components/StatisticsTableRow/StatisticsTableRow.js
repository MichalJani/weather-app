import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '@material-ui/core';

import { statisticsValues } from '../../utils';
import stores from '../../stores';

export const StatisticsTableRow = ({ longName, trackerType }) => (
  <TableRow>
    <TableCell>{longName}</TableCell>
    {statisticsValues.map(value => {
      const { valueType, method } = value;

      return (
        <TableCell key={valueType} align='right'>
          {stores[trackerType][method]()}
        </TableCell>
      );
    })}
  </TableRow>
);

StatisticsTableRow.propTypes = {
  longName: PropTypes.string.isRequired,
  trackerType: PropTypes.string.isRequired
};
