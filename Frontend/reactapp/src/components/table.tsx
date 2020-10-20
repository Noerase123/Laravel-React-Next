import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {ITable} from '../interface/Interfaces'

interface Column {
  
  id: 'name' | 'type' | 'capacity' | 'vacancy' | 'occupancy';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'type', label: 'Type', minWidth: 100 },
  {
    id: 'capacity',
    label: 'Capacity',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'vacancy',
    label: 'Vacancy',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'occupancy',
    label: 'Occupancy',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  type: string;
  capacity: number;
  vacancy: number;
  occupancy: number;
}

function createData(name: string, type: string, capacity: number, vacancy: number, occupancy: number): Data {
  return { name, type, capacity, vacancy, occupancy };
}

const rows = [
  createData('Amsterdam','First Class', 100,30,70),
  createData('Athens','Deluxe', 100,30,70),
  createData('Hong Kong','Deluxe', 100,30,70),
  createData('Rio','Deluxe', 100,30,70),
  createData('Paris','Deluxe', 100,30,70),
  createData('Sydney','First Class', 100,30,70),
  createData('Auckland','First Class', 100,30,70),
  createData('Seoul','Deluxe', 100,30,70),
  createData('Tokyo','Deluxe', 100,30,70),
  createData('Kyoto','Deluxe', 100,30,70),
  createData('New York','First Class', 100,30,70),
  createData('Singapore','Deluxe', 100,30,70),
  createData('London','Deluxe', 100,30,70),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    minHeight: 600,
  },
});

export default function table(props: ITable) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
