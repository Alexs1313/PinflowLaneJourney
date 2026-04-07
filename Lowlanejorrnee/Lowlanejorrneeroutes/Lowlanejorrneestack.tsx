// STACK

import {createStackNavigator} from '@react-navigation/stack';

import Lowlanejorrneelder from '../Lowlanejorrneecmponets/Lowlanejorrneelder';
import Lowlanejorrneeonb from '../Lowlanejorrneescrns/Lowlanejorrneeonb';
import Lowlanejorrneetabbs from '../../Lowlanejorrneetabbs';

const Stack = createStackNavigator();

const Lowlanejorrneestack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Lowlanejorrneelder" component={Lowlanejorrneelder} />
      <Stack.Screen name="Lowlanejorrneeonb" component={Lowlanejorrneeonb} />
      <Stack.Screen
        name="Lowlanejorrneetabbs"
        component={Lowlanejorrneetabbs}
      />
    </Stack.Navigator>
  );
};

export default Lowlanejorrneestack;
