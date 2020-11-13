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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {IBuilding} from '../interface/Interfaces'
import {DEFAULT_COLOR, BLDGS, FLOORS, ROOMTYPE, BLDGTYPE} from '../defaults/restData'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
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

interface IData {
  fields: string[]
  title: string
  helperTxt: string
}

export default function Create(props: IData) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [building, setBuilding] = React.useState('');

  const handleChangeBuilding = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBuilding(event.target.value as string);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const bldgs: IBuilding[] = BLDGS
  const floors: string[] = FLOORS
  const roomType: string[] = ROOMTYPE
  const bldgType: string[] = BLDGTYPE

  return (
    <div>
      <Button variant="contained" style={{backgroundColor:DEFAULT_COLOR,color:'#fff'}} onClick={handleOpen}>
        <AddIcon/>
        Create {props.title}
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
              Create {props.title} component
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                  {props.fields.map(col => {
                    return (
                      <TableRow>
                        <TableCell>
                          <div className={classes.center}>
                            <Typography variant="overline" display="block" gutterBottom>
                              {col}
                            </Typography>
                          </div>
                        </TableCell>
                        {col === 'Building' ? (
                          <TableCell>
                            <FormControl className={classes.formControl} fullWidth>
                              <InputLabel id="demo-simple-select-label">select building</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={building}
                                onChange={handleChangeBuilding}
                              >
                                {bldgs.map(res => (
                                  <MenuItem value={res.name}>{res.name}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </TableCell>
                        ) : (
                            <React.Fragment>
                              {col === 'Floor' ? (
                                <TableCell>
                                  <FormControl className={classes.formControl} fullWidth>
                                    <InputLabel id="demo-simple-select-label">select floor</InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={building}
                                      onChange={handleChangeBuilding}
                                    >
                                      {floors.map(res => (
                                        <MenuItem value={res}>{res}</MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </TableCell>
                              ) : (
                                  <React.Fragment>
                                    {col === 'Room Type' ? (
                                      <TableCell>
                                        <FormControl className={classes.formControl} fullWidth>
                                          <InputLabel id="demo-simple-select-label">select type</InputLabel>
                                          <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={building}
                                            onChange={handleChangeBuilding}
                                          >
                                            {roomType.map(res => (
                                              <MenuItem value={res}>{res}</MenuItem>
                                            ))}
                                          </Select>
                                        </FormControl>
                                      </TableCell>
                                    ) : (
                                      <React.Fragment>
                                          {col === 'Building Type' ? (
                                            <TableCell>
                                              <FormControl className={classes.formControl} fullWidth>
                                                <InputLabel id="demo-simple-select-label">select type</InputLabel>
                                                <Select
                                                  labelId="demo-simple-select-label"
                                                  id="demo-simple-select"
                                                  value={building}
                                                  onChange={handleChangeBuilding}
                                                >
                                                  {bldgType.map(res => (
                                                    <MenuItem value={res}>{res}</MenuItem>
                                                  ))}
                                                </Select>
                                              </FormControl>
                                            </TableCell>
                                          ) : (
                                              
                                            <TableCell>
                                                <TextField
                                                  size="small"
                                                  autoComplete="off"
                                                  id="standard-basic"
                                                  label={col.toLowerCase}
                                                  fullWidth
                                                  helperText={props.helperTxt}
                                                />
                                            </TableCell> 
                                          )}
                                      </React.Fragment>
                                    )}
                                  </React.Fragment>
                              )} 
                            </React.Fragment>
                        )}
                      </TableRow>
                    )
                  })}
                  <TableRow>
                    <TableCell>
                      
                    </TableCell>
                    <TableCell>
                      <div style={{float:'right'}}>
                        <Button variant="contained" style={{backgroundColor:DEFAULT_COLOR, color:'#fff'}}>
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
