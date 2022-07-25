import React from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {cabinetFormChange} from '../../core/actions/CabinetActions';
import {appThemeSelector} from '../../core/selectors/AppThemeSelectors';

const {width} = Dimensions.get('screen');

const CabinetForm = ({appTheme, cabinetDetailsChange, item, navigation}) => {
  return (
    <TextInput
      value={item.value}
      placeholder={item.placeholder}
      placeholderTextColor={appTheme.gray.gray_8}
      onChangeText={text => cabinetDetailsChange(item, text)}
      onPressIn={() =>
        navigation.navigate('cabinetModal', {targetInput: item.index})
      }
      style={{
        ...styles.input,
        backgroundColor: appTheme.gray.gray_3,
        color: appTheme.blue.blue_4,
      }}
      autoFocus={item.autoFocus}
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
