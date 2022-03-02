import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { APP_STYLE } from "../context/settings";
import InputTextBar from "./InputTextBar";

const ChatView = () => {
  return (
    <View>
      <View style={styles.chatView}>
        <Text>fdsf</Text>
      </View>
      <View style={styles.inputView}>
        <InputTextBar />
      </View>
    </View>
  );
};

export default ChatView;

const styles = StyleSheet.create(APP_STYLE);
