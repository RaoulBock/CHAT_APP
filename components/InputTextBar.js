import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import { APP_ICON, APP_STYLE } from "../context/settings";

const InputTextBar = () => {
  return (
    <View>
      <KeyboardAvoidingView style={{ height: "10%" }}>
        <View style={styles.grid}>
          <TouchableOpacity>{APP_ICON.PLUS}</TouchableOpacity>
          <TextInput placeholder="" style={styles.textInput} />
          <TouchableOpacity>{APP_ICON.CAMERA}</TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default InputTextBar;

const styles = StyleSheet.create(APP_STYLE);
