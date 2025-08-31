const initialState = {
  value: 100,
};

export default function balanceReducer(state = initialState, action) {
  switch (action.type) {
    case 'balance/deposit':
      return {
        ...state,
        value: state.value + action.payload,
      };
      case "balance/withdraw":
        return {
            ...state,
            value: state.value - action.payload,
        }
    default:
      return state;
  }
}
