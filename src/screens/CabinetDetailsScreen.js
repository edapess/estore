import {connect} from 'react-redux';
import BaseApplicationScreen from '../BaseComponents/BaseAppliocationScreen';
import {appThemeSelector} from '../core/selectors/AppThemeSelectors';

class CabinetDetailsScreen extends BaseApplicationScreen {
  constructor(props) {
    super(props);
  }
}

const mapStateToProps = state => {
  return {
    appTheme: appThemeSelector(state),
  };
};
const mapDispatchToProps = dispacth => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CabinetDetailsScreen);
