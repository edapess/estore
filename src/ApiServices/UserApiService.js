import apiClient from '../utils/apiClient';

class userService {
  //---- GET ------
  getAllUsers = () => {
    return apiClient().get('/users');
  };
  getSingleUser = userId => {
    apiClient().get(`/users/${userId}`);
  };
  //------- POST-----
  addNewUser = userInfo => {
    return apiClient().post(
      '/users',
      {
        name: userInfo.name,
        email: userInfo.email,
        number: userInfo.number,
        password: userInfo.password,
        password_repeat: userInfo.password_repeat,
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  };
  updateUser = (userId, options) => {
    return apiClient().put(
      `/users/${userId}`,
      {
        name: options.name,
        email: options.email,
        number: options.number,
        password: options.password,
        password_repeat: options.password_repeat,
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  };
  deleteUser = userId => {
    return apiClient().delete(`/users/${userId}`);
  };
}

export default new userService();
