const PurseReducer = (globalState, action) => {
    switch (action.type) {
        case "Obtener_Carteras":
            return {
                ...globalState,
                purses: action.payload,
            };
        default:
            return globalState;
    }
}

export default PurseReducer;