import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { APP_STYLE, APP_ICON } from "../context/settings";

const Header = (props) => {
  return (
    <View style={styles.Header}>
      <TouchableOpacity>{APP_ICON.MENU}</TouchableOpacity>
      <Image
        source={require("../assets/boy.png")}
        style={styles.profilePicture}
      />
      <TouchableOpacity>{APP_ICON.CAMERA}</TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create(APP_STYLE);
