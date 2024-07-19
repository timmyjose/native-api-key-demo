import { StyleSheet, Text, View } from 'react-native'
import * as ExpoNativeConfiguration from 'expo-native-configuration'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>API Key: {ExpoNativeConfiguration.getApiKey()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})