import { TextInput, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./style";

type InputBarProps = {
  description: string
  handleTextChange: (text: string) => void,
  handleTaskInput: () => void
}

export function InputBar(props: InputBarProps) {
  return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Add new task"
          placeholderTextColor={'#808080'}
          selectionColor={'#808080'}
          onChangeText={props.handleTextChange}
          value={props.description}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={props.handleTaskInput}
        >
          <Image
            style={styles.plusIcon}
            source={require('../../../assets/images/plus.png')}
          />
        </TouchableOpacity>
      </View>
  )
}