import { SafeAreaView, StyleSheet, Text } from "react-native";
import SignInscreen from "./src/screens/SignInScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <SignInscreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
    alignItems: "center",
    justifyContent: "center",
  },
});
