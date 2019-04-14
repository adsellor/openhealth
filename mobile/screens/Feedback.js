import React, { Component } from "react";
import { View, ScrollView } from "react-native";

import Stars from "../components/Stars";

export default class Feedback extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Text>Բժշկի վերջնագիրը, ձեր բուժումից հետո</Text>
          <View>
            <Stars title="Ինչպես կգնահատեք սանիտարական վիճակը" />
            <Stars title="ինչպես կգնահատեք անձնակազմի վերաբերմունքը" />
            <Stars title="Ինչպես կգնահատեք բուժման որակը" />
          </View>
        </View>
      </ScrollView>
    );
  }
}
