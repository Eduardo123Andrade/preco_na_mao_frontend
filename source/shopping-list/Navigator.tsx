import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { ShoppingListHomeScreen, ShoppingListDetailsScreen, CreateShoppingListScreen, MarketplaceListScreen } from './screens'
import { TabBarIcon } from 'core/components'
import { ShoppingListProvider } from './providers'


const { Navigator, Screen } = createStackNavigator()

export const ShoppingListNavigator = () => {
  return (
    <ShoppingListProvider>
      <Navigator>

        <Screen
          name='ShoppingListHomeScreen'
          component={ShoppingListHomeScreen}
          options={ShoppingListHomeScreen.NavigationOptions}
        />

        <Screen
          name='ShoppingListDetailsScreen'
          component={ShoppingListDetailsScreen}
          options={ShoppingListDetailsScreen.NavigationOptions}
        />
        <Screen
          name='CreateShoppingListScreen'
          component={CreateShoppingListScreen}
          options={CreateShoppingListScreen.NavigationOptions}
        />
        <Screen
          name='MarketplaceListScreen'
          component={MarketplaceListScreen}
          options={MarketplaceListScreen.NavigationOptions}
        />


      </Navigator>
    </ShoppingListProvider>
  )
}


const navigationOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarIcon: ({ focused }) => <TabBarIcon iconName='view-list' focused={focused} />
}

ShoppingListNavigator.NavigationOptions = navigationOptions
