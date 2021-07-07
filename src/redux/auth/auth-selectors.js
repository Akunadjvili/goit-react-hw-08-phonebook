// import { createSelector } from 'reselect';

const getIsAuthenticated = state => state.auth.isLogin;
const getUserName = state => state.auth.user.name;

const selectors = {
  getIsAuthenticated,
  getUserName,
};
export default selectors;
