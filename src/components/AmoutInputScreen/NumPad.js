import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const NumPad = ({ handlePress, clear }) => {
  return (
    <View style={{ width: "100%", alignItems: "center", marginBottom: 1 }}>
      <Row>
        {/* <Key value="/" onPress={handlePress} /> */}
        <Key value="1" onPress={handlePress} />
        <Key value="2" onPress={handlePress} />
        <Key value="3" onPress={handlePress} />
      </Row>
      <Row>
        {/* <Key value="*" onPress={handlePress} /> */}
        <Key value="4" onPress={handlePress} />
        <Key value="5" onPress={handlePress} />
        <Key value="6" onPress={handlePress} />
      </Row>
      <Row>
        {/* <Key value="-" onPress={handlePress} /> */}
        <Key value="7" onPress={handlePress} />
        <Key value="8" onPress={handlePress} />
        <Key value="9" onPress={handlePress} />
      </Row>
      <Row>
        {/* <Key value="+" onPress={handlePress} /> */}
        <Key value="CLS" onPress={clear} />
        <Key value="0" onPress={handlePress} />
        <Key value="=" onPress={handlePress} />
      </Row>
    </View>
  );
}; 

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const Key = ({ value, onPress }) => (
  <TouchableOpacity style={styles.key} onPress={() => onPress(value)}>
    <Text style={styles.keyText}>{value}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  key: {
    flex: 1,
    borderWidth: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    height: 60,
  },
  keyText: {
    fontSize: 21,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default NumPad;
