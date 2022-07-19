import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import BaseApplicationScreen from '../BaseComponents/BaseAppliocationScreen';
import {appThemeSelector} from '../core/selectors/AppThemeSelectors';

class CabinetDetailsScreen extends BaseApplicationScreen {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>sdsd</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    appTheme: appThemeSelector(state),
  };
};
const mapDispatchToProps = dispacth => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CabinetDetailsScreen);
