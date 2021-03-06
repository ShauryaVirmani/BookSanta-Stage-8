
import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import NotificationScreen from '../screens/NotificationScreen'
import MyDonationScreen from '../screens/MyDonationScreen'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
    Setting: {
      screen:SettingScreen
    }
  ,
  Notification: {
    screen:NotificationScreen
  },
  MyDonations : {
    screen:MyDonationScreen
  }},
 {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })