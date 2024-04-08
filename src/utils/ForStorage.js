import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("6", JSON.stringify(value));
  } catch (e) {
    console.log("Error hai bro... Soteing me ", e);
    // saving error
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("6");
    if (value !== null) {
      console.log("ye get data se aaya hai " + value);
      return value;
    }
  } catch (e) {
    console.log("Error hai bro... getting me ", e);

    // error reading value
  }
};

export const removeData = async () => {
  try {
    await AsyncStorage.removeItem("6"); // Replace '@key' with the key you used to store the data
    console.log("Data removed successfully");
   await storeData(0)
  } catch (error) {
    console.error("Error removing data:", error);
  }
};
