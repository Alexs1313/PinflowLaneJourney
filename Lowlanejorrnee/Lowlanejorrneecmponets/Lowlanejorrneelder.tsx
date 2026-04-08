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
    width: 48px;
    height: 48px;
    position: relative;
  }

  .loader:before {
    content: '';
    width: 48px;
    height: 5px;
    background: rgba(240,128,128,0.3);
    position: absolute;
    top: 60px;
    left: 0;
    border-radius: 50%;
    animation: shadow324 0.5s linear infinite;
  }

  .loader:after {
    content: '';
    width: 100%;
    height: 100%;
    background: #f08080;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    animation: jump7456 0.5s linear infinite;
  }

  @keyframes jump7456 {
    15% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
    50% {
      transform: translateY(18px) scale(1, .9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    75% {
      transform: translateY(9px) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes shadow324 {
    0%, 100% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1);
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
    <View style={{flex: 1, backgroundColor: 'rgb(45, 16, 94)'}}>
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
