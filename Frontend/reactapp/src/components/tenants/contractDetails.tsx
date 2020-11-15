import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import DescriptionIcon from '@material-ui/icons/Description';
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import { ITenant } from '../../interface/Interfaces'
 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '100%',
      width:'100%'
    },
    paperContract: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paperModal: {
      backgroundColor: theme.palette.background.paper,
      minWidth: 200,
      minHeight: 100,
      padding: 20
    },
  }),
);

interface IData {
  tenants: ITenant[]
}

export default function ContractDetails(props: IData) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>

          {props.tenants.map(res => (
            <Grid item xs={3}>
            <Tooltip title="Click to download contract" arrow>
              <Paper className={classes.paper}>
                <TransitionsModal>
                  <DescriptionIcon />
                  <Typography style={{color:'#000'}}>{`${res.name}'s contract`}</Typography>
                </TransitionsModal>
              </Paper>
            </Tooltip>
            </Grid>
          ))}
  
          <Grid item xs={12}>
            <Typography variant="button" display="block" gutterBottom>
            Bed History
            </Typography>
            <Grid container spacing={1}>
              {[1,2,3].map(bed => (
                <Grid item xs={12}>
                  <Paper className={classes.paperContract}>
                    <Typography>
                      Bed A - Move In
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
          
        </Grid>
      </div>
  )
}

interface IModal {
  children: React.ReactNode
}

export function TransitionsModal(props: IModal) {
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
          <div className={classes.paperModal}>
            <h2 id="transition-modal-title">Download Contract?</h2>
            <Grid container>
              <Grid item xs={12}>
                <Button
                  style={{ marginRight: 10 }}
                  variant="contained"
                  onClick={handleClose}
                >
                  No
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClose}
                >
                  Yes
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
