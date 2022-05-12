import React, { useEffect } from 'react';
import { Box, Typography, Tabs, Tab, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './DashboardStyles';
import Details from './Details';
import Matches from './Matches';
import Messages from './Messages';
import Points from './Points';
import Posts from './Posts';
import purple from 'assets/purplebg.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { myChats } from 'store/slices/chat/extraReducers';
import { globalChatsSelectors } from 'store/slices/chat/index';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          style={{
            margin: '0rem 1rem 1rem 1rem',
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const classes = styles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const { tab } = useParams();
  const dispatch = useDispatch();

  const { loading, chats } = useSelector((state) => ({
    loading: state.chats.loading,
    chats: globalChatsSelectors.selectAll(state),
  }));

  useEffect(() => {
    if (loading) {
      dispatch(myChats());
    }
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    // console.log('newValue', newValue);
    // setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/dashboard/Posts');
        break;
      case 1:
        navigate('/dashboard/Messages');
        break;
      // case 2:
      //   navigate('/dashboard/Matches');
      //   break;
      case 2:
        navigate('/dashboard/Details');
        break;
      case 3:
        navigate('/dashboard/Points');
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    switch (tab) {
      case 'Posts':
        setValue(0);
        break;
      case 'Messages':
        setValue(1);
        break;
      // case 'Matches':
      //   setValue(2);
      //   break;
      case 'Details':
        setValue(2);
        break;
      case 'Points':
        setValue(3);
        break;

      default:
        setValue(0);
        break;
    }
  }, [tab]);

  return (
    <div
      style={{
        backgroundColor: '#fff',
        minHeight: '100vh',
      }}
    >
      <img
        src={purple}
        alt='orange'
        style={{
          width: '100vw',
          height: '20%',
          minHeight: 200,
          marginTop: '-2px',
        }}
      />
      <div className={classes.root}>
        <Paper position='static' style={{ marginLeft: '1rem' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='simple tabs example'
            variant='scrollable'
            scrollButtons='on'
            indicatorColor=''
          >
            <Tab label='Manage my posts' {...a11yProps(0)} />
            <Tab label='Messages (4)' {...a11yProps(1)} />
            {/* <Tab label='Matches' {...a11yProps(2)} /> */}
            <Tab label='My details' {...a11yProps(2)} />
            <Tab label='Points' {...a11yProps(3)} />
          </Tabs>
        </Paper>

        <TabPanel value={value} index={0}>
          <Posts />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Messages />
        </TabPanel>
        {/* <TabPanel value={value} index={2}>
          <Matches />
        </TabPanel> */}
        <TabPanel value={value} index={2}>
          <Details />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Points />
        </TabPanel>
      </div>
    </div>
  );
};

export default Dashboard;
