import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import { APP_ICON, APP_PAGES, APP_STYLE } from "../context/settings";
import { AppContext } from "../context/AppProvider";
import ChatView from "./ChatView";

const TextHeader = () => {
  const { navPage, setNavPage } = useContext(AppContext);
  return (
    <View>
      <View style={styles.textHeader}>
        <TouchableOpacity onPress={() => setNavPage(APP_PAGES.HOME)}>
          {APP_ICON.BACK_BUTTON}
        </TouchableOpacity>
        <Image
          source={require("../assets/boy.png")}
          style={styles.textUserProfilePicture}
        />
        <Text style={styles.textUsername}>Raoul Bock</Text>
        <Text>{APP_ICON.VERTICAL_DOTS}</Text>
      </View>
      <ChatView />
    </View>
  );
};

export default TextHeader;

const styles = StyleSheet.create(APP_STYLE);
