import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {appThemeSelector} from '../../core/selectors/AppThemeSelectors';
import FormService from '../../services/FormService';
import CabinetForm from '../components/CabinetForm';
const {width, height} = Dimensions.get('screen');

class cabinetFormChangeModal extends Component {
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
        <View style={{...styles.input_root}}>{this.renderForm()}</View>
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
  input_root: {
    height: height * 0.3,
    justifyContent: 'space-between',
  },
  input: {
    width: width * 0.8,
    height: 50,
    borderRadius: 10,
    padding: 5,
  },
});
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
