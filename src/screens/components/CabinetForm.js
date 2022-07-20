import React from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';

const {width, height} = Dimensions.get('screen');

const CabinetForm = ({appTheme}) => {
  return (
    <TextInput
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
export default CabinetForm;
