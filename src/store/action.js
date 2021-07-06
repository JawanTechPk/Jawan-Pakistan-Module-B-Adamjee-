
const getDatas = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => dispatch({ type: "GETTODOS", todos: json }))
    }
}

export {
    getData
}