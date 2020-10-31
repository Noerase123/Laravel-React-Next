import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
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
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paperModal: {
      backgroundColor: theme.palette.background.paper,
      minWidth: 500,
      padding: 30
    },
  }),
);

interface IData {
  tenants: ITenant[]
}

export default function TenantDetails(props: IData) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

          {props.tenants.map(res => (
              <Grid item xs={6}>
              <Paper className={classes.paper}>

                <Grid container justify="flex-start" alignItems="flex-start" spacing={3}>

                  <Grid item xs={12} style={{backgroundColor:'#dedede'}}>
                      <Avatar style={{ float: 'left' }} alt={res.bed} src="/static/images/avatar/1.jpg" />
                      <div>
                        <SpringModal tenant={res}>
                          <Typography style={{color:'#000'}}>{res.name}</Typography>
                        </SpringModal>
                        <Typography color="inherit">{res.email}</Typography>
                      </div>
                  </Grid>

                  <Grid item xs={6}>
                      <div style={{float:'left'}}>
                          <Typography>Province: {res.province}</Typography>
                          <Typography>City: {res.city}</Typography>
                          <Typography>House no.: {res.houseNum}</Typography>
                      </div>
                  </Grid>
                  
                  <Grid item xs={6}>
                  <div style={{float:'left'}}>
                      <Typography>Company : {res.company}</Typography>
                      <Typography>Occupation : {res.occupation}</Typography>
                      <Typography>Contact no.: {res.contactNum}</Typography>
                  </div>
                  </Grid>

                </Grid>

              </Paper>
          </Grid>
          ))}
        </Grid>
      </div>
  )
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
  tenant: ITenant
}

export function SpringModal(props: IModal) {
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
          <div className={classes.paperModal}>
            <Grid container xs={12}>
                <Grid item xs={6}>
                  xs 6
                </Grid>
                <Grid item xs={6}>
                  xs 6
                </Grid>
                <Grid item xs={6}>
                  xs 6
                </Grid>
                <Grid item xs={6}>
                  xs 6
                </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
