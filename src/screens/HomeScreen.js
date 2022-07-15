import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {getAllProducts} from '../core/actions/ProductsActions';
import {appThemeSelector} from '../core/selectors/AppThemeSelectors';
import {
  isProductsLoadingSelector,
  productsArraySelector,
  ProductsErrorMessageSelector,
} from '../core/selectors/ProductsSelectors';

const {width, height} = Dimensions.get('screen');

class HomeScreen extends Component {
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
const styles = StyleSheet.create({
  main_root: {
    width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
    justifyContent: 'space-between',
  },
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
    isProductsLoading: isProductsLoadingSelector(state),
    productsErrorMessage: ProductsErrorMessageSelector(state),
    productsArray: productsArraySelector(state),
    appTheme: appThemeSelector(state),
  };
};
const mapDispatchToProps = dispacth => {
  return {
    getAllProducts: () => dispacth(getAllProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
