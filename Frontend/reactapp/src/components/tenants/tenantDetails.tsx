import React from 'react';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import PersonIcon from '@material-ui/icons/Person';
import Tooltip from '@material-ui/core/Tooltip'
import { ITenant } from '../../interface/Interfaces'

import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    rootTab: {
      backgroundColor: theme.palette.background.paper,
      width: '100%',
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
                      <div>
                        <Tooltip title="Click to see more" arrow>
                          <Grid container xs={12}>
                            <Grid xs={4}>
                            <Avatar alt={res.bed} src="/static/images/avatar/1.jpg" />
                            </Grid>
                            <Grid xs={4}>
                            <Typography style={{color:'#000'}}>{res.name}</Typography>
                            <Typography color="inherit">{res.email}</Typography>
                            </Grid>
                            <Grid xs={4}>
                              <KeyboardArrowRightIcon style={{float:'right',height:'100%'}}/>
                            </Grid>
                          </Grid>
                        </Tooltip>
                      </div>
                      </SpringModal>
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
              <Grid item xs={3} style={{backgroundColor: '#e1e1e1', padding:15}}>
                <PersonIcon style={{ height: '100%', width: '100%', display: 'block', borderRadius: '100px', backgroundColor: '#fefefe' }} />
              </Grid>
              <Grid item xs={9} style={{ backgroundColor: '#cdcdcd', borderRadius:'10px', padding: 15 }}>
                {arrData.map(response => (
                  <div>
                    <Typography>{response}</Typography>
                  </div>
                ))}
                <PersonIcon style={{float:'right',height:'70%'}}/>
              </Grid>
            </Grid>
            <br/>
            <Grid xs={12}>
              <InfoTabs>
                <div style={{backgroundColor:'#e1e1e1', height:320, overflow:'scroll'}}>
                    <div style={{margin:20}}>
                      {allData.map(data => (
                        <div>
                          <Typography>{data.label} {data.title}</Typography><br/>
                        </div>
                      ))}
                    </div>
                </div>
              </InfoTabs>
              
            </Grid>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

interface IPropsTabs {
  children: React.ReactNode
}

export function InfoTabs(props: IPropsTabs) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.rootTab}>
      <AppBar position="static" style={{backgroundColor:'#fff'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          style={{backgroundColor:'#808080',color:'#fff'}}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Personal" {...a11yProps(0)} />
          <Tab label="Rent" {...a11yProps(1)} />
          <Tab label="Billing" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {props.children}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {props.children}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {props.children}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
