import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
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

import {lowlanejorrneeTestLevels} from '../Lowlanejorrneedata/lowlanejorrneetestdata';
import Lowlanejorrneebg from '../Lowlanejorrneecmponets/Lowlanejorrneebg';

type LowlanejorrneeTestPhase =
  | 'intro'
  | 'quiz'
  | 'levelPass'
  | 'levelFail'
  | 'gameComplete';

const Lowlanejorrneetest = () => {
  const [shrkkwaterrshhTstPhs, setShrkkwaterrshhTstPhs] =
    useState<LowlanejorrneeTestPhase>('intro');
  const [shrkkwaterrshhTstLvl, setShrkkwaterrshhTstLvl] = useState(0);
  const [shrkkwaterrshhTstFrm, setShrkkwaterrshhTstFrm] = useState(0);
  const shrkkwaterrshhTstWrngRef = useRef(0);
  const [shrkkwaterrshhTstSel, setShrkkwaterrshhTstSel] = useState<
    number | null
  >(null);
  const shrkkwaterrshhTstTmr = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  useEffect(() => {
    return () => {
      if (shrkkwaterrshhTstTmr.current) {
        clearTimeout(shrkkwaterrshhTstTmr.current);
      }
    };
  }, []);

  const lowlanejorrneeTstTopPad = useMemo(
    () =>
      Platform.OS === 'android'
        ? StatusBar.currentHeight ?? 0
        : Platform.OS === 'ios'
        ? 44
        : 0,
    [],
  );

  const lowlanejorrneeTstLvlNow =
    lowlanejorrneeTestLevels[shrkkwaterrshhTstLvl];
  const lowlanejorrneeTstQNow =
    lowlanejorrneeTstLvlNow?.questions[shrkkwaterrshhTstFrm];

  const lowlanejorrneeTstRstQuiz = useCallback(() => {
    if (shrkkwaterrshhTstTmr.current) {
      clearTimeout(shrkkwaterrshhTstTmr.current);
      shrkkwaterrshhTstTmr.current = null;
    }
    setShrkkwaterrshhTstSel(null);
    shrkkwaterrshhTstWrngRef.current = 0;
    setShrkkwaterrshhTstFrm(0);
    setShrkkwaterrshhTstPhs('quiz');
  }, []);

  const lowlanejorrneeTstStart = () => {
    setShrkkwaterrshhTstLvl(0);
    lowlanejorrneeTstRstQuiz();
  };

  const lowlanejorrneeTstToIntro = () => {
    if (shrkkwaterrshhTstTmr.current) {
      clearTimeout(shrkkwaterrshhTstTmr.current);
      shrkkwaterrshhTstTmr.current = null;
    }
    setShrkkwaterrshhTstPhs('intro');
    setShrkkwaterrshhTstSel(null);
    shrkkwaterrshhTstWrngRef.current = 0;
    setShrkkwaterrshhTstFrm(0);
    setShrkkwaterrshhTstLvl(0);
  };

  const lowlanejorrneeTstShare = (msg: string) => {
    Share.share({message: msg}).catch(() => {});
  };

  const lowlanejorrneeTstAns = (idx: number) => {
    if (shrkkwaterrshhTstPhs !== 'quiz' || shrkkwaterrshhTstSel !== null) {
      return;
    }
    if (!lowlanejorrneeTstQNow) {
      return;
    }
    setShrkkwaterrshhTstSel(idx);
    const ok = idx === lowlanejorrneeTstQNow.correct;
    const frmNow = shrkkwaterrshhTstFrm;
    if (!ok) {
      shrkkwaterrshhTstWrngRef.current += 1;
    }
    shrkkwaterrshhTstTmr.current = setTimeout(() => {
      shrkkwaterrshhTstTmr.current = null;
      if (frmNow >= 5) {
        if (shrkkwaterrshhTstWrngRef.current > 0) {
          setShrkkwaterrshhTstPhs('levelFail');
        } else if (
          shrkkwaterrshhTstLvl >=
          lowlanejorrneeTestLevels.length - 1
        ) {
          setShrkkwaterrshhTstPhs('gameComplete');
        } else {
          setShrkkwaterrshhTstPhs('levelPass');
        }
        setShrkkwaterrshhTstSel(null);
        return;
      }
      setShrkkwaterrshhTstFrm(f => f + 1);
      setShrkkwaterrshhTstSel(null);
    }, 700);
  };

  const lowlanejorrneeTstNxtLvl = () => {
    setShrkkwaterrshhTstLvl(l => l + 1);
    lowlanejorrneeTstRstQuiz();
  };

  const lowlanejorrneeTstRtry = () => {
    lowlanejorrneeTstRstQuiz();
    setShrkkwaterrshhTstPhs('quiz');
  };

  const lowlanejorrneeTstOptStyle = (i: number) => {
    if (shrkkwaterrshhTstSel === null) {
      return styles.lowlanejorrneeTstopt;
    }
    const corr = lowlanejorrneeTstQNow?.correct;
    if (i === corr) {
      return [styles.lowlanejorrneeTstopt, styles.lowlanejorrneeTstoptok];
    }
    if (i === shrkkwaterrshhTstSel) {
      return [styles.lowlanejorrneeTstopt, styles.lowlanejorrneeTstoptbad];
    }
    return [styles.lowlanejorrneeTstopt, styles.lowlanejorrneeTstoptdim];
  };

  return (
    <Lowlanejorrneebg>
      <View style={styles.lowlanejorrneeTstroot}>
        <View
          style={[
            styles.lowlanejorrneeTsthead,
            {paddingTop: 12 + lowlanejorrneeTstTopPad},
          ]}>
          {shrkkwaterrshhTstPhs === 'quiz' ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={lowlanejorrneeTstToIntro}
              style={styles.lowlanejorrneeTstback}
              hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}>
              <Image source={require('../../assets/i/lowlanejorrneback.png')} />
            </TouchableOpacity>
          ) : shrkkwaterrshhTstPhs === 'levelPass' ||
            shrkkwaterrshhTstPhs === 'levelFail' ||
            shrkkwaterrshhTstPhs === 'gameComplete' ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={lowlanejorrneeTstToIntro}
              style={styles.lowlanejorrneeTstback}
              hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}>
              <Image source={require('../../assets/i/lowlanejorrneback.png')} />
            </TouchableOpacity>
          ) : (
            <View style={styles.lowlanejorrneeTstbackspc} />
          )}
          <Text style={styles.lowlanejorrneeTsthdtxt} numberOfLines={1}>
            Bowling Sense Check
          </Text>
          <View style={styles.lowlanejorrneeTstbackspc} />
        </View>

        {shrkkwaterrshhTstPhs === 'intro' ? (
          <View style={styles.lowlanejorrneeTstintro}>
            <Image
              source={require('../../assets/i/lowlanejorrneetestintro.png')}
              style={{marginTop: 20}}
            />
            <Text style={styles.lowlanejorrneeTstintrosub}>Test Your</Text>
            <Text style={styles.lowlanejorrneeTstintrotitl}>Bowling Sense</Text>
            <Text style={styles.lowlanejorrneeTstintrodesc}>
              Face real situations and choose the right move
            </Text>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={lowlanejorrneeTstStart}
              style={styles.lowlanejorrneeTststartwrap}>
              <LinearGradient
                colors={['#ED5AAE', '#0F1195']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.lowlanejorrneeTststartbtn}>
                <Text style={styles.lowlanejorrneeTststartbtntxt}>
                  Start Test
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : null}

        {shrkkwaterrshhTstPhs === 'quiz' && lowlanejorrneeTstQNow ? (
          <View style={styles.lowlanejorrneeTstquiz}>
            <Text style={styles.lowlanejorrneeTstprog}>
              Frame {shrkkwaterrshhTstFrm + 1} of 6
            </Text>
            <View style={styles.lowlanejorrneeTstqbox}>
              <Text style={styles.lowlanejorrneeTstqtxt}>
                Question: {lowlanejorrneeTstQNow.text}
              </Text>
            </View>
            {(['A', 'B', 'C', 'D'] as const).map((lbl, i) => (
              <TouchableOpacity
                key={lbl}
                activeOpacity={0.85}
                disabled={shrkkwaterrshhTstSel !== null}
                onPress={() => lowlanejorrneeTstAns(i)}
                style={lowlanejorrneeTstOptStyle(i)}>
                <Text style={styles.lowlanejorrneeTstopttxt}>
                  {lbl}. {lowlanejorrneeTstQNow.options[i]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}

        {shrkkwaterrshhTstPhs === 'levelPass' ? (
          <View style={styles.lowlanejorrneeTstresult}>
            <View
              style={{
                width: 170,
                height: 170,
                backgroundColor: '#496448',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 999,
                marginBottom: 34,
              }}>
              <Image
                source={require('../../assets/i/lowlanejorrneetyes.png')}
              />
            </View>
            <Text style={styles.lowlanejorrneeTstresulttitl}>
              Clean Execution
            </Text>
            <Text style={styles.lowlanejorrneeTstresultsub}>
              You read the situations well and made confident decisions. Your
              sense of direction and timing is solid — keep going and explore
              further.
            </Text>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={lowlanejorrneeTstNxtLvl}
              style={styles.lowlanejorrneeTstprimwrap}>
              <LinearGradient
                colors={['#ED5AAE', '#0F1195']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.lowlanejorrneeTstprim}>
                <Text style={styles.lowlanejorrneeTstprimtxt}>Next Level</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() =>
                lowlanejorrneeTstShare(
                  `Bowling Sense Check — ${lowlanejorrneeTstLvlNow.title}: Clean Execution!`,
                )
              }
              style={styles.lowlanejorrneeTstsec}>
              <Text style={styles.lowlanejorrneeTstsectxt}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={lowlanejorrneeTstToIntro}
              style={styles.lowlanejorrneeTstsec}>
              <Text style={styles.lowlanejorrneeTstsectxt}>Exit</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {shrkkwaterrshhTstPhs === 'levelFail' ? (
          <View style={styles.lowlanejorrneeTstresult}>
            <View
              style={{
                width: 170,
                height: 170,
                backgroundColor: '#AD2A46',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 999,
                marginBottom: 34,
              }}>
              <Image source={require('../../assets/i/lowlanejorrneeno.png')} />
            </View>
            <Text style={styles.lowlanejorrneeTstresulttitl}>
              Needs Adjustment
            </Text>
            <Text style={styles.lowlanejorrneeTstresultsub}>
              Some choices missed the mark, but the flow is still there. Take
              another look and refine your decisions — the next round will feel
              sharper.
            </Text>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={lowlanejorrneeTstRtry}
              style={styles.lowlanejorrneeTstprimwrap}>
              <LinearGradient
                colors={['#ED5AAE', '#0F1195']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.lowlanejorrneeTstprim}>
                <Text style={styles.lowlanejorrneeTstprimtxt}>Try Again</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() =>
                lowlanejorrneeTstShare(
                  `Bowling Sense Check — ${lowlanejorrneeTstLvlNow.title}: needs practice.`,
                )
              }
              style={styles.lowlanejorrneeTstsec}>
              <Text style={styles.lowlanejorrneeTstsectxt}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={lowlanejorrneeTstToIntro}
              style={styles.lowlanejorrneeTstsec}>
              <Text style={styles.lowlanejorrneeTstsectxt}>Exit</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {shrkkwaterrshhTstPhs === 'gameComplete' ? (
          <View style={styles.lowlanejorrneeTstresult}>
            <View
              style={{
                width: 170,
                height: 170,
                backgroundColor: '#496448',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 999,
                marginBottom: 34,
              }}>
              <Image
                source={require('../../assets/i/lowlanejorrneetyes.png')}
              />
            </View>
            <Text style={styles.lowlanejorrneeTstresulttitl}>
              Master Complete
            </Text>
            <Text style={styles.lowlanejorrneeTstresultsub}>
              You finished all levels with solid decisions. Keep that rhythm —
              there is always more to refine.
            </Text>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={lowlanejorrneeTstToIntro}
              style={styles.lowlanejorrneeTstprimwrap}>
              <LinearGradient
                colors={['#ED5AAE', '#0F1195']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.lowlanejorrneeTstprim}>
                <Text style={styles.lowlanejorrneeTstprimtxt}>Play Again</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() =>
                lowlanejorrneeTstShare(
                  'Bowling Sense Check — all levels completed!',
                )
              }
              style={styles.lowlanejorrneeTstsec}>
              <Text style={styles.lowlanejorrneeTstsectxt}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={lowlanejorrneeTstToIntro}
              style={styles.lowlanejorrneeTstsec}>
              <Text style={styles.lowlanejorrneeTstsectxt}>Exit</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </Lowlanejorrneebg>
  );
};

const styles = StyleSheet.create({
  lowlanejorrneeTstopt: {
    backgroundColor: '#AD2A75',
    borderRadius: 9,
    paddingHorizontal: 8,
    marginBottom: 12,
    alignItems: 'center',
    minHeight: 53,
    justifyContent: 'center',
  },
  lowlanejorrneeTstoptok: {
    backgroundColor: '#3FAD2A',
  },

  lowlanejorrneeTstroot: {
    flex: 1,
    paddingBottom: 120,
  },
  lowlanejorrneeTsthead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#721B95',
    paddingBottom: 14,
    paddingHorizontal: 8,
    minHeight: 110,
  },
  lowlanejorrneeTstback: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowlanejorrneeTstbacktxt: {
    color: '#fff',
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '300',
    marginTop: -4,
  },
  lowlanejorrneeTstbackspc: {
    width: 44,
  },
  lowlanejorrneeTsthdtxt: {
    flex: 1,
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Jua-Regular',
    textAlign: 'center',
  },
  lowlanejorrneeTstintro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
  },
  lowlanejorrneeTstintroimg: {
    width: 300,
    height: 220,
    marginBottom: 12,
  },
  lowlanejorrneeTstintrosub: {
    color: '#FF910B',
    fontSize: 24,
    fontFamily: 'Jua-Regular',
    marginBottom: 8,
    marginTop: 30,
  },
  lowlanejorrneeTstintrotitl: {
    color: '#FF910B',
    fontSize: 44,
    fontFamily: 'Jua-Regular',
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 48,
  },
  lowlanejorrneeTstintrodesc: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Itim-Regular',
    textAlign: 'center',
    marginBottom: 42,
    paddingHorizontal: 8,
  },
  lowlanejorrneeTststartwrap: {
    width: '100%',
    maxWidth: 280,
  },
  lowlanejorrneeTststartbtn: {
    borderRadius: 9,
    height: 53,
    width: 220,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#58006E',
  },
  lowlanejorrneeTststartbtntxt: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Itim-Regular',
    fontWeight: '600',
  },
  lowlanejorrneeTstquiz: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 120,
  },
  lowlanejorrneeTstprog: {
    color: 'rgb(255, 255, 255)',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 24,
  },
  lowlanejorrneeTstqbox: {
    backgroundColor: '#353C73',
    borderRadius: 16,
    padding: 16,
    minHeight: 127,
    justifyContent: 'center',
    marginBottom: 50,
  },
  lowlanejorrneeTstqtxt: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 28,
  },

  lowlanejorrneeTstoptbad: {
    backgroundColor: '#AD2A46',
  },
  lowlanejorrneeTstoptdim: {
    opacity: 1,
  },
  lowlanejorrneeTstopttxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  lowlanejorrneeTstresult: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingTop: 48,
    paddingBottom: 120,
  },
  lowlanejorrneeTstresultimg: {
    width: 140,
    height: 140,
    marginBottom: 18,
  },
  lowlanejorrneeTstresulttitl: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  lowlanejorrneeTstresultsub: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 20,
    marginBottom: 42,
  },
  lowlanejorrneeTstprimwrap: {
    width: '100%',
    maxWidth: 185,
    marginBottom: 12,
    height: 40,
  },
  lowlanejorrneeTstprim: {
    borderRadius: 9,
    width: 185,
    minHeight: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#58006E',
  },
  lowlanejorrneeTstprimtxt: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Itim-Regular',
    fontWeight: '600',
  },
  lowlanejorrneeTstsec: {
    width: '100%',
    maxWidth: 185,
    minHeight: 46,
    height: 44,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  lowlanejorrneeTstsectxt: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Itim-Regular',
  },
});

export default Lowlanejorrneetest;
