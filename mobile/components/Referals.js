import React, { Component } from "react";
import { View, Text } from "react-native";

import { withStore } from "../store";

import ReferalItem from "./ReferalItem";

const Referals = props => {
  _getReferals = data => {
    return data.map(item => {
      return (
        <React.Fragment key={item.id}>
          <ReferalItem
            onPress={props.onPress}
            title={item.goal}
            expires={`Վավեր է ${item.expires} օր`}
            institution={item.institution}
          />
        </React.Fragment>
      );
    });
  };
  return (
    <View>
      {props.data ? (
        _getReferals(props.data)
      ) : (
        <Text>
          Այստեղ տեսանելի կլինեն ձեր ուղեգրերը, երբ բժիշկը կամ պատասխանատու անձը
          մուտքարի տվյալները համակարգում
        </Text>
      )}
    </View>
  );
};

export default withStore(Referals);
