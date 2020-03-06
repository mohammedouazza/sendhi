import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import './App.css';
import Header from './components/layout/Header';
import { makeStyles, CssBaseline, Slide } from '@material-ui/core';
import Sidebar from './components/layout/Sidebar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ProjectsList from './components/projects/ProjectsList';
import ExperiencesList from './components/experiences/ExperiencesList';
import EducationList from './components/Education/EducationList';
import ContactMe from './components/ContactMe/ContactMe';


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
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}))



function App(props: any) {
  const classes = useStyles();
  const open = props.open
  return (
    <div className={classes.root}>
      <BrowserRouter >
        <CssBaseline />
        <Header />
        <Sidebar />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          
            <Switch >
                <Route exact path='/' component={Home} />
                <Route exact path='/projects' component={ProjectsList} />
                <Route exact path='/experiences' component={ExperiencesList} />
                <Route exact path='/education' component={EducationList} />
                <Route exact path='/contact' component={ContactMe} />
            </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps= (state: any) => {
  //console.log(state)
  return {
      open: state.header.sidebarOpen
  }
}

export default connect(mapStateToProps)(App)
