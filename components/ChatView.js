import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import React from "react";
import { APP_STYLE, APP_ICON } from "../context/settings";

const ChatView = () => {
  return (
    <View>
      <KeyboardAvoidingView behavior={"padding"}>
        <View style={styles.chatView}>
          <Text>fdsf</Text>
        </View>

        <View style={styles.grid}>
          <TouchableOpacity>{APP_ICON.PLUS}</TouchableOpacity>
          <TextInput placeholder="" style={styles.textInput} />
          <TouchableOpacity>{APP_ICON.CAMERA}</TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatView;

const styles = StyleSheet.create(APP_STYLE);
