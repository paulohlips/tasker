import { View, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'

export function CheckBox() {
  const [isChecked, setIsChecked] = useState(false)

  const handleFinishTask = () => {
    setIsChecked(!isChecked)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableContainer} onPress={handleFinishTask}>
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
