
const INTIAL_STATE = {
    username: "ghous",
    email: "ghous@gmail.com",
    todos: []
}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case "UPDATEDATA":
            return {
                ...state,
                username: action.username

            }
        case "GETTODOS":
            return {
                ...state,
                todos: action.todos
            }
        default:
            return state
    }
}
