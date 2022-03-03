import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICON, APP_PAGES, APP_STYLE } from "../context/settings";

import { AppContext, AppProvider } from "../context/AppProvider";

const BottomMenu = () => {
  const { navPage, setNavPage } = useContext(AppContext);
  return (
    <View style={styles.bottomBar}>
      <View style={styles.grid}>
        <TouchableOpacity style={{ marginHorizontal: "2%" }}>
          {APP_ICON.HOME}
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: "2%" }}>
          {APP_ICON.CONTACT}
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: "2%" }}>
          {APP_ICON.SETTING}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomMenu;

const styles = StyleSheet.create(APP_STYLE);
