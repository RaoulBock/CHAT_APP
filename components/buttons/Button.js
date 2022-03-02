import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_STYLE } from "../../context/settings";

const Button = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={styles.ButtonOutline}>
        <Text style={styles.ButtonText}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create(APP_STYLE);
