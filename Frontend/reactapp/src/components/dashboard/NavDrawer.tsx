import Link from 'next/link'
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
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AssessmentIcon from '@material-ui/icons/Assessment';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ApartmentIcon from '@material-ui/icons/Apartment';
import HotelIcon from '@material-ui/icons/Hotel';
import GroupIcon from '@material-ui/icons/Group';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { INavProps } from '../../interface/Interfaces'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {DEFAULT_COLOR} from '../../defaults/default'
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

export default function NavDrawer(props:INavProps) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [openRoom, setOpenRoom] = React.useState(false);
  const [openReport, setOpenReport] = React.useState(false);
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
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <Link href={pages.dashboard}>
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
              </ListItem>
            </Link>
            <Link href={pages.register}>
              <ListItem button>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="Register"/>
              </ListItem>
            </Link>
            
            <ListItem button onClick={handleClickRoom}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Rooms" />
              {openRoom ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openRoom} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href={pages.buildings}>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ApartmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Buildings" />
                  </ListItem>
                </Link>
              </List>
              <List component="div" disablePadding>
                <Link href={pages.units}>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Units" />
                  </ListItem>
                </Link>
              </List>
              <List component="div" disablePadding>
                <Link href={pages.beds}>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <HotelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Beds" />
                  </ListItem>
                </Link>
              </List>
            </Collapse>

            <ListItem button onClick={handleClickReport}>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Generate Reports"/>
              {openReport ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openReport} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href={pages.tenantReports}>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tenants" />
                  </ListItem>
                </Link>
              </List>
              <List component="div" disablePadding>
                <Link href={pages.roomsReports}>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <HotelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Rooms" />
                  </ListItem>
                </Link>
              </List>
              <List component="div" disablePadding>
                <Link href={pages.utilityReports}>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <FlashOnIcon />
                    </ListItemIcon>
                    <ListItemText primary="Utilities" />
                  </ListItem>
                </Link>
              </List>
            </Collapse>

        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}


const pages = {
  dashboard: '/',
  register: '/register/',
  tenantReports: '/tenantReports/',
  roomsReports: '/roomReports/',
  utilityReports: '/utilityReports/',
  buildings: '/buildings/',
  units: '/units/',
  beds: '/beds/'
}