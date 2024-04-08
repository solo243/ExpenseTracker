import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const IncomeORExpence = ({ selectedButton }) => {
  return (
    <>
      <View style={styles.MainContainer}>
        <TouchableOpacity
          onPress={() => SelectingPmode("online")}
          style={[
            styles.PmodeButton,
            selectedButton === "online"
              ? { backgroundColor: "pink" }
              : { backgroundColor: "white" },
          ]}
        >
          <AntDesign name="minus" size={24} color="red" />
          <Text>Expence</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => SelectingPmode("offline")}
          style={[
            styles.PmodeButton,
            selectedButton === "offline"
              ? { backgroundColor: "pink" }
              : { backgroundColor: "white" },
          ]}
        >
          <AntDesign name="plus" size={24} color="green" />
          <Text>Income</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  PmodeButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderRightWidth: 1,
    flexDirection: "row",
    gap: 11,
    borderRadius: 60,
  },
  MainContainer: {
    width: "90%",
    borderWidth: 1,
    // borderRightWidth: 0,
    height: 45,
    alignSelf: "center",
    marginBottom: 30,
    borderRadius: 60,
    flexDirection: "row",
  },
});
export default IncomeORExpence;
