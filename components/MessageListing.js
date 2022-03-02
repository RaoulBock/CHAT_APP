import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { APP_ICON, APP_STYLE } from "../context/settings";

const MessageListing = ({ item }) => {
  return (
    <View style={styles.messageListing}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/boy.png")}
          style={styles.messageProfilePicture}
        />
        <TouchableOpacity style={{ marginLeft: "4%" }}>
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
