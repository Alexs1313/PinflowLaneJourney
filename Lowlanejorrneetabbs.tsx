import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
  type ViewStyle,
} from 'react-native';

import Lowlanejorrneeplcc from './Lowlanejorrnee/Lowlanejorrneescrns/Lowlanejorrneeplcc';

import Lowlanejorrneemap from './Lowlanejorrnee/Lowlanejorrneescrns/Lowlanejorrneemap';
import Lowlanejorrneetest from './Lowlanejorrnee/Lowlanejorrneescrns/Lowlanejorrneetest';
import Lowlanejorrneerand from './Lowlanejorrnee/Lowlanejorrneescrns/Lowlanejorrneerand';
import Lowlanejorrneeblog from './Lowlanejorrnee/Lowlanejorrneescrns/Lowlanejorrneeblog';
import Lowlanejorrneefav from './Lowlanejorrnee/Lowlanejorrneescrns/Lowlanejorrneefav';

const Tab = createBottomTabNavigator();

const AnimatedTabButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress as () => void}
      onLongPress={onLongPress as (() => void) | undefined}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[style as ViewStyle, styles.lowlanejorrneetabButton]}
      {...rest}>
      <Animated.View
        style={[styles.lowlanejorrneetabButtonInner, {transform: [{scale}]}]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const Lowlanejorrneetabbs = () => {
  const {height, width} = useWindowDimensions();
  const isLandscape = height < width;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.lowlanejorrneetabBar,
          {height: isLandscape ? 68 : 70},
        ],
        tabBarActiveTintColor: '#555555',
        tabBarButton: props => (
          <AnimatedTabButton {...(props as Record<string, unknown>)} />
        ),
      }}>
      <Tab.Screen
        name="Lowlanejorrneeplcc"
        component={Lowlanejorrneeplcc}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.lowlanejorrneetabIconWrap}>
              <Image
                source={require('./assets/i/lowlanejorrneetab1.png')}
                tintColor={focused ? '#1C0151' : '#DE9CF8'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lowlanejorrneemap"
        component={Lowlanejorrneemap}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.lowlanejorrneetabIconWrap}>
              <Image
                source={require('./assets/i/lowlanejorrneetab2.png')}
                tintColor={focused ? '#1C0151' : '#DE9CF8'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lowlanejorrneetest"
        component={Lowlanejorrneetest}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.lowlanejorrneetabIconWrap}>
              <Image
                source={require('./assets/i/lowlanejorrneetab3.png')}
                tintColor={focused ? '#1C0151' : '#DE9CF8'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lowlanejorrneerand"
        component={Lowlanejorrneerand}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.lowlanejorrneetabIconWrap}>
              <Image
                source={require('./assets/i/lowlanejorrneetab4.png')}
                tintColor={focused ? '#1C0151' : '#DE9CF8'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lowlanejorrneeblog"
        component={Lowlanejorrneeblog}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.lowlanejorrneetabIconWrap}>
              <Image
                source={require('./assets/i/lowlanejorrneetab5.png')}
                tintColor={focused ? '#1C0151' : '#DE9CF8'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lowlanejorrneefav"
        component={Lowlanejorrneefav}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.lowlanejorrneetabIconWrap}>
              <Image
                source={require('./assets/i/lowlanejorrneetab6.png')}
                tintColor={focused ? '#1C0151' : '#DE9CF8'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  lowlanejorrneetabButton: {
    flex: 1,
  },
  lowlanejorrneetabButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowlanejorrneetabIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowlanejorrneetabBar: {
    elevation: 0,
    paddingTop: 12,
    marginHorizontal: 18,
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 18,
    bottom: 40,
    borderColor: '#1C0151',
    backgroundColor: '#721B95',
    height: 105,
    paddingBottom: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default Lowlanejorrneetabbs;
