import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { APP_STYLE, APP_ICON } from "../context/settings";
import { Camera } from "expo-camera";
const Header = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
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
