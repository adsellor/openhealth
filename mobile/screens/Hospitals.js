import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

import { withStore } from "../store";
class Hospitals extends Component {
  static navigationOptions = {
    header: null
  };

  _getHospitals = () => {
    return ["Էրեբունի ԲԿ", "Լուսավորիչ", "Հանրապետական", "Մուրացան"].map(
      (item, index) => (
        <TouchableOpacity key={index} onPress={this._handlePress}>
          <Card title={item} />
        </TouchableOpacity>
      )
    );
  };
  render() {
    return this._getHospitals();
  }
  _handlePress = () => {
    this.props.navigation.goBack();
  };
  componentDidMount() {
    this.props.store.handleLocation();
  }
}

export default withStore(Hospitals);
