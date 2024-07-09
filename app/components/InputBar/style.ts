import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: 150,
    position: 'absolute'
  },
  title: {
    color: '#5E60CE'
  },
  textInput: {
    height: 52,
    backgroundColor: '#262626',
    borderRadius: 6,
    width: 271,
    color: '#808080',
    padding: 8,
    fontSize: 18
  },
  addButton: {
    backgroundColor: '#1E6F9F',
    height: 52,
    width: 52,
    marginLeft: 8,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    height: 16,
    width: 16
  },
})