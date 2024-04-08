import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const ChoosePaymentMode = ({ SelectingPmode, selectedButton }) => {
  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity
        onPress={() => SelectingPmode("online")}
        style={[
          styles.PmodeButton,
          selectedButton === "online"
            ? { backgroundColor: "lightblue" }
            : { backgroundColor: "white" },
        ]}
      >
        <FontAwesome name="bank" size={24} color="black" />
        <Text>Online</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => SelectingPmode("offline")}
        style={[
          styles.PmodeButton,
          selectedButton === "offline"
            ? { backgroundColor: "lightblue" }
            : { backgroundColor: "white" },
        ]}
      >
        <FontAwesome6 name="money-bill-1" size={24} color="black" />
        <Text>Cash</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  PmodeButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    flexDirection: "row",
    gap: 11,
  
  },
  MainContainer: {
    width: "94%",
    borderWidth: 1,
    borderRightWidth: 0,
    height: 55,
    alignSelf: "center",
    marginBottom: 20,
    flexDirection: "row",
  },
});
export default ChoosePaymentMode;
