import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Block from '../components/Block'
import { connect } from 'react-redux'
import { filtered, childIds } from '../helpers'

class BlockPage extends Component {
    
    renderBlocks() {
        return this.props.blocks.map(block => {
        return <Block 
        key={block.id} 
        id={block.id} 
        name={block.attributes.name} 
        creator={block.attributes.creator}
        vendorId={block.relationships.vendor.data.id} 
        items={block.items}
        blockPage={true}
        vendor={block.vendor}/>})
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
        <h1>All Blocks!</h1>
        <Container>
            {this.renderRows()}
        </Container>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    const blocks = Object.values(state.block)  
    const blocksWithItems = blocks.map(block => {       
        block['vendor'] = state.vendor[block.relationships.vendor.data.id].attributes.name
        return {...block, items: Object.values(filtered(state.item, childIds(block.relationships.items.data)))}
    })
    
    return {
        blocks: blocksWithItems
    }
}

export default connect(mapStateToProps)(BlockPage);