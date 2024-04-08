import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import NumberPad from "./src/screens/ExpenceInputScreen";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}></View>
      {/* Keyboard container   */}
      <View
        style={{
          alignSelf: "baseline",
          width: width,
        }}
      >
        <NumberPad />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
