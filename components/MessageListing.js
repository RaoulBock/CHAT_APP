import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { APP_ICON, APP_STYLE, APP_PAGES } from "../context/settings";
import { AppContext } from "../context/AppProvider";

const MessageListing = ({ item }, props, key) => {
  const { navPage, setNavPage } = useContext(AppContext);
  return (
    <View style={styles.messageListing}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/boy.png")}
          style={styles.messageProfilePicture}
          key={props.key}
        />
        <TouchableOpacity
          style={{ marginHorizontal: "5%" }}
          onPress={() => setNavPage(APP_PAGES.TEXT)}
        >
          <View>
            <Text style={styles.profileName}>{item.name}</Text>
            <Text style={styles.messageListText}>{item.message}</Text>
            <Text style={styles.messageSent}>{item.messageSent}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>{APP_ICON.DOT}</View>
    </View>
  );
};

export default MessageListing;

const styles = StyleSheet.create(APP_STYLE);
