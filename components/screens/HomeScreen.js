import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Header";
import ChatList from "../ChatList";

const HomeScreen = () => {
  return (
    <View>
      <View>
        <Header />
      </View>
      <View>
        <ChatList />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
