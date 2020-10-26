import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#fff',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    table: {
        minWidth: 650,
    },
    center: {
      textAlign: 'center'
    }
  }),
);

const columns = ['Building Name', 'Building Type', 'Capacity', 'Vacancy', 'Occupancy']
const title = 'Building'
// const helperTxt = 'Fill up details'
const helperTxt = ''

interface IData {
  columns: string[]
  title: string
  helperTxt: string
}

export default function Create(props: IData) {
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
      <Button variant="contained" style={{backgroundColor:'#5e35b1',color:'#fff'}} onClick={handleOpen}>
        <AddIcon/>
        Create
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <Typography variant="h5" gutterBottom>
              Create {title} component
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                  {columns.map(col => {
                    return (
                      <TableRow>
                        <TableCell>
                          <div className={classes.center}>
                            <Typography variant="overline" display="block" gutterBottom>
                              {col}
                            </Typography>
                          </div>
                        </TableCell>
                        <TableCell>
                          <TextField size="small" autoComplete="off" id="standard-basic" label={col.toLowerCase} fullWidth helperText={helperTxt}/>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                  <TableRow>
                    <TableCell>
                      
                    </TableCell>
                    <TableCell>
                      <div style={{float:'right'}}>
                        <Button variant="contained" color="primary">
                          Create
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  </TableBody>
                </Table>
            </TableContainer>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
