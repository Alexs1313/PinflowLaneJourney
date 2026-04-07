import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

const Lowlanejorrneebg = ({children}) => {
  return (
    <View style={styles.background}>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#111B66',
  },
  content: {
    flexGrow: 1,
  },
});

export default Lowlanejorrneebg;
