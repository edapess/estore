import {combineReducers} from '@reduxjs/toolkit';
import products from './Products';
import singleProduct from './SingleProduct';
import appTheme from './appTheme';
import createdProduct from './createdProduct';
import auth from './Auth';
export const rootReducer = combineReducers({
  products,
  singleProduct,
  appTheme,
  createdProduct,
  auth,
});
