import React from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {cabinetFormChange} from '../../core/actions/CabinetActions';
import {appThemeSelector} from '../../core/selectors/AppThemeSelectors';

const {width, height} = Dimensions.get('screen');

const CabinetForm = ({appTheme, item, changeDetail, cabinetDetailsChange}) => {
  return (
    <TextInput
      value={item.value}
      placeholder={item.placeholder}
      onChangeText={text => cabinetDetailsChange(item, text)}
      style={{
        ...styles.input,
        backgroundColor: appTheme.gray.gray_5,
        color: appTheme.blue.blue_4,
      }}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    width: width * 0.8,
    height: 50,
    borderRadius: 10,
    padding: 5,
  },
});
const mapStateToProps = state => ({
  appTheme: appThemeSelector(state),
});

const mapDispatchToProps = dispatch => {
  return {
    cabinetDetailsChange: (obj, text) => dispatch(cabinetFormChange(obj, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CabinetForm);
