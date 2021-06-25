
const INTIAL_STATE = {
    // users: [
    //     {
    //         username: "ghous",
    //         email: "ghous@gmail.com",
    //         phone: 3545454545,
    //         image: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
    //     },
    //     {
    //         username: "basit",
    //         email: "basit@gmail.com",
    //         phone: 3545454545,
    //         image: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
    //     },
    // ],
    username: "ghous"
}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case "UPDATEDATA":
            return ({
                ...state,
                username: action.username
            })
        default:
        return state
    }
}
