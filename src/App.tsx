import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import { makeStyles, CssBaseline } from '@material-ui/core';
import Sidebar from './components/layout/Sidebar';
import Container from './components/layout/Container';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  container: {
    marginTop: 64,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))



function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Container />
    </div>
  );
}

export default App;
