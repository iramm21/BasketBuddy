import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '../../constants/Colors';
import { MaterialCommunityIcons, FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon-sb'
        }
      }}>

      {/* Explore Tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Explore',
          title: 'Explore',
          tabBarIcon: ({ color, size }) =>
            <Ionicons name="search" color={color} size={size} />
        }}
      />

      {/* Teams Tab */}
      <Tabs.Screen
        name="teams"
        options={{
          tabBarLabel: 'Teams',
          title: 'Teams',
          tabBarIcon: ({ color, size }) =>
            <FontAwesome5 name="users" color={color} size={size} />
        }}
      />

      {/* Schedule Tab */}
      <Tabs.Screen
        name="schedule"
        options={{
          tabBarLabel: 'Schedule',
          title: 'Schedule',
          tabBarIcon: ({ color, size }) =>
            <Entypo name="calendar" color={color} size={size} />
        }}
      />

      {/* Messages Tab */}
      <Tabs.Screen
        name="messages"
        options={{
          tabBarLabel: 'Messages',
          title: 'Messages',
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name="message-outline" color={color} size={size} />
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
          tabBarIcon: ({ color, size }) =>
            <Ionicons name="person-circle" color={color} size={size} />
        }}
      />

    </Tabs>
  )
}

export default Layout;
