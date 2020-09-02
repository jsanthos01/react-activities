export default (state, action) => {
    switch(action.type) {
        case "DELETE_TRANSACTION":
            //send all the transations except the one that is deleted
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case "ADD_TRANSACTION":
            //send all the transations except the one that is deleted
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default: return state;
    }
}