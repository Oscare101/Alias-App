import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import { Drawer } from 'react-native-paper'
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer'
import {
  FontAwesome5,
  MaterialIcons,
  Entypo,
  Ionicons,
  AntDesign,
  Feather,
  FontAwesome,
} from '@expo/vector-icons'

export default function DrawerNavigatorContent(props) {
  const [isDark, setIsDark] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: '#B7CFDC' }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#a7CFeC',
          }}
        >
          <Text>ALIAS</Text>
        </View>
        <Drawer.Section title=" ">
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <Text>Dark Theme</Text>
            <Switch
              trackColor={{ false: '#9DBACA', true: '#fff' }}
              thumbColor={isDark ? '#9DBACA' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsDark(!isDark)}
              value={isDark}
              disabled={false}
            />
          </View>
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            label="Играть"
            icon={() => <FontAwesome5 name="dice" size={24} color="black" />}
            onPress={() => {
              props.navigation.navigate('Main')
            }}
          />
          <DrawerItem
            label="Правила"
            icon={() => (
              <FontAwesome name="paperclip" size={24} color="black" />
            )}
            onPress={() => {
              props.navigation.navigate('ProfileScreen')
            }}
          />
          <DrawerItem
            label="Настройки"
            icon={() => <Feather name="settings" size={24} color="black" />}
            onPress={() => {
              props.navigation.navigate('Settings')
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: 'green',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
