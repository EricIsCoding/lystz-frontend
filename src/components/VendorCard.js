import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import DeleteButton from './DeleteButton'

const VendorCard = (props) => {
     return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.website}</Card.Subtitle>
                <Card.Text>
                Number of Blocks: {props.blocks.length}
                </Card.Text>
                <Button onClick={props.handleClick} name={props.name} id={props.id}variant="dark">View Blocks!</Button>
                <DeleteButton type="vendor" id={props.id} blockIds={props.blockIds}/>
            </Card.Body>
        </Card>
    )
}

export default VendorCard;