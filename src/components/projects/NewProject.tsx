import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Slide, TextField, Button } from '@material-ui/core'
import { useHistory, Link } from "react-router-dom"
import { connect } from 'react-redux'
import { AddProject } from '../../store/actions/ProjectActions'
import { useValue } from '../customHooks/projectHooks'

const NewProject = (props: any) => {

    const history = useHistory()
    const title = useValue('')
    const description = useValue('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const newProject = {
            title: title.value,
            description: description.value
        }
        title.handleError(!newProject.title ? true : false)

        if(!title.error && !description.error) {
            props.addProject(newProject)
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
                    value={title.value} 
                    onChange={title.handleChange} /><br/>
                <TextField
                    required
                    error={description.error}
                    helperText={description.error ? "Description required" : ""}
                    id="outlined-textarea"
                    label="Description"
                    placeholder="Description"
                    multiline
                    variant="outlined"
                    value={description.value}
                    onChange={description.handleChange}
                    className="mb-2 col"
                /><br/>
                <Button type="submit" color="primary" className="btn btn-primary"> Submit </Button>
                <Link to="/projects" className="btn btn-warning" >Retour</Link>
            </Form>
        </Slide>
    )
}





const mapDispatchToProps = (dispatch: any) => {
    return {
        addProject: (project: any) => dispatch(AddProject(project))
    }
}
export default connect(null, mapDispatchToProps)(NewProject)