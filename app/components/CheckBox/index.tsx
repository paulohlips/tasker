import { useState } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'

export function CheckBox() {
  const [isChecked, setIsChecked] = useState(false)

  const handlePress = () => {
    setIsChecked(!isChecked)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableContainer} onPress={handlePress}>
        {
          isChecked ?
          <Image
            style={styles.checkImage}
            source={require('../../../assets/images/check.png')}
          /> :
          <View style={styles.checkbox} />
        }
      </TouchableOpacity>
    </View>
  )
}
