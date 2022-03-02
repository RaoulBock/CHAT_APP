import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { APP_STYLE } from "../../context/settings";

const HeadingText = (props) => {
  return (
    <View>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default HeadingText;

const styles = StyleSheet.create(APP_STYLE);
