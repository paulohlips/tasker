import { TextInput, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./style";

export function InputBar() {
  return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Add new task"
          placeholderTextColor={'#808080'}
          selectionColor={'#808080'}
        />
        <TouchableOpacity
          style={styles.addButton}
        >
          <Image
            style={styles.plusIcon}
            source={require('../../../assets/images/plus.png')}
          />
        </TouchableOpacity>
      </View>
  )
}