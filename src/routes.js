import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Header from './components/header';

import colors from './styles/colors';

import Main from './pages/main';
import Cart from './pages/cart';

const Routes = createAppContainer(
  createSwitchNavigator(
    { Main, Cart },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }
  )
);

export default Routes;
