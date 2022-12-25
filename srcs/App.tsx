import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestPage from './pages/Page_Test';
import tw from './libs/Lib_Tw';
import {color} from './configs/Conf_Style';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={tw`flex-1`}>
      <StatusBar backgroundColor={color.p5} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Test"
            options={{headerShown: false}}
            component={TestPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
