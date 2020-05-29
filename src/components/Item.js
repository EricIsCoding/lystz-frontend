import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import DeleteButton  from './DeleteButton'

const Item = (props) => {

   
    return(
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.id}>
        {props.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.id}>
        <Card.Body>
            Brand: {props.brand} | Quantity: {props.quantity}
            <br />
            Description: {props.description}
            <br />
            <DeleteButton type="item" id={props.id} vendorId={props.vendorId} blockId={props.blockId}/>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
    )
}

export default Item