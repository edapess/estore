import {productConstants} from '../constants/productConstants';

const initialState = {
  product: [],
  errorMessage: '',
  loading: false,
};
const singleProduct = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_SINGLE_PRODUCT:
      return {
        ...state,
        loading: action.loading,
      };
    case productConstants.GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      };
    case productConstants.GET_SINGLE_PRODUCT_SUCCES:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    default:
      return state;
  }
};
export default singleProduct;
