import { View, Text, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anchor</Text>
      <Text style={styles.subtitle}>Welcome to your Expo app</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 16,
  },
})

