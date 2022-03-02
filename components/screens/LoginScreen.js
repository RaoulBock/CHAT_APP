import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { APP_STYLE } from "../../context/settings";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import { AppContext, AppProvider } from "../../context/AppProvider";
import { APP_PAGES } from "../../context/settings";

const LoginScreen = () => {
  const { navPage, setNavPage } = useContext(AppContext);
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
        <Button name="login" onPress={() => setNavPage(APP_PAGES.HOME)} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create(APP_STYLE);
