import React from "react";
import { ScrollView, TouchableOpacity, StyleSheet, Text } from "react-native";

import { Card } from "react-native-elements";

import { withStore } from "../store";

class History extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.store.history.map((item, index) => (
          <Card title={`Պատմություն ${index + 1}`}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Feedback")}
            >
              <Text> {item.treatments.map(item => item.name)} </Text>
            </TouchableOpacity>
          </Card>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default withStore(History);
