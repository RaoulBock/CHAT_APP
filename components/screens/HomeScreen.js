import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Header";
import ChatList from "../ChatList";
import HeadingText from "../heading/HeadingText";
import BottomMenu from "../BottomMenu";

const HomeScreen = ({ title }) => {
  return (
    <View>
      <View>
        <Header />
        <HeadingText title="Messages" />
      </View>
      <View>
        <ChatList />
      </View>
      <View>
        <BottomMenu />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
