import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

import { APP_STYLE } from "../../context/settings";

const Input = (props) => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        name={props.name}
        style={styles.loginInput}
        secureTextEntry={props.secureTextEntry}
        onChange={props.onChange}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create(APP_STYLE);
