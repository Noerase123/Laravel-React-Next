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
import {IBuilding, IColumn} from '../interface/Interfaces'
import Buttons from '../components/Buttons'
import Typography from '@material-ui/core/Typography'

// interface Column {
  
//   id: number;
//   label: string;
//   minWidth?: number;
//   align?: 'right';
//   format?: (value: number) => string;
// }

// const columns: Column[] = [
//   { id: 1, label: 'Name', minWidth: 170 },
//   { id: 2, label: 'Type', minWidth: 100 },
//   {
//     id: 3,
//     label: 'Capacity',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 4,
//     label: 'Vacancy',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 5,
//     label: 'Occupancy',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toFixed(2),
//   },
// ];

// function createData(name: string, type: string, capacity: number, vacancy: number, occupancy: number): IBuilding {
//   return { name, type, capacity, vacancy, occupancy };
// }

// const rows = [
//   createData('Amsterdam','First Class', 100,30,70),
//   createData('Athens','Deluxe', 100,30,70),
//   createData('Hong Kong','Deluxe', 100,30,70),
//   createData('Rio','Deluxe', 100,30,70),
//   createData('Paris','Deluxe', 100,30,70),
//   createData('Sydney','First Class', 100,30,70),
//   createData('Auckland','First Class', 100,30,70),
//   createData('Seoul','Deluxe', 100,30,70),
//   createData('Tokyo','Deluxe', 100,30,70),
//   createData('Kyoto','Deluxe', 100,30,70),
//   createData('New York','First Class', 100,30,70),
//   createData('Singapore','Deluxe', 100,30,70),
//   createData('London','Deluxe', 100,30,70),
// ];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    minHeight: 600,
  },
});

interface ITable {
  title: string
  columns: IColumn[]
  rows: IBuilding[]
}

export default function table(props: ITable) {

  // const {title, columns, rows } = props

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
    <div>
      <Typography variant="h5" gutterBottom>
          {props.title}
      </Typography>
      <br/>
      <Buttons/>
      <br/>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {props.columns.map((column) => (
                  <TableCell
                    key={column.id}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {props.columns.map((column) => {
                      // const value = row[column.id];
                      return (
                        <TableCell key={column.id}>
                          {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
                          {row[column.label]}
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
          count={props.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>  
    </div>
  );
}
