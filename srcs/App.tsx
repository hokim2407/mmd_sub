import React from 'react';
import {SafeAreaView, StatusBar, Platform, UIManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PageMain from './pages/Page_Main';
import tw from './libs/Lib_Tw';
import {color} from './configs/Conf_Style';

import {store} from './context/store';
import {Provider} from 'react-redux';
import PageReviewList from './pages/Page_ReviewList';
import PageReviewDetail from './pages/Page_ReviewDetail';
const App = () => {
  const Stack = createNativeStackNavigator();
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  return (
    <Provider store={store}>
      <SafeAreaView style={tw`flex-1`}>
        <StatusBar backgroundColor={color.p5} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={PageMain} />
            <Stack.Screen name="ReviewList" component={PageReviewList} />
            <Stack.Screen name="ReviewDetail" component={PageReviewDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
