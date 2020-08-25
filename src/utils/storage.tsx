import AsyncStorage from '@react-native-community/async-storage';

export const saveItemStorage = async (
  item: string,
  valor: string | string[],
): Promise<void> => {
  try {
    await AsyncStorage.setItem(`${item}`, JSON.stringify(valor));
  } catch (error) {
    console.log(error.message);
  }
};

export const removeItemStorage = async (item: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(`${item}`);
  } catch (error) {
    console.log(error.message);
  }
};

export const getItemStorage = async (item: string): Promise<string> => {
  let value = null;

  try {
    value = await AsyncStorage.getItem(`${item}`);
  } catch (error) {
    console.log(error.message);
  }

  return value ? JSON.parse(value) : null;
};
