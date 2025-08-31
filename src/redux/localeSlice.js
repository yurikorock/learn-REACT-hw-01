const initialState = {
  lang: "uk",
};

export default function localeReducer(state = initialState, action) {
  switch (action.type) {
    case 'locale/changeLang':
      return {
        ...state,
        lang: action.payload,
      };
      
    default:
      return state;
  }
}