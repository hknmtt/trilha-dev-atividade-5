import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 20,
    paddingTop: 10,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  numberImc: {
    fontSize: 48,
    color: "#ff0043",
    fontWeight: "bold",
  },
  information: {
    fontSize: 18,
    color: "#ff0043",
    fontWeight: "bold",
  },
  boxShareButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#1877f2",
  },
  shared: {
    backgroundColor: "1877f2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  sharedText: {
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
});

export default styles;
