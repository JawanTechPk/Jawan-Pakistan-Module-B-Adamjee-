
const getTodos = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setTimeout(()=>{
                    dispatch({ type: "GETTODOS", todos: json })
                },3000)
            })
    }
}

export {
    getTodos
}