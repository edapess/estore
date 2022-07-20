import apiClient from '../utils/apiClient';

class CategoryService {
  //----- GET ----
  getAllCategories = () => {
    return apiClient().get('/categories');
  };
  getSingleCategory = categoryId => {
    apiClient().get(`/categories/${categoryId}`);
  };
  // ----- POST ------
  addNewCategory = categoryName => {
    return apiClient().post(
      '/categories',
      {
        name: categoryName,
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  };
  //----- UPDATE -----
  updateCategory = (categoryName, name) => {
    return apiClient().put(
      `/categories/${categoryName}`,
      {
        name: name,
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  };
  deleteCategory = categoryName => {
    return apiClient().delete(`categories/${categoryName}`);
  };
}
export default new CategoryService();
