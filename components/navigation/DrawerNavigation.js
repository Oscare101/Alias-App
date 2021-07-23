import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from '../screens/Main'
import Settings from '../screens/Settings'
import { NavigationContainer } from '@react-navigation/native'
import DrawerContent from './DrawerContent'
const Drawer = createDrawerNavigator()

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main"
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
