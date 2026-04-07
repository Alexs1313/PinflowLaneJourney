import {
  lowlanejorrneeplccbb,
  type LowlanejorrneeplccItem,
} from './Lowlanejorrneeplcc';
import Lowlanejorrneebg from '../Lowlanejorrneecmponets/Lowlanejorrneebg';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {
  Image,
  Platform,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  lowlanejorrneeGetSavedIds,
  lowlanejorrneeIdsToRec,
  lowlanejorrneeToggleSavedId,
} from '../Lowlanejorrneeutils/Lowlanejorrneesavdstore';

const Lowlanejorrneerand = () => {
  const navigation = useNavigation<any>();
  const [shrkkwaterrshhRandDet, setShrkkwaterrshhRandDet] =
    useState<LowlanejorrneeplccItem | null>(null);
  const [shrkkwaterrshhRandFav, setShrkkwaterrshhRandFav] = useState<
    Record<string, boolean>
  >({});

  useFocusEffect(
    useCallback(() => {
      lowlanejorrneeGetSavedIds().then(ids => {
        setShrkkwaterrshhRandFav(lowlanejorrneeIdsToRec(ids));
      });
    }, []),
  );

  const lowlanejorrneerandTopPad = useMemo(
    () =>
      Platform.OS === 'android'
        ? StatusBar.currentHeight ?? 0
        : Platform.OS === 'ios'
        ? 44
        : 0,
    [],
  );

  const lowlanejorrneerandPick = useCallback(() => {
    if (lowlanejorrneeplccbb.length === 0) {
      return;
    }
    const idx = Math.floor(Math.random() * lowlanejorrneeplccbb.length);
    setShrkkwaterrshhRandDet(lowlanejorrneeplccbb[idx]);
  }, []);

  const lowlanejorrneerandShare = (it: LowlanejorrneeplccItem) => {
    Share.share({
      message: `${it.title}\n${it.address}\n${it.lat}, ${it.lng}`,
    }).catch(() => {});
  };

  const lowlanejorrneerandOpenOnMap = (it: LowlanejorrneeplccItem) => {
    navigation.navigate('Lowlanejorrneemap', {shrkkwaterrshhMapId: it.id});
  };

  return (
    <Lowlanejorrneebg>
      <View style={styles.lowlanejorrneerandroot}>
        <View
          style={[
            styles.lowlanejorrneerandhead,
            {paddingTop: 12 + lowlanejorrneerandTopPad},
          ]}>
          {shrkkwaterrshhRandDet ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setShrkkwaterrshhRandDet(null)}
              style={styles.lowlanejorrneerandback}
              hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}>
              <Image
                source={require('../../assets/i/lowlanejorrneback.png')}
                style={styles.lowlanejorrneerandbackimg}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.lowlanejorrneerandbackspc} />
          )}

          <Text style={styles.lowlanejorrneerandhdtxt} numberOfLines={1}>
            Strike Selector
          </Text>

          {shrkkwaterrshhRandDet ? (
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={lowlanejorrneerandPick}
              style={styles.lowlanejorrneerandref}>
              <Image source={require('../../assets/i/lowlanejorrnerel.png')} />
            </TouchableOpacity>
          ) : null}
        </View>

        {shrkkwaterrshhRandDet ? (
          <View style={styles.lowlanejorrneeranddetwrap}>
            <View style={styles.lowlanejorrneeranddetimgbox}>
              <Image
                source={shrkkwaterrshhRandDet.img}
                style={styles.lowlanejorrneeranddetimg}
                resizeMode="cover"
              />
              <LinearGradient
                colors={['rgba(27, 37, 116, 0)', 'rgb(17, 27, 102)']}
                style={styles.lowlanejorrneeranddetimgfad}
              />
              <View style={styles.lowlanejorrneeranddetfabrow}>
                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.lowlanejorrneeranddetfab}
                  onPress={() =>
                    lowlanejorrneeToggleSavedId(shrkkwaterrshhRandDet.id).then(
                      ids =>
                        setShrkkwaterrshhRandFav(lowlanejorrneeIdsToRec(ids)),
                    )
                  }>
                  <Image
                    source={
                      shrkkwaterrshhRandFav[shrkkwaterrshhRandDet.id]
                        ? require('../../assets/i/lowlanejorrnsaved.png')
                        : require('../../assets/i/lowlanejorrnsave.png')
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.lowlanejorrneeranddetfab}
                  onPress={() =>
                    lowlanejorrneerandShare(shrkkwaterrshhRandDet)
                  }>
                  <Image
                    source={require('../../assets/i/lowlanejorrnsher.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.lowlanejorrneeranddetbody}>
              <Text style={styles.lowlanejorrneeranddettitl}>
                {shrkkwaterrshhRandDet.title}
              </Text>
              <Text style={styles.lowlanejorrneeranddetlbl}>
                <Text style={styles.lowlanejorrneeranddetlblbold}>City: </Text>
                {shrkkwaterrshhRandDet.city}
              </Text>
              <Text style={styles.lowlanejorrneeranddetlbl}>
                <Text style={styles.lowlanejorrneeranddetlblbold}>
                  Atmosphere:{' '}
                </Text>
                {shrkkwaterrshhRandDet.atmosphere}
              </Text>
              <Text style={styles.lowlanejorrneeranddetlbl}>
                <Text style={styles.lowlanejorrneeranddetlblbold}>
                  Description:{' '}
                </Text>
                {shrkkwaterrshhRandDet.description}
              </Text>
              <Text style={styles.lowlanejorrneeranddetlbl}>
                <Text style={styles.lowlanejorrneeranddetlblbold}>
                  Address:{' '}
                </Text>
                {shrkkwaterrshhRandDet.address}
              </Text>
              <Text style={styles.lowlanejorrneeranddetlbl}>
                <Text style={styles.lowlanejorrneeranddetlblbold}>
                  Coordinates:{' '}
                </Text>
                {shrkkwaterrshhRandDet.lat}, {shrkkwaterrshhRandDet.lng}
              </Text>

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() =>
                  lowlanejorrneerandOpenOnMap(shrkkwaterrshhRandDet)
                }
                style={styles.lowlanejorrneeranddetmapwrap}>
                <LinearGradient
                  colors={['#ED5AAE', '#0F1195']}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  style={styles.lowlanejorrneeranddetmapgrad}>
                  <Text style={styles.lowlanejorrneeranddetmaptxt}>
                    Open in Map
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.lowlanejorrneerandstart}>
            <Image
              source={require('../../assets/i/lowlanejorrneerand.png')}
              style={{marginTop: 20, marginBottom: 30}}
            />

            <Text style={styles.lowlanejorrneerandstartsub}>Find Your</Text>
            <Text style={styles.lowlanejorrneerandstarttitl}>Next Lane</Text>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={lowlanejorrneerandPick}
              style={styles.lowlanejorrneerandstartbtnwrap}>
              <LinearGradient
                colors={['#ED5AAE', '#0F1195']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.lowlanejorrneerandstartbtn}>
                <Text style={styles.lowlanejorrneerandstartbtntxt}>
                  Start Selection
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Lowlanejorrneebg>
  );
};

