import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import BaseApplicationScreen from '../BaseComponents/BaseAppliocationScreen';
import {cabinetFormChange} from '../core/actions/CabinetActions';
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
    const {cabinetDetailsForm} = this.props;
    return this.formService.getCabinetForm(cabinetDetailsForm);
  }
  renderForm() {
    const {navigation, cabinetDetailsForm} = this.props;
    return Object.values(this.getForm()).map(item => {
      return (
        <CabinetForm
          item={item}
          key={item.index}
          navigation={navigation}
          cabinetDetailsForm={cabinetDetailsForm}
        />
      );
    });
  }
  render() {
    const {appTheme} = this.props;
    return (
      <View style={{...styles.root, backgroundColor: appTheme.gray.gray_2}}>
        <View style={styles.inputs_root}>{this.renderForm()}</View>
        <TouchableHighlight
          style={{
            ...styles.save_button,
            backgroundColor: appTheme.orange.orange_4,
          }}>
          <Text style={{...styles.save_text, color: appTheme.gray.gray_1}}>
            Save
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: height * 0.15,
  },
  inputs_root: {
    height: height * 0.3,
    justifyContent: 'space-between',
  },
  save_button: {
    height: 60,
    width: width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  save_text: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 7,
  },
});
const mapStateToProps = state => {
  return {
    appTheme: appThemeSelector(state),
    cabinetDetailsForm: cabinetDetailsFormSelector(state),
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
