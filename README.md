### Hi everyone

First of all, sorry for my commits, many things happened when I started this project.

#### Tools I used

- [React Native](https://reactnative.dev/).
- [Redux Toolkit](https://redux-toolkit.js.org/).
- [React Redux](https://react-redux.js.org/).
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons).
- [React Navigation](https://reactnavigation.org/).
- [React Navigation Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator/).
- [React Native Stack Navigator](https://reactnavigation.org/docs/native-stack-navigator/).
- [Git Flow](https://github.com/nvie/gitflow).
- [Axios](https://axios-http.com/)
- [Redux Logger](https://www.npmjs.com/package/redux-logger)
- [Nord theme](https://www.nordtheme.com/)
- [VS code](https://code.visualstudio.com/).
- [Neovim](https://neovim.io/)

### Folder structure

📦src
┣ 📂ApiServices
┃ ┣ 📜AuthApiService.js
┃ ┣ 📜CartApiService.js
┃ ┣ 📜CategoryApiService.js
┃ ┣ 📜ProductsApiService.js
┃ ┣ 📜ThemeApiService.js
┃ ┗ 📜UserApiService.js
┣ 📂BaseComponents
┃ ┗ 📜BaseAuthScreen.js
┣ 📂UI
┃ ┗ 📜theme.js
┣ 📂core
┃ ┣ 📂actions
┃ ┃ ┣ 📜AppThemeActions.js
┃ ┃ ┣ 📜AuthActions.js
┃ ┃ ┣ 📜CategoryActions.js
┃ ┃ ┣ 📜ProductsActions.js
┃ ┃ ┗ 📜UsersActions.js
┃ ┣ 📂constants
┃ ┃ ┣ 📜authConstants.js
┃ ┃ ┣ 📜categoryConstants.js
┃ ┃ ┣ 📜productConstants.js
┃ ┃ ┣ 📜themeConstants.js
┃ ┃ ┗ 📜userConstants.js
┃ ┣ 📂reducers
┃ ┃ ┣ 📜Auth.js
┃ ┃ ┣ 📜Category.js
┃ ┃ ┣ 📜Products.js
┃ ┃ ┣ 📜SingleProduct.js
┃ ┃ ┣ 📜User.js
┃ ┃ ┣ 📜appTheme.js
┃ ┃ ┣ 📜createdProduct.js
┃ ┃ ┗ 📜index.js
┃ ┣ 📂selectors
┃ ┃ ┣ 📜AppThemeSelectors.js
┃ ┃ ┣ 📜AuthSelectors.js
┃ ┃ ┗ 📜ProductsSelectors.js
┃ ┗ 📜store.js
┣ 📂navigation
┃ ┣ 📜StackNavigator.js
┃ ┣ 📜TabNavigation.js
┃ ┗ 📜routNames.js
┣ 📂screens
┃ ┣ 📂components
┃ ┃ ┣ 📜LogInForm.js
┃ ┃ ┗ 📜ThemeToggle.js
┃ ┣ 📂modals
┃ ┃ ┗ 📜registrationModal.js
┃ ┣ 📜CabinetScreen.js
┃ ┣ 📜CartScreen.js
┃ ┣ 📜HomeScreen.js
┃ ┣ 📜LoginScreen.js
┃ ┣ 📜RegistrationForm.js
┃ ┗ 📜RegistrationScreen.js
┣ 📂services
┃ ┣ 📜AppValidator.js
┃ ┗ 📜FormService.js
┗ 📂utils
┃ ┗ 📜apiClient.js
