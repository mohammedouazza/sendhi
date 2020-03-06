import React from 'react'
import { Slide, Grid, makeStyles, Paper, GridList } from '@material-ui/core'
import Projects from './Projects';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: 0,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderEndEndRadius: 20,
    },
    gridList: {
        width: "auto",
        overflow: "hidden",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },
  }));
  
const Home = (props: any) => {
    const classes = useStyles();

    return (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <GridList  spacing={1} className={classes.gridList}>
                <Projects />
                <Projects />
                <Projects />
                <Projects />
                <Projects />
            </GridList>
        </Slide>
    )
}

export default Home