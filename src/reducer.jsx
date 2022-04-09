export const initialState = {
  basket: [],
 /*  user: null,
  shippingData: {},
  paymentMessage: "", */
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM", /* 51 */
  /* EMPTY_BASKET: "EMPTY_BASKET",
  SET_USER: "SET_USER",
  SET_SHIPPINGDATA: "SET_SHIPPINGDATA",
  SET_PAYMENT_MESSAGE: "SET_PAYMENT_MESSAGE", */
};

export const getBasketTotal = (basket) =>/* 56 */
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_ITEM":/* 52 */
      const index = state.basket.findIndex( /* 52 */
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];/* 53 */
      if (index >= 0) {
        newBasket.splice(index, 1);/* 54 */
      } else {
        console.log(`Cant remove product (id: ${action.id})!`);
      }
      return {/* 55 */
        ...state,
        basket: newBasket,
      };
   /*  case "EMPTY_BASKET":
      return {
        ...state,
        basket: action.basket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_SHIPPINGDATA":
      return {
        ...state,
        shippingData: action.shippingData,
      };
    case "SET_PAYMENT_MESSAGE":
      return {
        ...state,
        paymentMessage: action.paymentMessage,
      }; */
    default:
      return state;
  }
};

export default reducer;