import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import {
  authRegistration,
  registrationFormChange,
  resetRegistrationForm,
} from '../../core/actions/AuthActions';
import {appThemeSelector} from '../../core/selectors/AppThemeSelectors';
import {
  authDataSelector,
  authSignUpFormSelector,
  isRegistrationLoadingSelector,
  isSignUpButtonDisabledSelector,
  registrationDataSelector,
  registrationErrorSelector,
  registrationStatusSelector,
} from '../../core/selectors/AuthSelectors';

class registrationModal extends Component {
  constructor(props) {
    super(props);
  }
  renderInfo() {
    const {
      isRegistrationLoading,
      registrationStatus,
      registrationError,
      navigation,
      resetForm,
    } = this.props;
    if (isRegistrationLoading) {
      return <ActivityIndicator />;
    } else if (registrationError) {
      return <Text>Something went wrong</Text>;
    } else {
      return (
        <TouchableHighlight onPress={() => navigation.replace('TabNavigation')}>
          <Text>Your Account is Ready, go to Home page</Text>
        </TouchableHighlight>
      );
    }
  }
  render() {
    return <View style={styles.root}>{this.renderInfo()}</View>;
  }
}
const styles = StyleSheet.create({
  root: {
    width: '80%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backfaceVisibility: 'visible',
  },
});
const mapStateToProps = state => ({
  appTheme: appThemeSelector(state),
  authProps: authDataSelector(state),
  isSignUpButtonDisabled: isSignUpButtonDisabledSelector(state),
  signUpForm: authSignUpFormSelector(state),
  isRegistrationLoading: isRegistrationLoadingSelector(state),
  registrationStatus: registrationStatusSelector(state),
  registrationError: registrationErrorSelector(state),
  registrationInfo: registrationDataSelector(state),
});

const mapDispatchToProps = dispatch => {
  return {
    userRegistration: userInfo => dispatch(authRegistration(userInfo)),
    registrationFormChange: (key, value) =>
      dispatch(registrationFormChange(key, value)),
    resetForm: () => dispatch(resetRegistrationForm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(registrationModal);
