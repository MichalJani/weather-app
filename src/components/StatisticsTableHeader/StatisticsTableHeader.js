import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { statisticsValues } from '../../utils';

const useStyles = makeStyles(() => ({
  tableCell: {
    width: '15%',
    fontWeight: 'bold'
  }
}));

export const StatisticsTableHeader = () => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell>5-DAY STATISTICS</TableCell>
      {statisticsValues.map(value => (
        <TableCell
          key={value.valueType}
          align='right'
          className={classes.tableCell}
        >
          {value.valueType}
        </TableCell>
      ))}
    </TableRow>
  );
};
