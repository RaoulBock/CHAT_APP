import { Entypo, AntDesign } from "react-native-vector-icons";

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
  },
  textHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: "14%"
  },
  textUsername: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: "-12%"
  },
  textUserProfilePicture: {
    width: "10%",
    height: "120%"
  },
  chatView: {
    width: "100%",
    backgroundColor: "#f1f2f6",
    height: "83.3%"
  },
  textInput: {
    backgroundColor: "#fff",
    padding: "1.5%",
    borderRadius: 50,
    width: "70%"
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
    backgroundColor: "#eee"
  },
  chats: {
    padding: "8%"
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
        padding: "2%"
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
        padding: "2%"
      }}
    />
  ),
  DOT: <Entypo name="dot-single" style={{ fontSize: 50 }} />,
  BACK_BUTTON: <AntDesign name="back" style={{ fontSize: 30 }} />,
  VERTICAL_DOTS: <Entypo name="dots-three-vertical" style={{ fontSize: 30 }} />,
  PLUS: (
    <AntDesign
      name="plus"
      style={{
        fontSize: 20,
        backgroundColor: "#eee",
        borderRadius: 50,
        padding: "2%"
      }}
    />
  ),
  PHONE: <Entypo name="phone" style={{ fontSize: 30 }} />
};
