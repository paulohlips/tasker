import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24
  },
  innerContainer: {
    marginTop: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 30
  },
  createdTasksCounter: {
    flexDirection: 'row',
  },
  doneTasksCounter: {
    flexDirection: 'row'
  },
  createdTask: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold'
  },
  doneTask: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold'
  },
  tasksQuantity: {
    backgroundColor: '#333333',
    color: '#D9D9D9',
    height: 19,
    width: 25,
    textAlign: 'center',
    borderRadius: 999,
    marginLeft: 8
  },
  line: {
    height: 2,
    backgroundColor: '#262626'
  }
})