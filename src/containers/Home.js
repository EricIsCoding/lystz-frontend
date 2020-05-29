import React, { Component } from "react";
import { connect } from 'react-redux';
import VendorCard from '../components/VendorCard'
import { fetchVendors } from '../actions/vendorActions'
import VendorInput  from '../components/VendorInput'
import { childIds } from '../helpers'

class Home extends Component {

    componentDidMount() {
        this.props.fetchVendors()
    }
    
    handleClick(event) {    
        this.props.history.push({
            pathname: `/${event.target.name}/blocks`,
            state: {id: event.target.id}
            })
    }

    renderVendors() {
    return this.props.vendors.map(vendor => <VendorCard 
        handleClick={this.handleClick.bind(this)} 
        key={vendor.data.id} 
        id={vendor.data.id} 
        name={vendor.data.attributes.name} 
        website={vendor.data.attributes.website} 
        blocks={vendor.data.relationships.blocks.data} 
        blockIds={vendor.blockIds}/>
        )
    }

    render() {
        if(this.props.vendors && this.props.vendors.legth !== 0) {
           return(
            <div>
                <h1>Home</h1>
                {this.renderVendors()}
                <VendorInput />
            </div>
            )
        } else {
            return (
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
           )
        }
    }
}

const mapStateToProps = (state) => {
   
    if(state.vendor) {
        let keys = Object.keys(state.vendor)
        let mappedVendors = keys.map(key => {
            return {
                data: state.vendor[key],
                blockIds: childIds(state.vendor[key].relationships.blocks.data)
            }
        })
       
        return { vendors: mappedVendors }
    }
}

const mapDispatchToProps = {
    fetchVendors
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);