import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { addVendor } from '../actions/vendorActions'

class VendorInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            website: ""   
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            website: `${e.target.value}.com`
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        e.target.parentElement.parentElement.classList = 'collapse'
        this.props.addVendor(this.state)
        this.setState({
            name: ''
        })
    }

    render() {
       return(
        <Accordion>
        <Card style={{ width: '18rem' }}>
        <Accordion.Toggle as={Card.Header} eventKey="input">
        Add Store!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="input">
        <Card.Body>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
            </Form.Group>
            <Button variant="dark" type="submit">
                 Submit
            </Button>
            </Form>
        </Card.Body>
        </Accordion.Collapse>
        </Card>
        </Accordion>
       ) 
    }
}

const mapDispatchToProps = {
    addVendor
}

export default connect(null, mapDispatchToProps)(VendorInput);