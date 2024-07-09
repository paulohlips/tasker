import { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'

export function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    console.log(isChecked)
    setIsChecked(!isChecked);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handlePress}>
        <View style={[styles.checkbox, isChecked && styles.checked]} />
        <Text style={styles.label}>Check me</Text>
      </TouchableOpacity>
    </View>
  )
}
