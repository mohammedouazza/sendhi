import React from 'react'
import { Slide, GridList, makeStyles, GridListTile, GridListTileBar, IconButton } from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Projects from '../home/Projects';
import AdservioLogo from '../../img/adservio.png'
import FreelanceLogo from '../../img/freelance.jpg'
import DigitalNomadeLogo from '../../img/digital_nomade.png'
import LearCorporationLogo from '../../img/lear_corporation.png'
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
    gridList: {
      
      //flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      width: '100%',
      height: '100%',
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
  
let projects = [
  {
    key: 1,
    title: 'Adserio Maroc',
    from: 'Septembre 2019',
    to: 'En cours...',
    job: 'Ingénieur fullstack React/Laravel',
    img: AdservioLogo 
  },
  {
    key: 2,
    title: 'Consultant indépendant, Maroc',
    from: 'Novembre 2018',
    to: 'Septembre 2019',
    job: 'Ingénieur Laravel',
    img: FreelanceLogo 
  },
  {
    key: 3,
    title: 'Digital Nomade SARL, France',
    from: 'Avril 2018',
    to: 'Octobre 2018',
    job: 'Stage PFE, Ingénieur Laravel',
    img: DigitalNomadeLogo 
  },
  {
    key: 4,
    title: 'Lear Corporation, Maroc',
    from: 'Septembre 2019',
    to: 'En cours...',
    job: 'Ingénieur fullstack React/Laravel',
    img: LearCorporationLogo 
  }
]
const ProjectsList = (props: any) => {
    const classes = useStyles();

    return (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <GridList className={classes.gridList} cols={1} cellHeight="auto" >
                { projects.map(project => (
                  <GridListTile key={project.key} cols={1}>
                    <img src={project.img} alt={project.title} width="60%" height="60%"/>
                    <GridListTileBar
                      title={<div className="text-center">{project.title}</div> }
                      subtitle={<span>{project.job}</span>}
                      className={classes.titleBar}
                    />
                  </GridListTile>
                ))}
            </GridList>
        </Slide>
    )
}

export default ProjectsList