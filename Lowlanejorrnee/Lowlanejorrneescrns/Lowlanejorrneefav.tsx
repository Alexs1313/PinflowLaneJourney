import {
  lowlanejorrneeGetSavedIds,
  lowlanejorrneeIdsToRec,
  lowlanejorrneeToggleSavedId,
} from '../Lowlanejorrneeutils/Lowlanejorrneesavdstore';

import {useFocusEffect, useNavigation} from '@react-navigation/native';

import React, {useCallback, useMemo, useState} from 'react';
import {
  FlatList,
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
  lowlanejorrneeplccbb,
  type LowlanejorrneeplccItem,
} from './Lowlanejorrneeplcc';
import Lowlanejorrneebg from '../Lowlanejorrneecmponets/Lowlanejorrneebg';

const Lowlanejorrneefav = () => {
  const navigation = useNavigation<any>();
  const [lowlanejorrneefavDet, setLowlanejorrneefavDet] =
    useState<LowlanejorrneeplccItem | null>(null);
  const [lowlanejorrneefavRec, setLowlanejorrneefavRec] = useState<
    Record<string, boolean>
  >({});

  useFocusEffect(
    useCallback(() => {
      lowlanejorrneeGetSavedIds().then(ids => {
        setLowlanejorrneefavRec(lowlanejorrneeIdsToRec(ids));
      });
    }, []),
  );

  const lowlanejorrneefavList = useMemo(() => {
    const ids = Object.keys(lowlanejorrneefavRec).filter(
      k => lowlanejorrneefavRec[k],
    );
    if (ids.length === 0) {
      return [];
    }
    return lowlanejorrneeplccbb.filter(it => lowlanejorrneefavRec[it.id]);
  }, [lowlanejorrneefavRec]);

  const lowlanejorrneefavShare = (it: LowlanejorrneeplccItem) => {
    Share.share({
      message: `${it.title}\n${it.address}\n${it.lat}, ${it.lng}`,
    }).catch(() => {});
  };

  const lowlanejorrneefavTopPad =
    Platform.OS === 'android'
      ? StatusBar.currentHeight ?? 0
      : Platform.OS === 'ios'
      ? 44
      : 0;

  const lowlanejorrneefavExplore = () => {
    navigation.navigate('Lowlanejorrneeplcc');
  };

  const lowlanejorrneefavOpenOnMap = (it: LowlanejorrneeplccItem) => {
    setLowlanejorrneefavDet(null);
    navigation.navigate('Lowlanejorrneemap', {shrkkwaterrshhMapId: it.id});
  };

  return (
    <Lowlanejorrneebg>
      <View style={styles.lowlanejorrneefavroot}>
        {lowlanejorrneefavDet ? (
          <View style={styles.lowlanejorrneefavdetwrap}>
            <View
              style={[
                styles.lowlanejorrneefavdethead,
                {paddingTop: 10 + lowlanejorrneefavTopPad},
                {minHeight: 110},
              ]}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setLowlanejorrneefavDet(null)}
                style={styles.lowlanejorrneefavdetback}
                hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}>
                <Image
                  source={require('../../assets/i/lowlanejorrneback.png')}
                  style={styles.lowlanejorrneefavdetbackimg}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.lowlanejorrneefavdethdtxt} numberOfLines={1}>
                Saved Lanes
              </Text>
              <View style={styles.lowlanejorrneefavdetheadspc} />
            </View>

            <View style={styles.lowlanejorrneefavdetsclv}>
              <View style={styles.lowlanejorrneefavdetimgbox}>
                <View>
                  <Image
                    source={lowlanejorrneefavDet.img}
                    style={styles.lowlanejorrneefavdetimg}
                    resizeMode="cover"
                  />
                  <LinearGradient
                    colors={['rgba(17, 27, 102, 0)', 'rgba(17, 27, 102, 1)']}
                    style={styles.lowlanejorrneefavdetimggrad}
                  />
                </View>
                <View style={styles.lowlanejorrneefavdetfabrow}>
                  <TouchableOpacity
                    activeOpacity={0.85}
                    style={styles.lowlanejorrneefavdetfab}
                    onPress={() =>
                      lowlanejorrneeToggleSavedId(lowlanejorrneefavDet.id).then(
                        ids => {
                          setLowlanejorrneefavRec(lowlanejorrneeIdsToRec(ids));
                          if (!ids.includes(lowlanejorrneefavDet.id)) {
                            setLowlanejorrneefavDet(null);
                          }
                        },
                      )
                    }>
                    <Image
                      source={require('../../assets/i/lowlanejorrnsaved.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.85}
                    style={styles.lowlanejorrneefavdetfab}
                    onPress={() =>
                      lowlanejorrneefavShare(lowlanejorrneefavDet)
                    }>
                    <Image
                      source={require('../../assets/i/lowlanejorrnsher.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.lowlanejorrneefavdetbody}>
                <Text style={styles.lowlanejorrneefavdettitl}>
                  {lowlanejorrneefavDet.title}
                </Text>
                <Text style={styles.lowlanejorrneefavdetlbl}>
                  <Text style={styles.lowlanejorrneefavdetlblbold}>City: </Text>
                  {lowlanejorrneefavDet.city}
                </Text>
                <Text style={styles.lowlanejorrneefavdetlbl}>
                  <Text style={styles.lowlanejorrneefavdetlblbold}>
                    Atmosphere:{' '}
                  </Text>
                  {lowlanejorrneefavDet.atmosphere}
                </Text>
                <Text style={styles.lowlanejorrneefavdetlbl}>
                  <Text style={styles.lowlanejorrneefavdetlblbold}>
                    Description:{' '}
                  </Text>
                  {lowlanejorrneefavDet.description}
                </Text>
                <Text style={styles.lowlanejorrneefavdetlbl}>
                  <Text style={styles.lowlanejorrneefavdetlblbold}>
                    Address:{' '}
                  </Text>
                  {lowlanejorrneefavDet.address}
                </Text>
                <Text style={styles.lowlanejorrneefavdetlbl}>
                  <Text style={styles.lowlanejorrneefavdetlblbold}>
                    Coordinates:{' '}
                  </Text>
                  {lowlanejorrneefavDet.lat}, {lowlanejorrneefavDet.lng}
                </Text>

                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() =>
                    lowlanejorrneefavOpenOnMap(lowlanejorrneefavDet)
                  }
                  style={styles.lowlanejorrneefavdetmapwrap}>
                  <LinearGradient
                    colors={['#ED5AAE', '#0F1195']}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}
                    style={styles.lowlanejorrneefavdetmapgrad}>
                    <Text style={styles.lowlanejorrneefavdetmaptxt}>
                      Open in Map
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.lowlanejorrneefavsafe}>
            <View style={styles.lowlanejorrneefavhead}>
              <Text style={styles.lowlanejorrneefavhdtxt}>Saved Lanes</Text>
            </View>

            {lowlanejorrneefavList.length === 0 ? (
              <View style={styles.lowlanejorrneefavempty}>
                <Image
                  source={require('../../assets/i/lowlanejorrneefavempty.png')}
                  style={{marginTop: 40}}
                />
                <Text style={styles.lowlanejorrneefavemptytitl}>
                  No Saved Lanes Yet
                </Text>
                <Text style={styles.lowlanejorrneefavemptysub}>
                  You haven’t saved any spots yet.{'\n'}Explore and keep places
                  you want to visit.
                </Text>

                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={lowlanejorrneefavExplore}
                  style={styles.lowlanejorrneefavemptybtnwrap}>
                  <LinearGradient
                    colors={['#ED5AAE', '#0F1195']}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}
                    style={styles.lowlanejorrneefavemptybtn}>
                    <Text style={styles.lowlanejorrneefavemptybtntxt}>
                      Explore Spots
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            ) : (
              <FlatList
                data={lowlanejorrneefavList}
                keyExtractor={it => it.id}
                scrollEnabled={false}
                contentContainerStyle={styles.lowlanejorrneefavlistpad}
                showsVerticalScrollIndicator={false}
                renderItem={({item: lowlanejorrneefavIt}) => (
                  <View style={styles.lowlanejorrneefavcard}>
                    <View style={styles.lowlanejorrneefavcardrow}>
                      <Image
                        source={lowlanejorrneefavIt.img}
                        style={styles.lowlanejorrneefavcardimg}
                      />
                      <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={[
                          'rgba(95, 24, 124, 0)',
                          'rgba(95, 24, 124, 1)',
                        ]}
                        style={styles.lowlanejorrneefavcardfade}
                      />
                      <View style={styles.lowlanejorrneefavcardbody}>
                        <Text
                          style={styles.lowlanejorrneefavtitl}
                          numberOfLines={2}>
                          {lowlanejorrneefavIt.title}
                        </Text>
                        <Text style={styles.lowlanejorrneefavsub}>
                          <Text style={styles.lowlanejorrneefavsubbold}>
                            City:
                          </Text>{' '}
                          {lowlanejorrneefavIt.city}
                        </Text>
                        <Text style={styles.lowlanejorrneefavsub}>
                          <Text style={styles.lowlanejorrneefavsubbold}>
                            Atmosphere:
                          </Text>{' '}
                          {lowlanejorrneefavIt.atmosphere}
                        </Text>

                        <TouchableOpacity
                          activeOpacity={0.85}
                          onPress={() =>
                            setLowlanejorrneefavDet(lowlanejorrneefavIt)
                          }
                          style={styles.lowlanejorrneefavopenwrap}>
                          <LinearGradient
                            colors={['#ED5AAE', '#0F1195']}
                            start={{x: 0, y: 0.5}}
                            end={{x: 1, y: 0.5}}
                            style={styles.lowlanejorrneefavopengrad}>
                            <Text style={styles.lowlanejorrneefavopentxt}>
                              Open
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
            )}
          </View>
        )}
      </View>
    </Lowlanejorrneebg>
  );
};

