import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useValue } from '../customHooks/projectHooks'
import { connect } from 'react-redux'
import { EditProject, GetProject } from '../../store/actions/ProjectActions'
import { Slide, TextField, Button } from '@material-ui/core'
import { useHistory, Link } from "react-router-dom"

const SingleProject = (props: any) => {

    
    const history = useHistory()
    useEffect(() => {
        //props.getProject(props.match.params.id)
        if(!props.project.title){
            history.push('/projects')
        }
        return () => {
        }
    })
    
    console.log(props.project)
    const title = useValue(props.project.title)
    const description = useValue(props.project.description)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const newProject = {
            title: title.value,
            description: description.value
        }
        title.handleError(!newProject.title ? true : false)

        if(!title.error && !description.error) {
            props.editProject(newProject, props.match.params.id)
            history.push('/projects')
        }
        
        console.log(newProject)
    }

    return (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <Form onSubmit={handleSubmit} style={{margin: "auto"}} className="col-11 col-md-6 col-lg-6">
                <TextField 
                    required
                    error={title.error}
                    helperText={title.error ? "Title required" : ""}
                    className="mb-2 col" 
                    id="outlined-basic" 
                    label="Project title" 
                    variant="outlined" 
                    defaultValue={props.project.title}
                    value={ title.value} 
                    onChange={title.handleChange} /><br/>
                <TextField
                    required
                    error={description.error}
                    helperText={description.error ? "Description required" : ""}
                    id="outlined-textarea"
                    placeholder="Description"
                    multiline
                    variant="outlined"
                    defaultValue={props.project.description}
                    value={ description.value}
                    onChange={description.handleChange}
                    className="mb-2 col"
                /><br/>
                <Button type="submit" color="primary" className="btn btn-primary"> Submit </Button>
                <Link to="/projects" className="btn btn-warning" >Retour</Link>
            </Form>
        </Slide>
    )
}

const mapStateToProps = (state: any) => {
    return {
        project : state.project.project
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getProject: (index: number) => dispatch(GetProject(index)),
        editProject: (project: any, index: number) => dispatch(EditProject(project, index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProject)