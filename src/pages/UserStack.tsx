import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchComponent from './Search';
import AddComponent from './Add';

const Tab = createMaterialBottomTabNavigator();

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


export default function UserStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home-search" color={color} size={26} />
        ),
      }} name="Search" component={SearchComponent} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="plus" color={color} size={26} />
        ),
      }} name="AddNew" component={AddComponent} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="folder-multiple" color={color} size={26} />
        ),
      }} name="Library" component={SearchComponent} />
    </Tab.Navigator>
  );
}