const styles = StyleSheet.create({
  lowlanejorrneerandstart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingBottom: 130,
  },
  lowlanejorrneerandstartimg: {
    width: 260,
    height: 200,
    marginBottom: 18,
  },

  lowlanejorrneerandstartsub: {
    color: '#FF910B',
    fontSize: 24,
    fontFamily: 'Jua-Regular',
    textAlign: 'center',
    marginBottom: 4,
  },
  lowlanejorrneerandroot: {
    flex: 1,
  },
  lowlanejorrneerandhead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#721B95',
    paddingBottom: 14,
    paddingHorizontal: 8,
    minHeight: 110,
  },
  lowlanejorrneerandback: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowlanejorrneerandbackimg: {
    width: 28,
    height: 28,
  },

  lowlanejorrneerandhdtxt: {
    flex: 1,
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Jua-Regular',
    textAlign: 'center',
  },

  lowlanejorrneerandref: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowlanejorrneerandrefxt: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },

  lowlanejorrneerandstarttitl: {
    color: '#FF910B',
    fontSize: 44,
    fontFamily: 'Jua-Regular',
    textAlign: 'center',
    marginBottom: 22,
  },
  lowlanejorrneerandstartbtnwrap: {
    width: '100%',
    maxWidth: 260,
  },
  lowlanejorrneerandstartbtn: {
    borderRadius: 9,
    height: 53,
    width: 220,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#58006E',
  },
  lowlanejorrneerandstartbtntxt: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Itim-Regular',
  },
  lowlanejorrneeranddetwrap: {
    flex: 1,
  },
  lowlanejorrneeranddetimgbox: {
    position: 'relative',
    width: '100%',
  },
  lowlanejorrneeranddetimg: {
    width: '100%',
    height: 240,
    backgroundColor: '#1a1a3e',
  },
  lowlanejorrneeranddetimgfad: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 56,
  },
  lowlanejorrneeranddetfabrow: {
    position: 'absolute',
    top: 12,
    right: 12,
    flexDirection: 'row',
    gap: 10,
  },
  lowlanejorrneeranddetfab: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#721B95',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#B855D6',
  },
  lowlanejorrneeranddetbody: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 140,
  },
  lowlanejorrneeranddettitl: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
  },
  lowlanejorrneeranddetlbl: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 22,
    marginBottom: 4,
  },
  lowlanejorrneeranddetlblbold: {
    fontWeight: '500',
  },
  lowlanejorrneeranddetmapwrap: {
    marginTop: 14,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 320,
  },
  lowlanejorrneeranddetmapgrad: {
    borderRadius: 9,
    width: 185,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#58006E',
  },
  lowlanejorrneeranddetmaptxt: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Itim-Regular',
  },
});

export default Lowlanejorrneerand;
