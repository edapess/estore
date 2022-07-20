import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import BaseApplicationScreen from '../BaseComponents/BaseAppliocationScreen';
import {cabinetFormChange} from '../core/actions/CabinetActions';
import {appThemeSelector} from '../core/selectors/AppThemeSelectors';
import FormService from '../services/FormService';
import CabinetForm from './components/CabinetForm';

const {width, height} = Dimensions.get('screen');

class CabinetDetailsScreen extends BaseApplicationScreen {
  constructor(props) {
    super(props);
    this.formService = new FormService();
  }
  getForm() {
    const {cabinetDetailsForm} = this.props;
    return this.formService.getCabinetForm(cabinetDetailsForm);
  }
  renderForm() {
    const {navigation} = this.props;
    return Object.values(this.getForm()).map(item => {
      return (
        <CabinetForm item={item} key={item.index} navigation={navigation} />
      );
    });
  }
  render() {
    console.log(this.props);
    const {appTheme} = this.props;
    return (
      <View style={{...styles.root, backgroundColor: appTheme.gray.gray_2}}>
        <View style={styles.inputs_root}>{this.renderForm()}</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15,
  },
  inputs_root: {
    height: height * 0.3,
    justifyContent: 'space-between',
  },
});
const mapStateToProps = state => {
  return {
    appTheme: appThemeSelector(state),
  };
};
const mapDispatchToProps = dispacth => {
  return {
    cabinetDetailsChange: (obj, text) => dispacth(cabinetFormChange(obj, text)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CabinetDetailsScreen);
