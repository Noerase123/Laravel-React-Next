import Link from 'next/link'
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
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
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal'
import { useSpring, animated } from 'react-spring/web.cjs';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import {IUnit} from '../../interface/Interfaces'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    width: '100%',
  },
  container: {
    minHeight: 600,
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    minWidth: 400,
    minHeight: 250,
    padding: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

interface ITable {
  title: string
  columns: string[]
  rows: IUnit[]
}

export default function table(props: ITable) {

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false)

  const closeSnackbar = () => {
    setOpen(false)
  }

  const openSnackbar = () => {
    setOpen(true)
  }

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
      <br />
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
                        <RoomSetting title={`${row.bldg} ${row.number}'s`}>
                          <SettingsApplicationsIcon/>
                        </RoomSetting>
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

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

interface IModal {
  children: React.ReactNode
  title: string
}
function RoomSetting(props:IModal) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      <span onClick={handleOpen}>
        {props.children}
      </span>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paperModal}>
            <Typography variant="h5">{props.title} settings</Typography>
            <br />
            <Grid container xs={12}>
              <Grid item xs={6} style={{textAlign:'center'}}>
                <Paper style={{minHeight:88}}>
                  <Typography>Change of Rooms</Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Rooms</InputLabel>
                    <Select
                      value={age}
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Paper>
              </Grid>

              <Grid item xs={6} style={{textAlign:'center'}}>
                <Paper style={{minHeight:88}}>
                  <Typography>Number of Rooms</Typography>
                  <br/>
                  <Typography>{age}</Typography>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <br />
                <div style={{float:'right'}}>
                  <Button
                    variant="contained"
                    style={{ marginRight: 10 }}
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleClose}>
                    Save
                  </Button>
                </div>
              </Grid>
              
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
