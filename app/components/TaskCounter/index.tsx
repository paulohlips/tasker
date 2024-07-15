import { View, Text } from "react-native";
import { styles } from "./style";

type TaskCounter = {
  done: number
  todo: number
}

export function TaskCounter({ done, todo }: TaskCounter) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer} >
        <View style={styles.createdTasksCounter}>
          <Text style={styles.createdTask}>Created</Text>
          <Text style={styles.tasksQuantity}>
            {todo}
          </Text>
        </View>
        <View style={styles.doneTasksCounter}>
          <Text style={styles.doneTask}>Done</Text>
          <Text style={styles.tasksQuantity}>{done}</Text>
        </View>
      </View>
      <View style={styles.line}/>
    </View>
  )
}