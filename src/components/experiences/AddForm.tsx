import React, { useRef, useState } from 'react'
import { Form, Button, Card, ProgressBar, Alert } from 'react-bootstrap'
import CompanyLogo from '../../img/company_logo.png'
import { addExperience } from '../../store/actions/ExperienceActions';
import { connect } from 'react-redux';


const AddForm = (props: any) => {
    const uploadLogoRef: any = useRef()
    const [logoSrc, setLogoSrc] = useState(CompanyLogo)

    const title = useField('')
    const job = useField('')
    const description = useField('')
    const [file, setFile] = useState(null)

    const { progress, error } = props
    console.log(error)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        props.addExperience({
            title: title.val,
            job: job.val,
            descritpion: description.val,
            file: file
        })
    }

    const handleUploadLogo = (e: any) => {
        console.log(uploadLogoRef)
        const newFile = uploadLogoRef.current.files[0]
        console.log(newFile)
        if(newFile.type.includes('image')) {
            setFile(newFile)
            const reader = new FileReader()
            reader.readAsDataURL(newFile)

            reader.onloadend = (e: any) => {
                setLogoSrc(e.target.result)
            }
        }
        
        //console.log(url)
    }

    const uploadLogo = () => {
        uploadLogoRef.current!.click()
    }
    return (
        <Form onSubmit={handleSubmit}>
            { error !== undefined && <Alert  variant={error ? 'danger' : 'success'} dismissible>
                {error ? error : 'Experience added'}
            </Alert> }

            <Form.Group >
                <Form.Label>Title</Form.Label>
                <Form.Control required type="text" placeholder="Adservio Maroc" value={title.val} onChange={title.handleChange} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Logo</Form.Label>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={logoSrc} />
                    <Card.Body>
                        <Form.Control required ref={uploadLogoRef} type="file" accept="images/*" onChange={handleUploadLogo} style={{display: 'none'}} />
                        <Button variant="primary" className="float-center" onClick={uploadLogo}>
                            Upload Logo
                        </Button>
                        { progress > 0 && <ProgressBar now={progress} className="mt-2" />}
                    </Card.Body>
                </Card>
            </Form.Group>
            
            <Form.Group >
                <Form.Label>From</Form.Label>
                <Form.Control required  type="date" />
            </Form.Group>

            <Form.Group >
                <Form.Label>To</Form.Label>
                <Form.Control required  type="date" />
            </Form.Group>
            <Form.Group >
                <Form.Label>Job</Form.Label>
                <Form.Control required type="text" placeholder="Engineer" value={job.val} onChange={job.handleChange}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description summary</Form.Label>
                <Form.Control required as="textarea" rows="3" placeholder="Projects..." value={description.val} onChange={description.handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" className="float-right">
                Add
            </Button>
        </Form>
    )
}

const useField = (initVal = '') => {
    const [val, setVal] = useState(initVal)

    const handleChange = (e: any) => {
        //console.log(e)
        setVal(e.currentTarget.value)
    }

    return {
        val,
        handleChange
    }
}

const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        progress: state.experience.progress,
        error: state.experience.addExpError
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addExperience: (newExp: any) => dispatch(addExperience(newExp))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddForm)