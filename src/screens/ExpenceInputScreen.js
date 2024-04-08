import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import NumPad from "../components/AmoutInputScreen/NumPad";
import AmoutDisplayBox from "../components/AmoutInputScreen/AmoutDisplayBox";
import ChoosePaymentMode from "../components/AmoutInputScreen/ChoosePaymentMode";
import { getData, removeData, storeData } from "../utils/ForStorage";
import IncomeORExpence from "../components/AmoutInputScreen/IncomeORExpence";
export const MyContext = createContext("");

const NumberPad = () => {
  const [num1, setNum1] = useState("");
  const [message, Setmessage] = useState();
  const [selectedButton, setSelectedButton] = useState("online");
  const [total, Settotal] = useState();

  useEffect(() => {
    FirstCallFunction();
    removeData();
  }, []);

  // TODO: For the backspace
  const BackSpace = () => {
    setNum1(num1.slice(0, -1));
  };

  // TODO This is a first call
  const FirstCallFunction = async () => {
    const TotalValue = await getData();
    Settotal(TotalValue);
  };

  // TODO:  for the Amout section
  const handlePress = async (value) => {
    if (value === "=") {
      if (num1 == 0 || null) {
        console.warn("Please enter valid amout first ");
      } else if (selectedButton === 0 || null) {
        console.warn("please enter valid mode");
      } else {
        const FromStorage = await getData();
        const newValue = parseInt(num1) + parseInt(FromStorage);
        Settotal(newValue);
        storeData(newValue);
      }
    } else {
      setNum1(num1 + value);
    }
  };

  // TODO To clear all field
  const clear = () => {
    if (num1 == 0) {
    } else {
      setNum1("");
    }
  };

  // TODO: Slecte the payment method
  const SelectingPmode = (value) => {
    setSelectedButton(value);
  };

  return (
    <>
      <View>
        <Text
          style={{
            fontSize: 20,
            margin: 20,
            color: total > 0 ? "green" : "red",
          }}
        >
          {total}
        </Text>
      </View>
      <IncomeORExpence />
      {/*TODO this is a choose between money and online mode  */}
      <ChoosePaymentMode
        selectedButton={selectedButton}
        SelectingPmode={SelectingPmode}
      />
      {/* TODO: Message box  */}
      <View style={styles.messageBoxContainers}>
        <TextInput
          placeholder="message"
          value={message}
          onChangeText={(text) => Setmessage(text)}
          style={styles.messageInputField}
        ></TextInput>
      </View>
      {/* TODO this is for input are of number  */}
      <AmoutDisplayBox num1={num1} BackSpace={BackSpace} />
      {/* TODO: Number pad For enter amout  */}
      <NumPad handlePress={handlePress} clear={clear} />
    </>
  );
};

const styles = StyleSheet.create({
  messageBoxContainers: {
    height: 60,
    padding: 10,
    width: "96%",
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    alignSelf: "center",
  },
  messageInputField: {
    fontSize: 20,
    width: "100%",
    height: "100%",
  },
});

export default NumberPad;
