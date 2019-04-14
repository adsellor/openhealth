import React from "react";

const Store = React.createContext(null);

const withStore = Component => props => (
  <Store.Consumer>
    {store => <Component {...props} store={store} />}
  </Store.Consumer>
);

export default Store;
export { withStore };
