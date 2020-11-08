import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TenantDetails from './tenants/tenantDetails'
import Floor from '../components/floors/floor'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  rootPaper: {
    maxWidth: 345,
    margin: 10
  },
}));

interface IDetails {
    itemID: string
}

export default function BuildingView(props: IDetails) {
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
    <div className={classes.root}>
      <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Floors" {...a11yProps(0)} />
            {/* <Tab label="Units" {...a11yProps(1)} /> */}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Floor>
              <MyCard/>
            </Floor>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {/* <TenantDetails/> */}
          </TabPanel>
        </SwipeableViews>
    </div>
  );
}

export function MyCard() {
  const classes = useStyles();

  interface IRoom {
    label: string
    slug: string
  }

  const rooms: IRoom[] = [
    {
      label: '101 - 110',
      slug: '1'
    },
    {
      label: '111 - 120',
      slug: '10'
    },
    {
      label: '121 - 130',
      slug: '20'
    },
    {
      label: '131 - 140',
      slug: '30'
    },
    {
      label: '141 - 150',
      slug: '30'
    },
  ]

  return (
    <React.Fragment>
      {rooms.map(room => (
        <Card className={classes.rootPaper} onClick={() => console.log(room.slug)}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {room.label}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </React.Fragment>
  );
}
