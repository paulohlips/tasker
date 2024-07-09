import { View, Text } from "react-native";
import { styles } from "./style";

export function TaskCounter() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer} >
        <View style={styles.createdTasksCounter}>
          <Text style={styles.createdTask}>Created</Text>
          <Text style={styles.tasksQuantity}>5</Text>
        </View>
        <View style={styles.doneTasksCounter}>
          <Text style={styles.doneTask}>Done</Text>
          <Text style={styles.tasksQuantity}>2</Text>
        </View>
      </View>
      <View style={styles.line}/>
    </View>
  )
}