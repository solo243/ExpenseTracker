import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const AmoutDisplayBox = ({ BackSpace, num1 }) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        maxLength={7}
        value={num1}
        style={styles.InputField}
        placeholder="Enter Amout"
        editable={false}
      />
      <TouchableOpacity onPress={BackSpace} style={styles.backSpace}>
        <Ionicons name="backspace" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "97%",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: "white",
    justifyContent: "center",
    alignSelf: "center",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  InputField: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    textAlign: "right",
    fontSize: 35,
    color: "black",
    width: "86%",
  },
  backSpace: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
export default AmoutDisplayBox;
