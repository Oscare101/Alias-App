import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Header from '../elements/Header'

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ position: 'absolute', left: 20, top: 40, padding: 5 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={36} color="#385E72" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
