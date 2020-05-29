function deleteComplete(deleteData) {  
    const upCaseType = deleteData.type.toUpperCase()
    return {
        type: `REMOVE_${upCaseType}`,
        deleteData
    }
}


export function deleteData(deleteData) {
    return dispatch => {
        fetch(`/api/${deleteData.type + 's'}/${deleteData.id}`, { method: 'DELETE' })
        .then((res) => {
            dispatch(deleteComplete(deleteData))
        })
        .catch(error => console.log(error))
    }
}