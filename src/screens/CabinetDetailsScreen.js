import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import BaseApplicationScreen from '../BaseComponents/BaseAppliocationScreen';
import {appThemeSelector} from '../core/selectors/AppThemeSelectors';
import {cabinetDetailsFormSelector} from '../core/selectors/CabinetSelectors';
import FormService from '../services/FormService';
import CabinetForm from './components/CabinetForm';

const {width, height} = Dimensions.get('screen');

class CabinetDetailsScreen extends BaseApplicationScreen {
  constructor(props) {
    super(props);
    this.formService = new FormService();
  }
  getForm() {
    return this.formService.getCabinetForm();
  }
  renderForm() {
    const {appTheme, cabinetDetailsForm} = this.props;
    return Object.values(this.getForm()).map(item => {
      return <CabinetForm appTheme={appTheme} item={item} />;
    });
  }
  render() {
    console.log(this.props);
    const {appTheme, cabinetDetailsForm} = this.props;
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
  },
  inputs_root: {
    height: height * 0.3,
    justifyContent: 'space-between',
  },
});
const mapStateToProps = state => {
  return {
    appTheme: appThemeSelector(state),
    cabinetDetailsForm: cabinetDetailsFormSelector(state),
  };
};
const mapDispatchToProps = dispacth => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CabinetDetailsScreen);
