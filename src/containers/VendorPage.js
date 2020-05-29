import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Block from '../components/Block'
import { connect } from 'react-redux'
import { filtered, childIds } from '../helpers'
import BlockInput from '../components/BlockInput'

class VendorPage extends Component {
    
    renderBlocks() {
        return this.props.blocks.map(block => {
        return <Block 
        key={block.id} 
        id={block.id} 
        name={block.attributes.name} 
        creator={block.attributes.creator}
        vendorId={this.props.vendor.id} 
        items={block.items}/>})
    }

    renderRows() {
        const cols = this.renderBlocks()

        const noRows =  Math.ceil(cols.length / 3);
     
        const rows = Array.from(Array(noRows)).map((n, i) =>(
           <Row key={i}>
            {cols.slice(i* 3, (i + 1)* 3)}
           </Row>
         ));
     
         return rows;
    }

    render() {
        return <div>
        <h1>{this.props.vendor.attributes.name}</h1>
        <Container>
            {this.renderRows()}
            <BlockInput vendorId={this.props.vendor.id}/>
        </Container>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
   
    const vendor = Object.values(filtered(state.vendor, [ownProps.location.state.id]))[0]
    const blocks = Object.values(filtered(state.block, childIds(vendor.relationships.blocks.data)))
    const blocksWithItems = blocks.map(block => {
       
       return {...block, items: Object.values(filtered(state.item, childIds(block.relationships.items.data)))}
    })
    
    return {
        vendor,
        blocks: blocksWithItems
    }
}

export default connect(mapStateToProps)(VendorPage);