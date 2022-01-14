import React from 'react'
import { Modal, Form, ModalBody,ModalHeader,FormGroup, ModalFooter, Button,Label,Input } from 'reactstrap';

export default class ModalV1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalSignup: false,
            modalAlert: false,
            name: "",
            surname:"",
            address:""
        }
        this.toggleSignup        = this.toggleSignup.bind(this)
        this.toggleAlert         = this.toggleAlert.bind(this)
        this.handleSubmit        = this.handleSubmit.bind(this)
        this.handleNameChange    = this.handleNameChange.bind(this)
        this.handleSurnameChange = this.handleSurnameChange.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
    }

    toggleSignup() {
        this.setState({
            modalSignup: !this.state.modalSignup
        })
    }

    toggleAlert() {
        this.setState({
            modalAlert: !this.state.modalAlert
        })
    }

    handleSubmit() {
        if (this.state.name.length === 0 || this.state.surname.length === 0 || this.state.address.length=== 0)
        {
            this.setState({
                modalAlert: true
            })
        }
        else
        {
            this.setState({
                modalSignup: false
            })
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleSurnameChange(e) {
        this.setState({
            surname: e.target.value
        })
    }
    handleAddressChange(e) {
        this.setState({
            address: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <Button size="lg" color="success" onClick={this.toggleSignup}>Sign up</Button>
                <Modal isOpen={this.state.modalSignup} toggle={this.toggleSignup}>
                    <ModalHeader toggle={this.toggleSignup}>Signup form</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="idNameInput">
                                    Name:
                                </Label>
                                <Input type="text" name="nameInput" id="idNameInput" placeholder="Enter your name" onChange={this.handleNameChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="idSurnameInput">
                                    Surname:
                                </Label>
                                <Input type="text" name="surnameInput" id="idSurnameInput" placeholder="Enter your surname" onChange={this.handleSurnameChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="idNAddressInput">
                                    Address:
                                </Label>
                                <Input type="text" name="addressInput" id="idAddressInput" placeholder="Enter your address" onChange={this.handleAddressChange}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.handleSubmit}>Done</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modalAlert} toggle={this.toggleAlert}>
                    <ModalHeader toggle={this.toggleAlert}>Error</ModalHeader>
                    <ModalBody>Please make sure no fields are left empty</ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggleAlert}>OK</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}
  