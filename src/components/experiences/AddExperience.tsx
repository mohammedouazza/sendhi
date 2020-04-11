import React from 'react'
import { makeStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import { toggleAddModal } from '../../store/actions/ExperienceActions'
import {Button, Modal} from 'react-bootstrap'
import AddForm from './AddForm'

const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    button: {
        marginBottom: '10px',
      }
  }))
  
const AddExperience = (props: any) => {
    const classes = useStyles();
    const { open, closeModal, openModal } = props
    const handleClose = () => {
        closeModal()
    }

    const handleOpen = () => {
        openModal()
    }

    return (
        <div>
            <Button className={classes.button} color="primary" onClick={handleOpen}>Add experience</Button>

            <Modal show={open} 
                    onHide={handleClose} 
                    style={{zIndex: 10000}} 
                    {...props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
            >
                <Modal.Header closeButton >
                <Modal.Title>Add Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
            </Modal>
      </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        open: state.experience.addModalOpen
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        closeModal: () => dispatch(toggleAddModal(false)),
        openModal: () => dispatch(toggleAddModal(true))
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(AddExperience)