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
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {IRoom} from '../../interface/Interfaces'

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
  rows: IRoom[]
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
    fields: ['Building','Room Number','Room Type','Capacity Range'],
    title: 'Room',
    //helperTxt: 'Fill up details',
    helperTxt: '',
  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>
          {props.title}
      </Typography>
      <br/>
      <CreateButton fields={create.fields} title={create.title} helperTxt={create.helperTxt} />
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
                <TableCell>
                  Option
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        <TableCell>
                          {row.bldg}
                        </TableCell>
                        <TableCell>
                          {row.number}
                        </TableCell>
                        <TableCell>
                          {row.type}
                        </TableCell>
                        <TableCell>
                          {row.percentageCapacity}
                        </TableCell>
                      <TableCell>
                      <Link href={`units?v=${row.id}&building=${row.bldg}&unit=${row.number}`}>
                        <VisibilityIcon/>
                      </Link>
                        <SettingsApplicationsIcon onClick={() => roomSettings()}/>
                      </TableCell>
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

const roomSettings = () => {
  console.log('====================================');
  console.log('hello world');
  console.log('====================================');
}