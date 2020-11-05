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
import PersonIcon from '@material-ui/icons/Person';
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
      minWidth: 800,
      minHeight: 500,
      padding: 20,
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

                  <Grid item xs={12} style={{ backgroundColor: '#dedede' }}>
                      <SpringModal tenant={res}>
                        <Avatar style={{ float: 'left' }} alt={res.bed} src="/static/images/avatar/1.jpg" />
                      </SpringModal>
                      <div>
                        <Typography style={{color:'#000'}}>{res.name}</Typography>
                        <Typography color="inherit">{res.email}</Typography>
                      </div>
                  </Grid>
                  
                  <Grid item xs={12} style={{textAlign:'left'}}>
                      <div>
                        <Typography>Bed Rate : {res.rentalRate}</Typography>
                          <Typography>Move In: {res.moveIn}</Typography>
                          <Typography>Move Out: {res.moveOut}</Typography>
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

  const name = props.tenant.name
  const contactNum = props.tenant.contactNum
  const email = props.tenant.email
  const city = props.tenant.city
  const province = props.tenant.province
  const houseNum = props.tenant.houseNum
  const company = props.tenant.company
  const occupation = props.tenant.occupation

  interface IAllData {
    label: string
    title: string
  }

  const arrData = [name,contactNum,email,city]
  const allData:IAllData[] = [
    {
      label: 'Name',
      title: name 
    },
    {
      label: 'Phone',
      title: contactNum 
    },
    {
      label: 'Email',
      title: email 
    },
    {
      label: 'City',
      title: city
    },
    {
      label: 'Province',
      title: province 
    },
    {
      label: 'House #',
      title: houseNum 
    },
    {
      label: 'Company',
      title: company 
    },
    {
      label: 'Occupation',
      title: occupation 
    },
  ]

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
              <Grid item xs={3} style={{backgroundColor:'#e1e1e1', padding:15}}>
                <PersonIcon style={{height:'100%',width:'100%',display:'block', backgroundColor:'#fefefe'}}/>
              </Grid>
              <Grid item xs={9} style={{ backgroundColor: '#cdcdcd', padding: 30 }}>
                {arrData.map(response => (
                  <div>
                    <Typography>{response}</Typography>
                  </div>
                ))}
              </Grid>
            </Grid>
            <br/>
            <Grid xs={12}>
              <div style={{backgroundColor:'#808080'}}>
                <Typography variant="overline" display="block" style={{padding:10, color:'#fff'}} gutterBottom>
                  Basic Information
                </Typography>
              </div>
              <div style={{backgroundColor:'#e1e1e1', height:400, overflow:'scroll'}}>
                  <div style={{margin:20}}>
                    {allData.map(data => (
                      <div>
                        <Typography>{data.label} {data.title}</Typography><br/>
                      </div>
                    ))}
                  </div>
              </div>
            </Grid>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
