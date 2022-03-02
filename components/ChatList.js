import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MessageListing from "./MessageListing";

const ChatList = () => {
  const dataset = [
    {
      id: "1",
      name: "Raoul Bock",
      message: "Sounds good!",
      isOnline: false,
      messageSent: "12:00am"
    },
    {
      id: "1",
      name: "Raoul Bock",
      message: "Sounds good!",
      isOnline: false,
      messageSent: "12:00am"
    },
    {
      id: "1",
      name: "Raoul Bock",
      message: "Sounds good!",
      isOnline: false,
      messageSent: "12:00am"
    }
  ];

  return (
    <View>
      <FlatList
        data={dataset}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <MessageListing item={item} />;
        }}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({});
