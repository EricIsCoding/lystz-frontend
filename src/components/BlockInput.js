import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { addBlock } from '../actions/blockActions'

class BlockInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            creator: "",
            vendor_id: props.vendorId  
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        e.target.parentElement.parentElement.classList = 'collapse'
        this.props.addBlock(this.state)
        this.setState( (prevState) => ({
            name: "",
            creator: "",
            vendor_id: prevState.vendor_id
        }))
    }

    render() {
       return(
        <Accordion>
        <Card style={{ width: '18rem' }}>
        <Accordion.Toggle as={Card.Header} eventKey="input">
        Add Block!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="input">
        <Card.Body>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Who Made this?</Form.Label>
                <Form.Control type="text" value={this.state.creator} name="creator" onChange={this.handleChange}/>
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
    addBlock
}

export default connect(null, mapDispatchToProps)(BlockInput);