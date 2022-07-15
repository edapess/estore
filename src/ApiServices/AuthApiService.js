import apiClient from '../utils/apiClient';
class AuthApiService {
  //----- LOG IN
  userLogin = loginObject => {
    return apiClient().post(
      '/auth/login',
      {
        email: loginObject.email,
        password: loginObject.password,
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  };
  // ----- REGISTRATION
  userRegistration = registrationObject => {
    return apiClient()
      .post(
        '/auth/register',
        {
          name: registrationObject.name,
          email: registrationObject.email,
          number: registrationObject.number,
          password: registrationObject.password,
          password_repeat: registrationObject.password_repeat,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      )
      .catch(e => console.log(e));
  };
  //---- REFRESH TOKEN
  userRefreshToken = token => {
    return apiClient().post(
      '/auth/refresh',
      {refresh_token: token},
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  };
}
export default new AuthApiService();
