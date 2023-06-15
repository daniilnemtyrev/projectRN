import React from 'react';
import {AppRoutes} from './routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeIcon, QuoteIcon} from 'src/shared/icons';
import {HomeScreen} from 'src/screens/Home';
import {QuotesScreen} from 'src/screens/QuotesScreen';

const getTabIcon = (focused: boolean, routeName: AppRoutes) => {
  const iconsForRoutes: Record<AppRoutes, React.ReactNode> = {
    [AppRoutes.HOME]: <HomeIcon focused={focused} />,
    [AppRoutes.QUOTE]: <QuoteIcon focused={focused} />,
  };

  return iconsForRoutes[routeName];
};

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={AppRoutes.HOME}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarLabel: () => {
          return null;
        },
      }}>
      <Tab.Screen
        name={AppRoutes.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => getTabIcon(focused, AppRoutes.HOME),
        }}
      />
      <Tab.Screen
        name={AppRoutes.QUOTE}
        component={QuotesScreen}
        options={{
          tabBarIcon: ({focused}) => getTabIcon(focused, AppRoutes.QUOTE),
        }}
      />
    </Tab.Navigator>
  );
};
