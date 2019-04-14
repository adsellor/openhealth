import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const ReferalItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Card title={props.title}>
        <View>
          <Text>{props.expires}</Text>
          <View>
            <Text>{props.institution.city}</Text>
            <Text>{props.institution.name}</Text>
            <Text>{props.institution.phone}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ReferalItem;
