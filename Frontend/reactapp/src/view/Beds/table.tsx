import Link from 'next/link'
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
import CreateButton from '../../components/Create'
import Typography from '@material-ui/core/Typography'
import {IBeds} from '../../interface/Interfaces'

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
  columns: string[]
  rows: IBeds[]
}

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

  const create = {
    fields: ['Name', 'Building', 'Unit', 'Letter', 'Move In', 'Move Out'],
    title: 'Bed',
    //helperTxt: 'Fill up details',
    helperTxt: '',
  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>
          {props.title}
      </Typography>
      <br/>
      <CreateButton fields={create.fields} title={create.title} helperTxt={create.helperTxt}/>
      <br/>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {props.columns.map((column) => (
                  <TableCell
                    key={column}
                  >
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <Link href={`beds?details=${row.name}`}>
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.name} onClick={() => console.log(row.name)}>
                      <TableCell>
                        {row.name}
                      </TableCell>
                      <TableCell>
                        {row.building}
                      </TableCell>
                      <TableCell>
                        {row.unit}
                      </TableCell>
                      <TableCell>
                        {row.letter}
                      </TableCell>
                      <TableCell>
                        {row.moveIn}
                      </TableCell>
                      <TableCell>
                        {row.moveOut}
                      </TableCell>
                    </TableRow>
                  </Link>
                  
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
