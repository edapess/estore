import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {appThemeSelector} from '../../core/selectors/AppThemeSelectors';

const {height, width} = Dimensions.get('screen');

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {item, appTheme} = this.props;
    return (
      <View
        key={item._id}
        style={{
          ...styles.product_root,
          backgroundColor: appTheme.gray.gray_8,
        }}>
        <Text
          style={{
            ...styles.product_text,
            color: appTheme.gray.gray_1,
          }}>
          {item.title}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  product_root: {
    width: width * 0.4,
    height: width * 0.4,
    padding: 10,
    margin: 10,
  },
  product_text: {
    fontSize: 13,
  },
});
const mapStateToProps = state => {
  return {
    appTheme: appThemeSelector(state),
  };
};
export default connect(mapStateToProps, null)(ProductItem);
