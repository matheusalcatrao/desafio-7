import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';
import NavigationPreloadManager from './services/navigation';

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#141419" barStyle="light-content" />
      <Routes
        ref={navigatorRef =>
          NavigationPreloadManager.setNavigator(navigatorRef)
        }
      />
    </>
  );
}
