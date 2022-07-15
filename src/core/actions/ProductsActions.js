import ProductsService from '../../ApiServices/ProductsApiService';
import {productConstants} from '../constants/productConstants';

//---------ALL PRODUCTS
export const getAllProducts = () => async dispatch => {
  dispatch({type: productConstants.GET_ALL_PRODUCTS, loading: true});
  try {
    const {data} = await ProductsService.getAllProducts();
    dispatch({
      type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: productConstants.GET_ALL_PRODUCTS_ERROR,
      errorMessage: error.message,
    });
  }
};
//--------SINGLE PRODUCT
export const getSingleProduct = productId => async dispatch => {
  dispatch({type: productConstants.GET_SINGLE_PRODUCT, loading: true});
  try {
    const {data} = await ProductsService.getSingleProduct(productId);
    dispatch({
      type: productConstants.GET_SINGLE_PRODUCT_SUCCES,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: productConstants.GET_SINGLE_PRODUCT_ERROR,
      errorMessage: error.message,
    });
  }
};

//-------- CREATE PRODUCT

export const createProduct = object => async dispatch => {
  try {
    dispatch({
      type: productConstants.CREATE_PRODUCT,
      payload: true,
    });
    const {data} = await ProductsService.createProduct(object);
    dispatch({
      type: productConstants.CREATE_PRODUCT_SUCCES,
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: productConstants.CREATE_PRODUCT_ERROR,
      payload: error,
    });
  }
};
