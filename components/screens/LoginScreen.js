import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { APP_STYLE } from "../../context/settings";
import Input from "../inputs/Input";
import Button from "../buttons/Button";

const LoginScreen = () => {
  return (
    <View style={styles.LoginInput}>
      <Text style={styles.title}>Login</Text>
      <View>
        <Input name="username" placeholder="Username" />
      </View>
      <View>
        <Input name="password" placeholder="•••••••••" secureTextEntry={true} />
      </View>
      <View>
        <Button name="login" />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create(APP_STYLE);
