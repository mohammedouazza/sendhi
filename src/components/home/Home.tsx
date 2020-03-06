import React from 'react'
import { Slide, makeStyles, GridList, GridListTile } from '@material-ui/core'
import Projects from './Projects';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    
    gridList: {
        width: "100%",
        overflow: "hidden",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },
    gridListTitle : {
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
  }));
  
const Home = (props: any) => {
    const classes = useStyles();
    console.log(props)
    return (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <GridList  className={classes.gridList}>
                <GridListTile style={{width: "100%", height: "auto"}} className={classes.gridListTitle} key={1} rows={1}>
                  <Link to="/projects"><Projects type="Projects"/></Link>
                </GridListTile>
                <GridListTile style={{width: "100%", height: "auto"}} className={classes.gridListTitle} key={2} rows={1}>
                  <Link to="/experiences"><Projects type="Experiences"/></Link>
                </GridListTile>
                <GridListTile style={{width: "100%", height: "auto"}} className={classes.gridListTitle} key={3} rows={1}>
                  <Link to="/education"><Projects type="Education"/></Link>
                </GridListTile>
                <GridListTile style={{width: "100%", height: "auto"}} className={classes.gridListTitle} key={4} rows={1}>
                  <Link to="/contact"><Projects type="Contact Me"/></Link>
                </GridListTile>
            </GridList>
        </Slide>
    )
}

export default Home