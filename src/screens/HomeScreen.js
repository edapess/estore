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
import {getAllProducts} from '../core/actions/ProductsActions';
import {appThemeSelector} from '../core/selectors/AppThemeSelectors';
import {registrationDataSelector} from '../core/selectors/AuthSelectors';
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
  componentDidMount() {
    this.props.getAllProducts();
  }
  renderLoading() {
    return (
      <View>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  renderProductsError() {
    const {productsErrorMessage} = this.props;
    return (
      <View>
        <Text>{productsErrorMessage}</Text>
      </View>
    );
  }
  renderProducts() {
    const {productsArray, appTheme} = this.props;
    return productsArray.map(item => {
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
    });
  }
  renderData() {
    const {productsArray, isProductsLoading} = this.props;
    if (isProductsLoading) {
      return this.renderLoading();
    } else if (!isProductsLoading && productsArray.length > 0) {
      return this.renderProducts();
    } else {
      return this.renderProductsError();
    }
  }
  render() {
    console.log(this.props);
    return (
      <ScrollView
        alwaysBounceHorizontal={false}
        contentContainerStyle={{
          ...styles.main_root,
          backgroundColor: this.props.appTheme.gray.gray_2,
        }}>
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
