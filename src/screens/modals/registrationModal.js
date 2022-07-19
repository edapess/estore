import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
  Dimensions,
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

const {width, height} = Dimensions.get('screen');

class registrationModal extends Component {
  constructor(props) {
    super(props);
  }
  renderInfo() {
    const {isRegistrationLoading, registrationError, navigation, appTheme} =
      this.props;
    if (isRegistrationLoading) {
      return <ActivityIndicator />;
    } else if (registrationError) {
      return (
        <View style={styles.message_root}>
          <Text style={styles.message}>Something went wrong</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            ...styles.message_root,
          }}>
          <Text style={{...styles.message, color: appTheme.gray.gray_8}}>
            Your Account is Ready
          </Text>
          <TouchableHighlight
            style={{...styles.button, backgroundColor: appTheme.blue.blue_4}}
            underlayColor={appTheme.blue.blue_4}
            onPress={() => navigation.replace('TabNavigation')}>
            <Text style={styles.button_text}>Go to Home page</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }
  render() {
    const {appTheme} = this.props;
    return (
      <View style={{...styles.root, backgroundColor: appTheme.gray.gray_2}}>
        {this.renderInfo()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backfaceVisibility: 'visible',
  },
  button: {
    width: width * 0.6,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  button_text: {
    fontSize: 18,
  },
  message: {
    fontSize: 20,
    fontWeight: '700',
  },
  message_root: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: height * 0.3,
    width: width * 0.8,
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
