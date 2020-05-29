import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'

class ItemInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            brand: "",
            description: "",
            quantity: "",
            vendor_id: props.vendorId,
            block_id: props.blockId     
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
        this.props.addItem(this.state)
        this.setState(
            (prevState) => ({
                name: "",
                brand: "",
                description: "",
                quantity: "",
                vendor_id: prevState.vendor_id,
                block_id: prevState.block_id  
            })
        )
    }

    render() {
       return(
        <Card>
        <Accordion.Toggle as={Card.Header} eventKey="input">
        Add Item!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="input">
        <Card.Body>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Brand:</Form.Label>
                <Form.Control type="text" value={this.state.brand} name="brand" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Description:</Form.Label>
                <Form.Control type="text" value={this.state.description} name="description" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Quantity:</Form.Label>
                <Form.Control type="text" value={this.state.quantity} name="quantity" onChange={this.handleChange}/>
            </Form.Group>
            <Button variant="dark" type="submit">
                 Submit
            </Button>
            </Form>
        </Card.Body>
        </Accordion.Collapse>
        </Card>
       ) 
    }
}

const mapDispatchToProps = {
    addItem
}

export default connect(null, mapDispatchToProps)(ItemInput);

