import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>АЛИАС</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: width,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
})
