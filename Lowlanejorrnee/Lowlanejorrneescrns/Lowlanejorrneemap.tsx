import {
  lowlanejorrneeplccbb,
  type LowlanejorrneeplccItem,
} from './Lowlanejorrneeplcc';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';

import React, {useCallback, useMemo, useRef, useState} from 'react';
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
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import {
  lowlanejorrneeGetSavedIds,
  lowlanejorrneeIdsToRec,
  lowlanejorrneeToggleSavedId,
} from '../Lowlanejorrneeutils/Lowlanejorrneesavdstore';

const lowlanejorrneeMapInitRgn = {
  latitude: 51.2,
  longitude: 10.45,
  latitudeDelta: 7.5,
  longitudeDelta: 7.5,
};

const Lowlanejorrneemap = () => {
  const route = useRoute<any>();
  const shrkkwaterrshhMapRef = useRef<MapView | null>(null);
  const [shrkkwaterrshhMapDet, setShrkkwaterrshhMapDet] =
    useState<LowlanejorrneeplccItem | null>(null);
  const [shrkkwaterrshhMapFav, setShrkkwaterrshhMapFav] = useState<
    Record<string, boolean>
  >({});

  const lowlanejorrneeMapTopPad = useMemo(
    () =>
      Platform.OS === 'android'
        ? StatusBar.currentHeight ?? 0
        : Platform.OS === 'ios'
        ? 40
        : 0,
    [],
  );

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();

      return () => Orientation.unlockAllOrientations();
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      lowlanejorrneeGetSavedIds().then(ids => {
        setShrkkwaterrshhMapFav(lowlanejorrneeIdsToRec(ids));
      });
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      return () => {
        setShrkkwaterrshhMapDet(null);
      };
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      const shrkkwaterrshhMapId = route?.params?.shrkkwaterrshhMapId;
      if (!shrkkwaterrshhMapId) {
        return;
      }
      const it = lowlanejorrneeplccbb.find(v => v.id === shrkkwaterrshhMapId);
      if (!it) {
        return;
      }
      setShrkkwaterrshhMapDet(it);
      shrkkwaterrshhMapRef.current?.animateToRegion(
        {
          latitude: it.lat,
          longitude: it.lng,
          latitudeDelta: 0.25,
          longitudeDelta: 0.25,
        },
        650,
      );
    }, [route?.params?.shrkkwaterrshhMapId]),
  );

  const lowlanejorrneeMapShare = useCallback((it: LowlanejorrneeplccItem) => {
    Share.share({
      message: `${it.title}\n${it.address}\n${it.lat}, ${it.lng}`,
    }).catch(() => {});
  }, []);

  return (
    <View style={styles.lowlanejorrneeMaproot}>
      <View
        style={[
          styles.lowlanejorrneeMaphead,
          {paddingTop: 15 + lowlanejorrneeMapTopPad},
          styles.lowlanejorrneeMapheadmin,
        ]}>
        {shrkkwaterrshhMapDet ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShrkkwaterrshhMapDet(null)}
            style={styles.lowlanejorrneeMapback}
            hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}>
            <Image
              source={require('../../assets/i/lowlanejorrneback.png')}
              style={styles.lowlanejorrneeMapbackimg}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.lowlanejorrneeMapbackspc} />
        )}
        <Text style={styles.lowlanejorrneeMaphttxt} numberOfLines={1}>
          Interactive Map
        </Text>
        <View style={styles.lowlanejorrneeMapbackspc} />
      </View>

      <View style={styles.lowlanejorrneeMapbody}>
        <MapView
          provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
          style={StyleSheet.absoluteFill}
          userInterfaceStyle="dark"
          initialRegion={lowlanejorrneeMapInitRgn}
          ref={ref => {
            shrkkwaterrshhMapRef.current = ref;
          }}
          showsUserLocation={false}
          showsMyLocationButton={false}>
          {lowlanejorrneeplccbb.map(it => (
            <Marker
              key={it.id}
              coordinate={{latitude: it.lat, longitude: it.lng}}
              anchor={{x: 0.5, y: 1}}
              tracksViewChanges={false}
              onPress={() => setShrkkwaterrshhMapDet(it)}>
              {Platform.OS === 'ios' ? (
                <Image
                  source={require('../../assets/i/lowlanejorrnmarker.png')}
                />
              ) : null}
            </Marker>
          ))}
        </MapView>

        {shrkkwaterrshhMapDet ? (
          <View style={styles.lowlanejorrneeMapcardwrap}>
            <View style={styles.lowlanejorrneeMapcard}>
              <View style={styles.lowlanejorrneeMapcardimgbox}>
                <Image
                  source={shrkkwaterrshhMapDet.img}
                  style={styles.lowlanejorrneeMapcardimg}
                  resizeMode="cover"
                />
                <LinearGradient
                  colors={['rgba(27, 37, 116, 0)', 'rgb(17, 27, 102)']}
                  style={styles.lowlanejorrneeMapcardimgfad}
                />
                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.lowlanejorrneeMapclose}
                  onPress={() => setShrkkwaterrshhMapDet(null)}>
                  <Image
                    source={require('../../assets/i/lowlanejorrnmcls.png')}
                  />
                </TouchableOpacity>
                <View style={styles.lowlanejorrneeMapfabrow}>
                  <TouchableOpacity
                    activeOpacity={0.85}
                    style={styles.lowlanejorrneeMapfab}
                    onPress={() =>
                      lowlanejorrneeToggleSavedId(shrkkwaterrshhMapDet.id).then(
                        ids =>
                          setShrkkwaterrshhMapFav(lowlanejorrneeIdsToRec(ids)),
                      )
                    }>
                    <Image
                      source={
                        shrkkwaterrshhMapFav[shrkkwaterrshhMapDet.id]
                          ? require('../../assets/i/lowlanejorrnsaved.png')
                          : require('../../assets/i/lowlanejorrnsave.png')
                      }
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.85}
                    style={styles.lowlanejorrneeMapfab}
                    onPress={() =>
                      lowlanejorrneeMapShare(shrkkwaterrshhMapDet)
                    }>
                    <Image
                      source={require('../../assets/i/lowlanejorrnsher.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.lowlanejorrneeMapcardscl}>
                <Text style={styles.lowlanejorrneeMapcardtitl}>
                  {shrkkwaterrshhMapDet.title}
                </Text>
                <Text style={styles.lowlanejorrneeMapcardlbl}>
                  <Text style={styles.lowlanejorrneeMapcardlblbd}>City: </Text>
                  {shrkkwaterrshhMapDet.city}
                </Text>
                <Text style={styles.lowlanejorrneeMapcardlbl}>
                  <Text style={styles.lowlanejorrneeMapcardlblbd}>
                    Atmosphere:{' '}
                  </Text>
                  {shrkkwaterrshhMapDet.atmosphere}
                </Text>
                <Text
                  style={styles.lowlanejorrneeMapcardlbl}
                  numberOfLines={Platform.OS === 'ios' ? undefined : 3}>
                  <Text style={styles.lowlanejorrneeMapcardlblbd}>
                    Description:{' '}
                  </Text>
                  {shrkkwaterrshhMapDet.description}
                </Text>
                <Text style={styles.lowlanejorrneeMapcardlbl}>
                  <Text style={styles.lowlanejorrneeMapcardlblbd}>
                    Address:{' '}
                  </Text>
                  {shrkkwaterrshhMapDet.address}
                </Text>
                <Text style={styles.lowlanejorrneeMapcardlbl}>
                  <Text style={styles.lowlanejorrneeMapcardlblbd}>
                    Coordinates:{' '}
                  </Text>
                  {shrkkwaterrshhMapDet.lat}, {shrkkwaterrshhMapDet.lng}
                </Text>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lowlanejorrneeMapclose: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#721B95',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowlanejorrneeMapclosetxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  lowlanejorrneeMaproot: {
    flex: 1,
    backgroundColor: '#111B66',
  },
  lowlanejorrneeMaphead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#721B95',
    paddingBottom: 14,
    paddingHorizontal: 8,
  },
  lowlanejorrneeMapheadmin: {
    minHeight: 110,
  },
  lowlanejorrneeMapback: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },

  lowlanejorrneeMapbackspc: {
    width: 44,
  },
  lowlanejorrneeMaphttxt: {
    flex: 1,
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Jua-Regular',
    textAlign: 'center',
  },
  lowlanejorrneeMapbody: {
    flex: 1,
    position: 'relative',
  },
  lowlanejorrneeMappin: {
    alignItems: 'center',
  },
  lowlanejorrneeMappinhead: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#5A0F7A',
    borderWidth: 2,
    borderColor: '#B855D6',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 5,
    paddingTop: 5,
  },
  lowlanejorrneeMappingloss: {
    width: 10,
    height: 6,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  lowlanejorrneeMappinstem: {
    width: 3,
    height: 10,
    marginTop: -1,
    backgroundColor: '#5A0F7A',
    borderRadius: 2,
  },
  lowlanejorrneeMapcardwrap: {
    paddingHorizontal: 6,
    paddingTop: 20,
    justifyContent: 'center',
    pointerEvents: 'box-none',
  },
  lowlanejorrneeMapcard: {
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#111B66',
    elevation: 14,
  },
  lowlanejorrneeMapcardimgbox: {
    position: 'relative',
    width: '100%',
  },
  lowlanejorrneeMapcardimg: {
    width: '100%',
    height: 180,
  },
  lowlanejorrneeMapcardimgfad: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 55,
  },

  lowlanejorrneeMapfabrow: {
    position: 'absolute',
    top: 12,
    right: 12,
    flexDirection: 'row',
    gap: 10,
  },
  lowlanejorrneeMapfab: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#721B95',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowlanejorrneeMapcardscl: {
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 12,
    marginTop: -25,
  },
  lowlanejorrneeMapcardsclc: {
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 22,
  },
  lowlanejorrneeMapcardtitl: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  lowlanejorrneeMapcardlbl: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 21,
    marginBottom: 4,
  },
  lowlanejorrneeMapcardlblbd: {
    fontWeight: '500',
  },
  lowlanejorrneeMapmapbtnwrap: {
    marginTop: 12,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 280,
  },
  lowlanejorrneeMapmapbtn: {
    borderRadius: 50,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#58006E',
  },
  lowlanejorrneeMapmapbtntxt: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Itim-Regular',
    fontWeight: '600',
  },
});

export default Lowlanejorrneemap;
