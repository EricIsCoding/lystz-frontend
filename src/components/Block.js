import React from 'react';
import Item from './Item';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ItemInput from './ItemInput'
import DeleteButton from './DeleteButton'

const Block = (props) => {

    const renderItems = () => {
        return props.items.map(item => {
            return <Item 
            key={item.id} 
            id={item.id} 
            name={item.attributes.name} 
            brand={item.attributes.brand} 
            description={item.attributes.description} 
            quantity={item.attributes.quantity} 
            handleDelete={props.handleDelete}
            vendorId={item.relationships.vendor.data.id}
            blockId={item.relationships.block.data.id}/>
        }) 
    }

    const title = () => {
        if(props.blockPage === true) {
           return `${props.name} Store: ${props.vendor}`
        } else {
            return `${props.name}`
        }
    }

    const itemInput = () => {
        if (!props.blockPage) {
            return <ItemInput 
            vendorId={props.vendorId} 
            blockId={props.id} 
            updateVendorPage={props.updateVendorPage} 
            blockItems={props.items.length}/>
        }
    }

    return(
        <Col lg={4}>
        <Accordion>
        <Card>
            <h5>{title()}</h5>
            <DeleteButton type="block" id={props.id} vendorId={props.vendorId}/>
        </Card>
           {renderItems()}
           {itemInput()}
        </Accordion>
      </Col>
    )
}

export default Block;