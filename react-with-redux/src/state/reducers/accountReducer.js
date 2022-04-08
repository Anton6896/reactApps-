const accountReducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit":
            return state++
        case "withdraw":
            return state--

        default:
            return state
    }
}
export default accountReducer;