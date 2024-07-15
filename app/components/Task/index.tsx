import { Image, View, Text } from "react-native";
import { CheckBox } from "../CheckBox";
import { styles } from './styles'

type TaskProps = {
  description: string
}
export function Task({ description }: TaskProps) {
  return (
    <View style={styles.container}>
      <CheckBox />
      <Text style={styles.text}>{ description }</Text>
      <Image
        style={styles.garbageIcon}
        source={require('../../../assets/images/garbage.png')}
      />
    </View>
  )
}