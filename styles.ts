import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  map: {
    flex: 1,
    width: "100%",
    position: "relative",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    zIndex: 10,
    backgroundColor: "#000",
    borderRadius: 500,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});
