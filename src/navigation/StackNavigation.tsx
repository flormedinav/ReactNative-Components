import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/HomeScreen';
import {Animated101Screen} from '../screens/Animated101Screen';
import {Animated102Screen} from '../screens/Animated102Screen';
import {SwitchScreen} from '../screens/SwitchScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animated101Screen" component={Animated101Screen} />
      <Stack.Screen name="Animated102Screen" component={Animated102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
    </Stack.Navigator>
  );
};
