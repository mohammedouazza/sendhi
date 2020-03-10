import React, { useRef, useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import CompanyLogo from '../../img/company_logo.png'

const AddForm = (props: any) => {
    const uploadLogoRef: any = useRef()
    const [logoSrc, setLogoSrc] = useState(CompanyLogo)
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    const handleUploadLogo = (e: any) => {
        console.log(uploadLogoRef)
        const file = uploadLogoRef.current.files[0]
        console.log(file)
        if(file.type.includes('images')) {
            const reader = new FileReader()
            reader.readAsDataURL(file)

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
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Adservio Maroc" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Logo</Form.Label>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={logoSrc} />
                    <Card.Body>
                        <Form.Control ref={uploadLogoRef} type="file" accept="images/*" onChange={handleUploadLogo} style={{display: 'none'}} />
                        <Button variant="primary" className="float-center" onClick={uploadLogo}>
                            Upload Logo
                        </Button>
                        
                    </Card.Body>
                </Card>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Job</Form.Label>
                <Form.Control type="text" placeholder="Engineer" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description summary</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Projects..." />
            </Form.Group>
            <Button variant="primary" type="submit" className="float-right">
                Add
            </Button>
        </Form>
    )
}

export default AddForm