import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {appThemeSelector} from '../../core/selectors/AppThemeSelectors';

class cabinetFormChangeModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    <View>
      <Text>sdd</Text>
    </View>;
  }
}
const mapStateToProps = state => {
  return {
    appTheme: appThemeSelector(state),
  };
};
const mapDispatchToProps = dispacth => {
  return {
    cabinetDetailsChange: (obj, text) =>
      dispacth(cabinetFormChangeModal(obj, text)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(cabinetFormChangeModal);
