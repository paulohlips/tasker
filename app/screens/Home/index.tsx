import { View, Image, Text } from "react-native";
import { styles } from './styles'
import { Header } from '../../components/InputBar'
import { EmptyList } from "@/app/components/EmptyList";
export function Home() {
  return (
    <View style={styles.background}>
      <View style={styles.superiorView}>
        <Image
          style={styles.rocket}
          source={require('../../../assets/images/rocket.png')}
        />
        <View style={styles.title}>
          <Text style={styles.tas}>
            tas
          </Text>
          <Text style={styles.ker}>
            ker
          </Text>
        </View>
      </View>
      <Header />
      <EmptyList />
    </View>
  )
}