import apiClient from '../utils/apiClient';

class ProductsService {
  //----- GET ------
  getAllProducts = () => {
    return apiClient().get('/products');
  };
  getSingleProduct = productId => {
    return apiClient().get(`/products/${productId}`);
  };
  getProductsPagination = (limit, page) => {
    return apiClient().get(`/products?limit=${limit}&page=${page}`);
  };
  //------ POST ------
  createProduct = options => {
    return apiClient().post(
      '/products',
      {
        title: options.title,
        price: options.price,
        description: options.description,
        category: options.category,
      },
      {
        headers: {
          'Content-type': 'application/json',
        },
      },
    );
  };
  //----- PUT ----
  updateProduct = (productId, options) => {
    return apiClient().put(
      `/products/${productId}`,
      {
        title: options.title,
        price: options.price,
        description: options.description,
        category: options.category,
      },
      {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      },
    );
  };
  //----- DELETE ----
  deleteProduct = productId => {
    return apiClient().delete(`/products/${productId}`);
  };
}

export default new ProductsService();
