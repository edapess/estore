import React, {Component} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import BaseAppliocationScreen from '../BaseComponents/BaseAppliocationScreen';
import {getAllProducts} from '../core/actions/ProductsActions';
import {appThemeSelector} from '../core/selectors/AppThemeSelectors';
import {registrationDataSelector} from '../core/selectors/AuthSelectors';
import {
  isProductsLoadingSelector,
  productsArraySelector,
  ProductsErrorMessageSelector,
} from '../core/selectors/ProductsSelectors';
import {FocusAwareStatusBar} from '../navigation/TabNavigation';
import theme from '../UI/theme';
import ProductItem from './components/ProductItem';

const {width, height} = Dimensions.get('screen');

class HomeScreen extends BaseAppliocationScreen {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllProducts();
  }

  renderProducts() {
    const {productsArray, appTheme} = this.props;
    return productsArray.map(item => {
      return <ProductItem item={item} key={item._id} />;
    });
  }
  renderData() {
    const {productsArray, isProductsLoading, productsErrorMessage} = this.props;
    if (isProductsLoading) {
      return this.renderLoading();
    } else if (!isProductsLoading && productsArray.length > 0) {
      return this.renderProducts();
    } else {
      return this.renderProductsError(productsErrorMessage);
    }
  }
  render() {
    return (
      <ScrollView
        alwaysBounceHorizontal={false}
        contentContainerStyle={{
          ...styles.main_root,
          backgroundColor: this.props.appTheme.gray.gray_2,
        }}>
        <FocusAwareStatusBar
          barStyle={
            this.props.appTheme === theme.dark
              ? 'light-content'
              : 'dark-content'
          }
          backgroundColor={this.props.appTheme.gray.gray_2}
        />
        {this.renderData()}
      </ScrollView>
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
    registrationInfo: registrationDataSelector(state),
  };
};
const mapDispatchToProps = dispacth => {
  return {
    getAllProducts: () => dispacth(getAllProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
