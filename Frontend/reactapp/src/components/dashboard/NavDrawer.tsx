// import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import BuildIcon from '@material-ui/icons/Build';
import AssessmentIcon from '@material-ui/icons/Assessment';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ApartmentIcon from '@material-ui/icons/Apartment';
import HotelIcon from '@material-ui/icons/Hotel';
import GroupIcon from '@material-ui/icons/Group';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { INavProps, ILink } from '../../interface/Interfaces'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {DEFAULT_COLOR} from '../../defaults/restData'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);


export const Link = (props: ILink) => {
  const router = useRouter()
  return (
    <a
      style={{textDecoration:'none',color:'#000'}}
      href="#"
      onClick={(e) => {
        e.preventDefault()
        // typically you want to use `next/link` for this usecase
        // but this example shows how you can also access the router
        // and use it manually
        router.push(props.href)
      }}
    >
      {props.children}
    </a>
  )
}

export default function NavDrawer(props:INavProps) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [openRoom, setOpenRoom] = React.useState(false);
  const [openReport, setOpenReport] = React.useState(false);
  const [openService, setOpenService] = React.useState(false);
  const [openBackDrop, setOpenBackDrop] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickRoom = () => {
    setOpenRoom(!openRoom);
  };

  const handleClickService = () => {
    setOpenService(!openService);
  };

  const handleClickReport = () => {
    setOpenReport(!openReport);
  };

  const handleCloseDrop = () => {
    setOpenBackDrop(false)
  }

  const backDrop = () => {
    return (
      <div>
        <Backdrop className={classes.backdrop} open={openBackDrop} onClick={handleCloseDrop}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )
  }
  interface IItemList {
    link: string
    iconName: any
    name: string
  }

  const navItems: IItemList[] = [
    {
      link : '/',
      iconName: <DashboardIcon/>,
      name: 'Dashboard'
    },
    {
      link : '/register',
      iconName: <PersonAddIcon/>,
      name: 'Register'
    },
    {
      link : '/billing',
      iconName: <AccountBalanceIcon/>,
      name: 'Payments'
    },
    {
      link : '/trends',
      iconName: <AssessmentIcon/>,
      name: 'Trends'
    },
  ]

  const roomItems: IItemList[] = [
    {
      link : '/buildings',
      iconName: <ApartmentIcon/>,
      name: 'Buildings'
    },
    {
      link : '/units',
      iconName: <HomeIcon/>,
      name: 'Units'
    },
    {
      link : '/beds',
      iconName: <HotelIcon/>,
      name: 'Beds'
    },
  ]

  const servicesItems: IItemList[] = [
    {
      link:'/cleaningServices',
      iconName: <LocalLaundryServiceIcon/>,
      name: 'Cleaning Services'
    },
    {
      link:'/repairServices',
      iconName: <BuildIcon/>,
      name: 'Repair Services'
    },
    {
      link:'/roomServices',
      iconName: <RoomServiceIcon/>,
      name: 'Room Services'
    },
  ]

  const reportItems: IItemList[] = [
    {
      link : '/tenantsReports/',
      iconName: <GroupIcon/>,
      name: 'Tenants Report'
    },
    {
      link : '/roomReports/',
      iconName: <HotelIcon/>,
      name: 'Rooms Report'
    },
    {
      link : '/utilityReports/',
      iconName: <FlashOnIcon/>,
      name: 'Utilities Report'
    },
  ]

  const settingsItems: IItemList[] = [
    {
      link: '/accountSettings',
      iconName: <MailIcon />,
      name: 'Account Settings'
    },
    {
      link: '/logout',
      iconName: <MailIcon />,
      name: 'Logout'
    }
  ]

  const ItemList = (dataArr: IItemList[],navType: number) => {
    // navType 1 = without subnavigation
    // navType 2 = with subnavigation
    if (navType !== 2) {
      return (
        <React.Fragment>
          {dataArr.map(data => (
            <Link href={data.link}>
              <ListItem button>
                <ListItemIcon>
                  {data.iconName}
                </ListItemIcon>
                <ListItemText primary={data.name}/>
              </ListItem>
            </Link>
          ))}
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          {dataArr.map(data => (
            <List component="div" disablePadding>
              <Link href={data.link}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    {data.iconName}
                  </ListItemIcon>
                  <ListItemText primary={data.name} />
                </ListItem>
              </Link>
            </List>
          ))}
        </React.Fragment>
      )
    }
  }

  return (
    <div className={classes.root}>
      {backDrop}
      <CssBaseline />
      <AppBar
        style={{backgroundColor:DEFAULT_COLOR}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {props.title}
          </Typography>
          <IconButton
            className={classes.menuButton}
            edge="end"
            aria-haspopup="true"
            color="inherit"
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} 
        style={{backgroundColor:'#5e35b1'}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        
        <div style={{textAlign:'center', backgroundColor:'#5e35b1'}}>
          <AccountCircle style={{ color: '#fff', height: 100, width: '100%' }} />
          <Typography id="personName" style={{color:'#fff',width: '100%', float:'right'}}>Mang Thomas</Typography>
          <Typography id="personDept" style={{color:'#fff',width: '100%', float:'right', marginBottom:20}}>UFC Brand Dept</Typography>
        </div>
        
        <Divider />
        <List style={{overflow:'auto'}}>

            {ItemList(navItems,1)}
            
            <ListItem button onClick={handleClickRoom}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Rooms" color="inherit" />
              {openRoom ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openRoom} timeout="auto" unmountOnExit>
              {ItemList(roomItems,2)}
            </Collapse>
            
            <ListItem button onClick={handleClickService}>
              <ListItemIcon>
                <RoomServiceIcon />
              </ListItemIcon>
              <ListItemText primary="Services" color="inherit" />
              {openService ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openService} timeout="auto" unmountOnExit>
              {ItemList(servicesItems,2)}
            </Collapse>

            <ListItem button onClick={handleClickReport}>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Generate Reports"/>
              {openReport ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openReport} timeout="auto" unmountOnExit>
              {ItemList(reportItems,2)}
            </Collapse>

        {/* </List> */}
        <Divider />
        {/* <List> */}
          {ItemList(settingsItems,1)}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <div style={{margin:100}}> */}
          {props.children}
        {/* </div> */}
      </main>
    </div>
  );
}
