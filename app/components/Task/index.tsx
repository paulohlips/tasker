import { Image, View, Text } from "react-native";
import { CheckBox } from "../CheckBox";
import { styles } from './styles'
export function Task() {
  return (
    <View style={styles.container}>
      <CheckBox />
      <Text style={styles.text}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
      <Image
        style={styles.garbageIcon}
        source={require('../../../assets/images/garbage.png')}
      />
    </View>
  )
}