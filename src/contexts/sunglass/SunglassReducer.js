const SunglassReducer = (globalState, action) => {
    switch (action.type) {
        case "Obtener_Anteojos":
            return {
                ...globalState,
                sunglasses: action.payload,
            };
        case "OBTENER_ANTEOJO":
            return {
                ...globalState,
                currentSunglass: action.payload,
            };
        default:
            return globalState;
    }
}
export default SunglassReducer