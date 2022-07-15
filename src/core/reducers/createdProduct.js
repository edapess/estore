import {productConstants} from '../constants/productConstants';

const initialState = {
  createdProduct: [],
  errorMessage: '',
  loading: false,
};
const createdProduct = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.CREATE_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      };
    case productConstants.CREATE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case productConstants.CREATE_PRODUCT_SUCCES:
      return {
        ...state,
        loading: false,
        createdProduct: action.payload,
      };
    default:
      return state;
  }
};
export default createdProduct;
