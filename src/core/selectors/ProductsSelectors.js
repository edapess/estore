import {createSelector} from '@reduxjs/toolkit';

const AllProductsSelector = state => state.products;
export const ProductsErrorMessageSelector = createSelector(
  AllProductsSelector,
  products => products.errorMessage,
);
export const isProductsLoadingSelector = createSelector(
  AllProductsSelector,
  products => products.loading,
);
export const productsArraySelector = createSelector(
  AllProductsSelector,
  products => products.products,
);
