import React from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { backgroundSkyBlue } from '../../utils';

import { StatisticsTableHeader } from '../StatisticsTableHeader';
import { StatisticsTableBody } from '../StatisticsTableBody';

const useStyles = makeStyles(() => ({
  tableContainer: {
    backgroundColor: backgroundSkyBlue
  }
}));

export const StatisticsTable = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table>
        <TableHead>
          <StatisticsTableHeader />
        </TableHead>
        <TableBody>
          <StatisticsTableBody />
        </TableBody>
      </Table>
    </TableContainer>
  );
};
