import Link from 'next/link'
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CreateButton from '../../components/Create'
import Typography from '@material-ui/core/Typography'
import {IInvoice} from '../../interface/Interfaces'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; 
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) => createStyles({
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
  paper: {
    backgroundColor: theme.palette.background.paper,
    minWidth: 800,
    minHeight: 400,
    padding: 20,
  },
}));

interface ITable {
  columns: string[]
  rows: IInvoice[]
}

export default function tableInvoices(props: ITable) {

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
    fields: ['Building Name', 'Building Type', 'Capacity', 'Vacancy', 'Occupancy'],
    title: 'Building',
    //helperTxt: 'Fill up details',
    helperTxt: 'Minimum of 8 characters',
  }

  return (
    <div>
      {/* <CreateButton fields={create.fields} title={create.title} helperTxt={create.helperTxt}/>
      <br/> */}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.bldg} onClick={() => console.log(row.bldg)}>
                    <TableCell>
                      {row.bldg}
                    </TableCell>
                    <TableCell>
                      {`${row.unit} ${row.bed}`}
                    </TableCell>
                    <TableCell>
                      {row.refNo}
                    </TableCell>
                    <TableCell>
                      {row.billingDate}
                    </TableCell>
                    <TableCell>
                      {row.totalRemaining}
                    </TableCell>
                    <TableCell>

                      <SpringModal invoice={row}>
                        <div style={{float:'right'}}>
                          <ChevronRightIcon/>
                        </div>
                      </SpringModal>
                      {row.billingStatus === 'Paid' ? (
                        <div style={{color:'green'}}>
                          {row.billingStatus}
                        </div>
                      ): (
                        <div style={{color:'orange'}}>
                          {row.billingStatus}
                        </div>
                      )}
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

interface IProps {
  children: React.ReactNode
  invoice: IInvoice
}

export function SpringModal(props: IProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>
        {props.children}
      </div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
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
          <div className={classes.paper}>
            <Grid container>
              <Grid item xs={6}>
                <h2 id="spring-modal-title">{`${props.invoice.bldg} ${props.invoice.unit} ${props.invoice.bed}`}</h2>
              </Grid>
              <Grid item xs={6}>
                <h4 style={{float:'right'}}>
                    {props.invoice.billingStatus === 'Paid' ? (
                      <div style={{color:'green'}}>
                        <Typography variant="button">Billing Status : <b>{props.invoice.billingStatus}</b></Typography>
                      </div>
                    ): (
                      <div style={{color:'orange'}}>
                        <Typography variant="button">Billing Status : <b>{props.invoice.billingStatus}</b></Typography>
                      </div>
                    )}
                </h4>
              </Grid>
            </Grid>
            <p id="spring-modal-description">Monthly invoice of the tenant for the month of <b>{'July'}</b></p><br />
            <Grid container xs={12} spacing={3} style={{border: '1px solid #000', textAlign:'center'}}>
              <Grid item xs={6}>
                <Typography variant="button">Billing Date</Typography>
                <h3>
                  {props.invoice.billingDate}
                </h3>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="button">Due Date</Typography>
                <h3>
                  {props.invoice.dueDate}
                </h3>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="button">Total Amount</Typography>
                <h3>
                  {props.invoice.totalAmount}
                </h3>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="button">Total Remaining</Typography>
                <h3>
                  {props.invoice.totalRemaining}
                </h3>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="button">Billing Status</Typography>
                  <h3>
                    {props.invoice.billingStatus === 'Paid' ? (
                      <div style={{color:'green'}}>
                        {props.invoice.billingStatus}
                      </div>
                    ): (
                      <div style={{color:'orange'}}>
                        {props.invoice.billingStatus}
                      </div>
                    )}
                  </h3>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
