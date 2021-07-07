import { connect } from 'react-redux';

import UserMenu from './UserMenu';
import { authSelectors } from 'redux/auth';

import { authOperations } from 'redux/auth';

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: '',
});

const mapDispatchToProps = dispatch => ({
  logoutHandler: () => {
    dispatch(authOperations.logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
