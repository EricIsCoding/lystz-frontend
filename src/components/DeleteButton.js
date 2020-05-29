import React from 'react'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import { deleteData } from '../actions/deleteAction'

const DeleteButton = (props) => {

    const data = () => {
        if (props.type === 'item') {
            return {type: props.type,
                id: props.id,
                vendorId: props.vendorId,
                blockId: props.blockId
            }
        } else if (props.type === 'block') {
            return {type: props.type,
                id: props.id,
                vendorId: props.vendorId
            }
        } else {
            return {type: props.type,
                id: props.id, 
                blockIds: props.blockIds
            }
        }
    }

    const handleDelete = ( ) => {
        props.deleteData(
            data()
        )}

    return( 
        <Button 
        variant="outline-danger" 
        size="sm"
        onClick={handleDelete}
        >Delete</Button>
    )
}

const mapDispatchToProps ={
    deleteData
}

export default connect(null, mapDispatchToProps)(DeleteButton)