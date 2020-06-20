import React, { Component } from 'react';
import Item from './Item';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ItemInput from './ItemInput'
import DeleteButton from './DeleteButton'
import StarButton from './StarButton'
class Block extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.id,
            name: props.name,
            creator: props.creator,
            vendorId: props.vendorID,
            items: props.items,
            stars: 0
        }
    }
    renderItems = () => {
        return this.state.items.map(item => {
            return <Item 
            key={item.id} 
            id={item.id} 
            name={item.attributes.name} 
            brand={item.attributes.brand} 
            description={item.attributes.description} 
            quantity={item.attributes.quantity} 
            handleDelete={this.state.handleDelete}
            vendorId={item.relationships.vendor.data.id}
            blockId={item.relationships.block.data.id}/>
        }) 
    }

    title = () => {
        if(this.state.blockPage === true) {
           return `${this.state.name} Store: ${this.state.vendor}`
        } else {
            return `${this.state.name}`
        }
    }

    itemInput = () => {
        if (!this.state.blockPage) {
            return <ItemInput 
            vendorId={this.state.vendorId}
            blockId={this.state.id} 
            updateVendorPage={this.state.updateVendorPage} 
            blockItems={this.state.items.length}/>
        }
    }

    addStar = () => {
        this.setState( 
            {stars: this.state.stars + 1}
        )
    }

    render() {
        return(<Col lg={4}>
            <Accordion>
            <Card>
                <h5>{this.title()}</h5>
                <p>Number of Stars {this.state.stars}</p>
                <StarButton handleClick={this.addStar}/>
                <DeleteButton type="block" id={this.state.id} vendorId={this.state.vendorId}/>
            </Card>
               {this.renderItems()}
               {this.itemInput()}
            </Accordion>
          </Col>)
    }
        
}

export default Block;