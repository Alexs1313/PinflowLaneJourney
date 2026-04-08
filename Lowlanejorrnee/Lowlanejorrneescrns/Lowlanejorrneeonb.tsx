import LinearGradient from 'react-native-linear-gradient';

import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const lowlanejorrneeonbb = [
  {
    title: 'Discover Bowling Germany',
    sub: 'Find standout bowling spots across cities and explore their unique atmosphere',
    img: require('../../assets/i/lowlanejorrneon1.png'),
    buttonLabel: 'Continue',
  },
  {
    title: 'Pick Your Next Spot',
    sub: 'Let the motion guide you to a place worth visiting',
    img: require('../../assets/i/lowlanejorrneon2.png'),
    buttonLabel: 'Next',
  },
  {
    title: 'Know the Rules Better',
    sub: 'Answer real situations and learn how decisions shape the outcome',
    img: require('../../assets/i/lowlanejorrneon3.png'),
    buttonLabel: 'Next',
  },
  {
    title: 'See the Structure',
    sub: 'Understand how each throw connects to position and layout',
    img: require('../../assets/i/lowlanejorrneon4.png'),
    buttonLabel: 'Next',
  },
  {
    title: 'Explore Bowling Culture',
    sub: 'Get tips, insights and discover how bowling spaces differ across Germany',
    img: require('../../assets/i/lowlanejorrneon5.png'),
    buttonLabel: 'Continue',
  },
  {
    title: 'Save Your Lanes',
    sub: 'Keep track of places you want to visit and build your own list',
    img: require('../../assets/i/lowlanejorrneon6.png'),
    buttonLabel: 'Get Started',
  },
];

const Lowlanejorrneeonb = () => {
  const navigation = useNavigation();
  const [shrkkwaterrshhIdx, setShrkkwaterrshhIdx] = useState(0);

  const shrkkwaterrshhNext = () => {
    shrkkwaterrshhIdx < 5
      ? setShrkkwaterrshhIdx(shrkkwaterrshhIdx + 1)
      : navigation.replace('Lowlanejorrneetabbs');
  };

  return (
    <LinearGradient colors={['#721B95', 'rgb(33, 10, 73)']} style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.lowlanejorrneecontainer}>
          <Text style={styles.lowlanejorrneestep}>
            Step {shrkkwaterrshhIdx + 1} of 6
          </Text>

          <Image
            source={lowlanejorrneeonbb[shrkkwaterrshhIdx].img}
            style={{alignSelf: 'center', marginBottom: 40}}
          />
          <View style={styles.lowlanejorrneesheet}>
            <Text style={styles.lowlanejorrneebloggtitl}>
              {lowlanejorrneeonbb[shrkkwaterrshhIdx].title}
            </Text>
            <Text style={styles.lowlanejorrneebloggsub}>
              {lowlanejorrneeonbb[shrkkwaterrshhIdx].sub}
            </Text>

            <TouchableOpacity activeOpacity={0.8} onPress={shrkkwaterrshhNext}>
              <LinearGradient
                colors={['#ED5AAE', '#DC0062']}
                style={{
                  width: 250,
                  height: 46,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}>
                <Text style={styles.lowlanejorrneebloggtext}>
                  {lowlanejorrneeonbb[shrkkwaterrshhIdx].buttonLabel}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.lowlanejorrneebloggskipcontainer}
              onPress={() => navigation.replace('Lowlanejorrneetabbs')}>
              <Text style={styles.lowlanejorrneebloggskip}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  lowlanejorrneebloggtitl: {
    color: '#FF910B',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Jua-Regular',
  },
  lowlanejorrneebloggskip: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Itim-Regular',
  },
  lowlanejorrneesheet: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  lowlanejorrneecontainer: {
    flex: 1,
    paddingTop: 70,
    justifyContent: 'space-between',
    paddingBottom: 100,
  },
  lowlanejorrneebloggtext: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Itim-Regular',
  },
  lowlanejorrneebloggsub: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 50,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Itim-Regular',
    paddingHorizontal: 20,
  },

  lowlanejorrneebloggskipcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    gap: 3,
    marginTop: 8,
    width: 250,
    height: 46,
    borderRadius: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
  },
  lowlanejorrneestep: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 80,
  },
});

export default Lowlanejorrneeonb;
