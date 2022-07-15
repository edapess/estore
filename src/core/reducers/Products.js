import {productConstants} from '../constants/productConstants';

const initialState = {
  products: {},
  errorMessage: '',
  loading: true,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCTS:
      return {
        ...state,
        loading: action.loading,
      };
    case productConstants.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading: false,
      };
    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default products;