const styles = StyleSheet.create({
  lowlanejorrneefavemptyimg: {
    width: 220,
    height: 220,
    marginBottom: 18,
  },

  lowlanejorrneefavemptytitl: {
    color: '#FF910B',
    fontSize: 24,
    fontFamily: 'Jua-Regular',
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 50,
  },

  lowlanejorrneefavroot: {
    flex: 1,
  },
  lowlanejorrneefavsafe: {
    flex: 1,
    paddingBottom: 120,
  },
  lowlanejorrneefavhead: {
    backgroundColor: '#721B95',
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'flex-end',
    minHeight: 110,
    paddingBottom: 20,
  },
  lowlanejorrneefavhdtxt: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Jua-Regular',
  },
  lowlanejorrneefavempty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingBottom: 80,
  },

  lowlanejorrneefavemptysub: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Itim-Regular',
    textAlign: 'center',
    marginBottom: 46,
  },
  lowlanejorrneefavemptybtnwrap: {
    width: '100%',
    maxWidth: 260,
  },

  lowlanejorrneefavemptybtn: {
    borderRadius: 9,
    height: 53,
    width: 220,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#58006E',
  },
  lowlanejorrneefavemptybtntxt: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Itim-Regular',
  },
  lowlanejorrneefavlistpad: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 20,
    marginTop: 10,
  },
  lowlanejorrneefavcard: {
    backgroundColor: '#5F187C',
    borderRadius: 20,
    marginBottom: 14,
  },
  lowlanejorrneefavcardrow: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  lowlanejorrneefavcardimg: {
    width: 165,
    height: '100%',
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },
  lowlanejorrneefavcardfade: {
    position: 'absolute',
    width: 30,
    height: '100%',
    zIndex: 1,
    left: 140,
  },
  lowlanejorrneefavcardbody: {
    flex: 1,
    justifyContent: 'space-between',
    minHeight: 110,
    padding: 10,
  },
  lowlanejorrneefavtitl: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 5,
  },
  lowlanejorrneefavsub: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '300',
    marginBottom: 2,
  },
  lowlanejorrneefavsubbold: {
    fontWeight: '500',
  },
  lowlanejorrneefavopenwrap: {
    marginTop: 8,
  },
  lowlanejorrneefavopengrad: {
    width: 100,
    height: 26,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  lowlanejorrneefavopentxt: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Itim-Regular',
  },
  lowlanejorrneefavdetwrap: {
    flex: 1,
    backgroundColor: '#111B66',
    flexDirection: 'column',
  },
  lowlanejorrneefavdethead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#721B95',
    paddingBottom: 10,
    paddingHorizontal: 8,
  },
  lowlanejorrneefavdetback: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowlanejorrneefavdetbackimg: {
    width: 28,
    height: 28,
  },
  lowlanejorrneefavdethdtxt: {
    flex: 1,
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Jua-Regular',
    textAlign: 'center',
  },
  lowlanejorrneefavdetheadspc: {
    width: 44,
  },
  lowlanejorrneefavdetsclv: {
    flex: 1,
  },
  lowlanejorrneefavdetimgbox: {
    position: 'relative',
    width: '100%',
  },
  lowlanejorrneefavdetimg: {
    width: '100%',
    height: 260,
    backgroundColor: '#1a1a3e',
  },
  lowlanejorrneefavdetimggrad: {
    position: 'absolute',
    width: '100%',
    height: 60,
    bottom: 0,
  },
  lowlanejorrneefavdetfabrow: {
    position: 'absolute',
    top: 18,
    right: 12,
    flexDirection: 'row',
    gap: 10,
  },
  lowlanejorrneefavdetfab: {
    width: 40,
    height: 40,
    borderRadius: 22,
    backgroundColor: '#721B95',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowlanejorrneefavdetbody: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: -60,
    paddingBottom: 140,
  },
  lowlanejorrneefavdettitl: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
  },
  lowlanejorrneefavdetlbl: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 22,
    marginBottom: 4,
  },
  lowlanejorrneefavdetlblbold: {
    fontWeight: '500',
  },
  lowlanejorrneefavdetmapwrap: {
    marginTop: 14,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 320,
  },
  lowlanejorrneefavdetmapgrad: {
    borderRadius: 9,
    width: 185,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#58006E',
  },
  lowlanejorrneefavdetmaptxt: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Itim-Regular',
  },
});

export default Lowlanejorrneefav;
