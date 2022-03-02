import { Entypo } from "react-native-vector-icons";

export const APP_PAGES = {
  LOGIN: "LOGIN",
  HOME: "HOME",
  TEXT: "TEXT"
};

export const APP_STYLE = {
  container: {},
  title: {
    fontWeight: "bold",
    fontSize: 38
  },
  loginInput: {
    backgroundColor: "#eee",
    padding: "2%",
    width: "80%",
    borderRadius: 8,
    marginTop: "8%",
    fontWeight: "200"
  },
  LoginInput: {
    marginTop: "50%",
    marginLeft: "15%"
  },
  ButtonOutline: {
    backgroundColor: "#546de5",
    width: "80%",
    marginTop: "8%",
    borderRadius: 8
  },
  ButtonText: {
    textAlign: "center",
    padding: "4%",
    color: "white",
    fontWeight: "800",
    textTransform: "uppercase"
  },
  Header: {
    marginHorizontal: "2%",
    marginVertical: "14%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  profilePicture: {
    width: "20%",
    height: 70
  },
  messageProfilePicture: {
    width: "30%",
    height: 70
  },
  messageListing: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "8%"
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 12
  },
  messageListText: {
    fontWeight: "bold"
  },
  messageSent: {
    color: "gray",
    fontSize: 10,
    fontWeight: "500"
  },
  headerTitle: {
    marginHorizontal: "10%",
    fontSize: 28,
    fontWeight: "500"
  }
};

export const APP_ICON = {
  MENU: (
    <Entypo
      name="menu"
      style={{
        fontSize: 20,
        backgroundColor: "#eee",
        borderRadius: 50,
        padding: "4%"
      }}
    />
  ),
  CAMERA: (
    <Entypo
      name="camera"
      style={{
        fontSize: 20,
        backgroundColor: "#eee",
        borderRadius: 50,
        padding: "4%"
      }}
    />
  ),
  DOT: <Entypo name="dot-single" style={{ fontSize: 50 }} />
};
