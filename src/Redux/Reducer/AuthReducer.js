import * as types from "../Action/actionTypes";
let initialState = {
  user: [],
  basket: [],
};
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case "upload":
      return {
        ...state,
        user: action.payload,
      };
    case types.Addtobasket:
      const newCart = [...state.basket, action.payload];
      return {
        ...state,
        basket: newCart,
      };
    case types.RemoveFromCart:
      let updatedCart = [...state.basket];
      const index = state.basket.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        updatedCart.splice(index, 1);
      }
      return {
        ...state,
        basket: updatedCart,
      };
    case "createData":
      return {
        ...state,
        loginUser: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
