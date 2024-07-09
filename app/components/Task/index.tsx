import { Image, View, Text } from "react-native";
import { CheckBox } from "../CheckBox";

export function Task() {
  return (
    <View>
      <CheckBox />
      <Text>My task</Text>
      <Image />
    </View>
  )
}