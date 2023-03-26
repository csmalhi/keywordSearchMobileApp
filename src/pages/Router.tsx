import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
import SearchComponent from "./Search";
import AddComponent from "./Add";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-search" color={color} size={26} />
          ),
        }} name="Search" component={SearchComponent} />
        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={26} />
          ),
        }} name="Add New" component={AddComponent} />
        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder-multiple" color={color} size={26} />
          ),
        }} name="Library" component={SearchComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state: any) => ({
  state,
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
