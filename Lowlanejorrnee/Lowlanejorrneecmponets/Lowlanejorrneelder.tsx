import React, {useEffect, useRef} from 'react';
import {View, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

import {Animated} from 'react-native';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

export const lowlanejorrneelder = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body {
    margin: 0;
    padding: 0;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .loader {
    width: 50px;
    height: 50px;
    position: relative;
    transform: translateX(-50%);
  }

  .loader::before, 
  .loader::after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    mix-blend-mode: multiply;
    animation: rotate92523 2s infinite cubic-bezier(0.77, 0, 0.175, 1);
  }

  .loader::before {
    background-color: #75e2ff;
  }

  .loader::after {
    background-color: #ff8496;
    animation-delay: 1s;
  }

  @keyframes rotate92523 {
    0%, 100% {
      left: 35px;
    }

    25% {
      transform: scale(.3);
    }

    50% {
      left: 0%;
    }

    75% {
      transform: scale(1);
    }
  }
</style>
</head>
<body>
  <div class="loader"></div>
</body>
</html>`;

const Lowlanejorrneelder = () => {
  const navigation = useNavigation();
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      navigation.replace('Lowlanejorrneeonb');
    }, 6000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
        console.log('timer cleared');
      }
    };
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: '#0F1195'}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <WebView
            originWhitelist={['*']}
            source={{html: lowlanejorrneelder}}
            style={{width: 260, height: 150, backgroundColor: 'transparent'}}
            scrollEnabled={false}
            transparent={true}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Lowlanejorrneelder;
