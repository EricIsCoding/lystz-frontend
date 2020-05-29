export const blockAddSuccess = (block) => {
    return {
        type: "ADD_BLOCK_SUCCESS",
        block
    }
}


export function addBlock(block) {
    return dispatch => {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(block),
          }
        return fetch('/api/blocks', options)
        .then(res => res.json())
        .then(json => {
            dispatch(blockAddSuccess(json))
        })
    }
}