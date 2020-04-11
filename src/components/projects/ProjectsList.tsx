import React from 'react'
import { Slide, GridList, makeStyles, GridListTile, GridListTileBar, IconButton, Button } from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Projects from '../home/Projects';
import AdservioLogo from '../../img/adservio.png'
import FreelanceLogo from '../../img/freelance.jpg'
import DigitalNomadeLogo from '../../img/digital_nomade.png'
import LearCorporationLogo from '../../img/lear_corporation.png'
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { EditProject, GetProject } from '../../store/actions/ProjectActions'

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
  
const ProjectsList = (props: any) => {
    const classes = useStyles();
    const { projects } = props
    return (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div>

            <Link to="/projects/create" className="btn btn-primary mb-2" >Add project</Link>
            
            <GridList className={classes.gridList} cols={1} cellHeight="auto" >
            
                { projects && projects.map((project: any, index: number) => (
                  <Link to={'projects/'+index} key={index} onClick={props.getProject(index)}>
                    <GridListTile cols={1}>
                     
                      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                        <div className="col-md-5 p-lg-5 mx-auto my-5">
                          <h1 className="display-4 font-weight-normal">{project.title}</h1>
                          <p className="lead font-weight-normal">{project.description}</p>
                        </div>
                        <div className="product-device shadow-sm d-none d-md-block">
                          <img src={FreelanceLogo} alt={project.title} width="60%" height="60%"/>
                        </div>
                        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                      </div>
                    </GridListTile>
                  </Link>
                ))}
            </GridList>
            </div>
        </Slide>
    )
}

const mapStateToProps = (state: any) => {
  return {
    projects: state.project.projects
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      getProject: (index: number) => dispatch(GetProject(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList)