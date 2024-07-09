import { View, Text, Image } from "react-native";
import { styles } from './styles'
export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.clipBoardImage}
        source={require('../../../assets/images/clipboard.png')}
      />
      <Text style={styles.textRow1}>
        Your task list is empty
      </Text>
      <Text style={styles.textRow2}>
        Let's start creating a new task?
      </Text>
    </View>
  )
}