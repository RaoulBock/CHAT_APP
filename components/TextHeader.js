import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { APP_ICON, APP_STYLE } from "../context/settings";

const TextHeader = () => {
  return (
    <View style={styles.textHeader}>
      <TouchableOpacity>{APP_ICON.MENU}</TouchableOpacity>
      <Image
        source={require("../assets/boy.png")}
        style={styles.profilePicture}
      />
      <TouchableOpacity>{APP_ICON.MENU}</TouchableOpacity>
    </View>
  );
};

export default TextHeader;

const styles = StyleSheet.create(APP_STYLE);
