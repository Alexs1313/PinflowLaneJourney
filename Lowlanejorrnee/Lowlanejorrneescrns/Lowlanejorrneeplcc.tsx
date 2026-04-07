import {
  lowlanejorrneeGetSavedIds,
  lowlanejorrneeIdsToRec,
  lowlanejorrneeToggleSavedId,
} from '../Lowlanejorrneeutils/Lowlanejorrneesavdstore';

import React, {useCallback, useEffect, useMemo, useState} from 'react';
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
import Lowlanejorrneebg from '../Lowlanejorrneecmponets/Lowlanejorrneebg';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

export type LowlanejorrneeplccCat =
  | 'Party Bowling'
  | 'Premium'
  | 'Classic Bowling'
  | 'Family'
  | 'Less-Known Spots';

export type LowlanejorrneeplccItem = {
  id: string;
  category: LowlanejorrneeplccCat;
  title: string;
  city: string;
  atmosphere: string;
  description: string;
  address: string;
  lat: number;
  lng: number;
  img: number;
};

const lowlanejorrneeplccfltrs: Array<'All' | LowlanejorrneeplccCat> = [
  'All',
  'Party Bowling',
  'Premium',
  'Classic Bowling',
  'Family',
  'Less-Known Spots',
];

export const lowlanejorrneeplccbb: LowlanejorrneeplccItem[] = [
  {
    id: 'bowling-world-berlin',
    category: 'Party Bowling',
    title: 'Bowling World Berlin',
    city: 'Berlin',
    atmosphere: 'Neon / Party / Modern',
    description:
      "Bowling World Berlin is one of the most vibrant bowling venues in the capital, designed for those who enjoy an energetic and visually rich environment. The lanes are illuminated with dynamic neon lighting, creating a lively atmosphere that shifts throughout the evening. Music plays a central role here, turning a regular visit into a full sensory experience. The space is large and well-organized, making it suitable for both casual visits and group outings. Whether you're coming for a relaxed session or a more active night out, the environment feels immersive without being overwhelming.",
    address: 'Märkische Allee 176–178, 12681 Berlin, Germany',
    lat: 52.5397,
    lng: 13.5453,
    img: require('../../assets/i/lowlanejorrneeplc1.png'),
  },
  {
    id: 'cosmo-bowling-hamburg',
    category: 'Party Bowling',
    title: 'Cosmo Bowling Hamburg',
    city: 'Hamburg',
    atmosphere: 'Neon / Stylish / Social',
    description:
      'Cosmo Bowling Hamburg combines modern design with a clean, futuristic aesthetic. The venue features smooth lighting transitions, glowing lane edges, and a polished interior that feels both premium and approachable. It’s a place where visual style meets comfort — ideal for spending time with friends while enjoying a structured and well-maintained environment. The space is not overly loud, making it a balanced option between energetic and relaxed. Its layout allows for easy navigation and a comfortable rhythm during your visit.',
    address: 'Wandsbeker Zollstraße 87–89, 22041 Hamburg, Germany',
    lat: 53.5755,
    lng: 10.0682,
    img: require('../../assets/i/lowlanejorrneeplc2.png'),
  },
  {
    id: 'bowling-arena-spich',
    category: 'Party Bowling',
    title: 'Bowling Arena Spich',
    city: 'Troisdorf',
    atmosphere: 'Party / Active / Dynamic',
    description:
      'Bowling Arena Spich stands out as a highly active venue with a strong focus on movement and energy. The lighting design enhances the sense of motion across the lanes, while the spacious layout allows for a steady flow of visitors. It’s particularly popular for group activities, offering a setting where interaction and engagement come naturally. The combination of bright accents and clean surfaces keeps the environment visually appealing without feeling cluttered. It’s a place that encourages participation and keeps the pace consistent.',
    address: 'Langbaurghstraße 60, 53842 Troisdorf, Germany',
    lat: 50.8154,
    lng: 7.1552,
    img: require('../../assets/i/lowlanejorrneeplc3.png'),
  },
  {
    id: 'bowling-world-hannover',
    category: 'Party Bowling',
    title: 'Bowling World Hannover',
    city: 'Hannover',
    atmosphere: 'Neon / Urban / Spacious',
    description:
      'Bowling World Hannover offers a well-balanced mix of modern design and open space. The venue features long, clearly defined lanes enhanced by soft neon accents that guide the eye forward. The interior feels structured and calm, even during busier hours. It’s a great example of how lighting and layout can create a sense of clarity and direction. Visitors can enjoy a smooth experience from start to finish, with enough space to feel comfortable without losing the lively atmosphere.',
    address: 'Otto-Brenner-Straße 7, 30159 Hannover, Germany',
    lat: 52.3759,
    lng: 9.732,
    img: require('../../assets/i/lowlanejorrneeplc4.png'),
  },
  {
    id: 'superbowl-regensburg',
    category: 'Party Bowling',
    title: 'Superbowl Regensburg',
    city: 'Regensburg',
    atmosphere: 'Party / Casual / Bright',
    description:
      'Superbowl Regensburg delivers a more playful and accessible take on modern bowling. The lighting is colorful but not overpowering, creating a welcoming environment for different types of visitors. The venue maintains a relaxed tone while still offering enough visual elements to keep things interesting. It’s especially suited for casual visits where the focus is on enjoying the moment rather than performance. The layout is intuitive, making it easy to move through the space and stay engaged.',
    address: 'Im Gewerbepark D90, 93059 Regensburg, Germany',
    lat: 49.0306,
    lng: 12.0823,
    img: require('../../assets/i/lowlanejorrneeplc5.png'),
  },
  {
    id: 'bowling-world-lubeck',
    category: 'Party Bowling',
    title: 'Bowling World Lübeck',
    city: 'Lübeck',
    atmosphere: 'Neon / Relaxed / Modern',
    description:
      'Bowling World Lübeck provides a calmer interpretation of the neon bowling concept. The lighting is softer and more atmospheric, creating a smooth transition between activity and relaxation. The venue feels well-paced, allowing visitors to enjoy the experience without pressure. Its modern design focuses on clarity and comfort, with subtle visual accents that enhance the overall environment. This makes it a strong choice for those who prefer a quieter but still visually engaging setting.',
    address: 'Bei der Lohmühle 5, 23554 Lübeck, Germany',
    lat: 53.8771,
    lng: 10.6794,
    img: require('../../assets/i/lowlanejorrneeplc6.png'),
  },
  {
    id: 'dream-bowl-palace',
    category: 'Premium',
    title: 'Dream Bowl Palace',
    city: 'Unterföhring (Munich)',
    atmosphere: 'Premium / Modern / Spacious',
    description:
      'Dream Bowl Palace is one of the largest and most refined bowling venues in the Munich area, offering a clean and highly organized environment designed for comfort and precision. The space is built with a focus on symmetry, lighting balance, and smooth flow between lanes. The interior combines modern materials with subtle lighting accents, creating a calm yet visually impressive setting. It’s ideal for visitors who appreciate a structured and high-quality experience, where everything feels polished and intentional. The scale of the venue allows for both quiet sessions and larger gatherings without losing clarity or comfort.',
    address: 'Dieselstraße 5, 85774 Unterföhring, Germany',
    lat: 48.1912,
    lng: 11.6426,
    img: require('../../assets/i/lowlanejorrneeplc7.png'),
  },
  {
    id: 'max-munich-bowling',
    category: 'Premium',
    title: 'MAX Munich Bowling',
    city: 'Munich',
    atmosphere: 'Premium / Stylish / Urban',
    description:
      'MAX Munich Bowling delivers a sleek, city-focused experience with a strong emphasis on design and atmosphere. The venue features clean lines, dark surfaces, and carefully placed lighting that enhances depth without overwhelming the space. It feels modern and controlled, making it suitable for both casual visits and more focused sessions. The environment is well-balanced, offering a mix of comfort and visual identity. Every element — from lane layout to seating — is designed to support a smooth and uninterrupted experience.',
    address: 'Landshuter Allee 165, 80637 München, Germany',
    lat: 48.1628,
    lng: 11.5336,
    img: require('../../assets/i/lowlanejorrneeplc8.png'),
  },
  {
    id: 'bowling-room-stuttgart',
    category: 'Premium',
    title: 'Bowling Room Stuttgart',
    city: 'Stuttgart',
    atmosphere: 'Modern / Clean / Minimal',
    description:
      'Bowling Room Stuttgart stands out with its minimalist approach and refined interior design. The venue avoids unnecessary distractions, focusing instead on clean surfaces, subtle lighting, and a clear visual hierarchy. The lanes are well-defined, and the overall composition of the space creates a calm and controlled atmosphere. It’s a place where simplicity works in favor of clarity, making it easy to stay focused and enjoy the experience at your own pace. The environment feels modern without being overly stylized.',
    address: 'Heilbronner Straße 385, 70469 Stuttgart, Germany',
    lat: 48.8205,
    lng: 9.1798,
    img: require('../../assets/i/lowlanejorrneeplc9.png'),
  },
  {
    id: 'bowling-arena-mannheim',
    category: 'Premium',
    title: 'Bowling Arena Mannheim',
    city: 'Mannheim',
    atmosphere: 'Modern / Active / Balanced',
    description:
      'Bowling Arena Mannheim offers a contemporary space that blends activity with comfort. The venue features a well-organized layout with smooth transitions between areas, allowing visitors to move freely without crowding. The lighting is dynamic but controlled, adding energy while maintaining visual clarity. The design focuses on usability and openness, making it suitable for different types of visits. It’s a versatile environment that adapts well to both relaxed and more active sessions.',
    address: 'Casterfeldstraße 100, 68199 Mannheim, Germany',
    lat: 49.4513,
    lng: 8.4795,
    img: require('../../assets/i/lowlanejorrneeplc10.png'),
  },
  {
    id: 'bowling-lounge-chemnitz',
    category: 'Premium',
    title: 'Bowling Lounge Chemnitz',
    city: 'Chemnitz',
    atmosphere: 'Premium / Relaxed / Contemporary',
    description:
      'Bowling Lounge Chemnitz presents a softer, more relaxed interpretation of a modern bowling space. The interior combines contemporary elements with a calm lighting setup, creating a comfortable and inviting atmosphere. The venue is designed to feel open and accessible, with enough visual detail to maintain interest without becoming overwhelming. It’s a place where the pace is steady and the experience feels natural, making it ideal for longer visits and casual exploration.',
    address: 'Neefestraße 78a, 09119 Chemnitz, Germany',
    lat: 50.8142,
    lng: 12.8914,
    img: require('../../assets/i/lowlanejorrneeplc11.png'),
  },
  {
    id: 'us-play-bowling-nurnberg',
    category: 'Classic Bowling',
    title: 'US Play Bowling Nürnberg',
    city: 'Nürnberg',
    atmosphere: 'Classic / Balanced / Comfortable',
    description:
      'US Play Bowling Nürnberg offers a steady and reliable bowling experience with a focus on clarity and consistency. The venue follows a traditional layout, where everything is easy to understand and navigate. The lighting is neutral and practical, allowing visitors to stay focused without distractions. It’s a place where the rhythm of the game feels natural, making it suitable for both first-time visitors and those who prefer a straightforward environment. The overall atmosphere is calm, structured, and easy to return to.',
    address: 'Kilianstraße 251, 90411 Nürnberg, Germany',
    lat: 49.4842,
    lng: 11.0775,
    img: require('../../assets/i/lowlanejorrneeplc12.png'),
  },
  {
    id: 'bowlingcenter-leipzig',
    category: 'Classic Bowling',
    title: 'Bowlingcenter Leipzig',
    city: 'Leipzig',
    atmosphere: 'Classic / Spacious / Casual',
    description:
      'Bowlingcenter Leipzig provides a familiar and accessible environment built around simplicity and comfort. The venue is spacious, with clearly defined lanes and a layout that supports smooth movement. The design avoids unnecessary elements, focusing instead on usability and balance. It’s a reliable choice for those who prefer a calm and open setting, where everything works as expected. The atmosphere remains consistent throughout the visit, making it easy to settle into the experience.',
    address: 'An den Tierkliniken 42, 04103 Leipzig, Germany',
    lat: 51.3298,
    lng: 12.4036,
    img: require('../../assets/i/lowlanejorrneeplc13.png'),
  },
  {
    id: 'bowlingcenter-kaiserslautern',
    category: 'Classic Bowling',
    title: 'Bowlingcenter Kaiserslautern',
    city: 'Kaiserslautern',
    atmosphere: 'Classic / Relaxed / Local',
    description:
      'Bowlingcenter Kaiserslautern delivers a more local and relaxed experience, where the focus is on comfort rather than visual intensity. The venue has a familiar feel, with a layout that encourages a steady pace and easy interaction. The lighting is soft and functional, supporting a calm environment. It’s a place where visitors can enjoy the activity without pressure, making it suitable for longer and more laid-back sessions. The atmosphere feels grounded and consistent.',
    address: 'Merkurstraße 62, 67663 Kaiserslautern, Germany',
    lat: 49.4407,
    lng: 7.7465,
    img: require('../../assets/i/lowlanejorrneeplc14.png'),
  },
  {
    id: 'bowlingcenter-frankfurt-rebstock',
    category: 'Classic Bowling',
    title: 'Bowlingcenter Frankfurt (Rebstock)',
    city: 'Frankfurt am Main',
    atmosphere: 'Classic / Urban / Structured',
    description:
      'Bowlingcenter Frankfurt (Rebstock) combines a traditional bowling setup with a slightly more urban character. The venue is well-organized, with clear divisions between lanes and seating areas. The design supports a smooth flow, even during busier hours. The lighting and materials are practical and clean, helping maintain a focused and comfortable environment. It’s a dependable choice for visitors who want a straightforward experience in a city setting.',
    address: 'Am Römerhof 15, 60486 Frankfurt am Main, Germany',
    lat: 50.1109,
    lng: 8.6456,
    img: require('../../assets/i/lowlanejorrneeplc15.png'),
  },
  {
    id: 'bowlingcenter-bremen',
    category: 'Classic Bowling',
    title: 'Bowlingcenter Bremen',
    city: 'Bremen',
    atmosphere: 'Classic / Simple / Consistent',
    description:
      'Bowlingcenter Bremen offers a clean and simple environment built around reliability. The venue focuses on delivering a consistent experience without unnecessary complexity. The layout is intuitive, and the atmosphere remains calm throughout the visit. It’s well-suited for those who prefer a predictable and comfortable setting, where everything feels familiar. The space supports a steady rhythm, making it easy to enjoy the activity at your own pace.',
    address: 'Duckwitzstraße 55, 28199 Bremen, Germany',
    lat: 53.0793,
    lng: 8.8017,
    img: require('../../assets/i/lowlanejorrneeplc16.png'),
  },
  {
    id: 'fun-bowling-duisburg',
    category: 'Family',
    title: 'Fun Bowling Duisburg',
    city: 'Duisburg',
    atmosphere: 'Casual / Family / Relaxed',
    description:
      'Fun Bowling Duisburg offers a comfortable and easy-going environment designed for visitors of all ages. The space is open and welcoming, with a layout that allows for a smooth and relaxed experience. The lighting is soft and balanced, creating a calm atmosphere that doesn’t overwhelm. It’s a place where the focus is on spending time together rather than intensity or pace. The overall design supports a natural flow, making it ideal for casual visits and longer stays.',
    address: 'Max-Peters-Straße 20, 47059 Duisburg, Germany',
    lat: 51.4481,
    lng: 6.7627,
    img: require('../../assets/i/lowlanejorrneeplc17.png'),
  },
  {
    id: 'bowling-center-koln-ossendorf',
    category: 'Family',
    title: 'Bowling Center Köln-Ossendorf',
    city: 'Cologne',
    atmosphere: 'Family / Social / Balanced',
    description:
      'Bowling Center Köln-Ossendorf provides a well-balanced space that blends comfort with a social atmosphere. The venue is designed to accommodate groups while still maintaining a sense of openness. The layout is intuitive, allowing visitors to move easily between lanes and seating areas. The lighting and materials are simple and practical, supporting a relaxed experience. It’s a reliable option for spending time in a calm and friendly environment.',
    address: 'Butzweilerstraße 35–39, 50829 Köln, Germany',
    lat: 50.9716,
    lng: 6.898,
    img: require('../../assets/i/lowlanejorrneeplc18.png'),
  },
  {
    id: 'city-bowling-wiesbaden',
    category: 'Family',
    title: 'City Bowling Wiesbaden',
    city: 'Wiesbaden',
    atmosphere: 'Casual / Urban / Light',
    description:
      'City Bowling Wiesbaden delivers a straightforward and accessible experience in a central setting. The venue focuses on simplicity, offering a clean layout and an easy rhythm. The atmosphere is light and relaxed, making it suitable for both quick visits and longer sessions. The design avoids unnecessary elements, allowing visitors to stay comfortable and engaged without distraction. It’s a place where everything feels easy to approach and use.',
    address: 'Borsigstraße 15, 65205 Wiesbaden, Germany',
    lat: 50.0826,
    lng: 8.238,
    img: require('../../assets/i/lowlanejorrneeplc19.png'),
  },
  {
    id: 'bowling-center-erfurt',
    category: 'Family',
    title: 'Bowling Center Erfurt',
    city: 'Erfurt',
    atmosphere: 'Family / Calm / Spacious',
    description:
      'Bowling Center Erfurt offers a calm and spacious environment with a focus on clarity and comfort. The venue is designed to feel open, with well-defined lanes and a layout that supports a steady pace. The lighting is soft and evenly distributed, helping maintain a relaxed atmosphere. It’s particularly suitable for visitors who prefer a quieter setting where the experience can unfold naturally without pressure or noise.',
    address: 'Weimarische Straße 29, 99099 Erfurt, Germany',
    lat: 50.9787,
    lng: 11.061,
    img: require('../../assets/i/lowlanejorrneeplc20.png'),
  },
  {
    id: 'bowling-center-potsdam',
    category: 'Family',
    title: 'Bowling Center Potsdam',
    city: 'Potsdam',
    atmosphere: 'Casual / Clean / Comfortable',
    description:
      'Bowling Center Potsdam presents a clean and approachable space that prioritizes comfort and simplicity. The environment is structured but relaxed, allowing visitors to enjoy the experience without distraction. The lighting is neutral, and the layout supports easy navigation throughout the venue. It’s a dependable option for those looking for a calm and consistent setting, whether for a short visit or a longer stay.',
    address: 'Stern-Center 1–10, 14480 Potsdam, Germany',
    lat: 52.3654,
    lng: 13.092,
    img: require('../../assets/i/lowlanejorrneeplc21.png'),
  },
  {
    id: 'bowlingcenter-schwerin',
    category: 'Less-Known Spots',
    title: 'Bowlingcenter Schwerin',
    city: 'Schwerin',
    atmosphere: 'Quiet / Local / Relaxed',
    description:
      'Bowlingcenter Schwerin offers a calm and locally oriented environment, where the focus is on simplicity and ease of use. The venue is not overly crowded, allowing visitors to enjoy a steady and uninterrupted experience. The layout is straightforward, with clearly defined lanes and minimal visual distractions. The atmosphere feels grounded and consistent, making it a good option for those who prefer a slower pace and a more personal setting.',
    address: 'Werkstraße 106, 19061 Schwerin, Germany',
    lat: 53.601,
    lng: 11.4012,
    img: require('../../assets/i/lowlanejorrneeplc22.png'),
  },
  {
    id: 'bowling-center-flensburg',
    category: 'Less-Known Spots',
    title: 'Bowling Center Flensburg',
    city: 'Flensburg',
    atmosphere: 'Coastal / Calm / Casual',
    description:
      'Bowling Center Flensburg reflects the quieter rhythm of the northern region, offering a relaxed and open space. The venue feels approachable and easy to navigate, with a layout that supports a natural flow. The lighting is soft and functional, helping maintain a comfortable environment throughout the visit. It’s a place where the experience remains simple and balanced, without unnecessary intensity or distractions.',
    address: 'Schleswiger Straße 130, 24941 Flensburg, Germany',
    lat: 54.7817,
    lng: 9.4333,
    img: require('../../assets/i/lowlanejorrneeplc23.png'),
  },
  {
    id: 'bowlingcenter-zwickau',
    category: 'Less-Known Spots',
    title: 'Bowlingcenter Zwickau',
    city: 'Zwickau',
    atmosphere: 'Local / Simple / Steady',
    description:
      'Bowlingcenter Zwickau provides a straightforward and dependable environment, centered around clarity and consistency. The venue is designed with practicality in mind, offering a clean layout and a calm atmosphere. The experience here feels stable and predictable, making it easy to focus and enjoy the moment. It’s well-suited for visitors who appreciate simplicity and a more traditional approach.',
    address: 'Äußere Schneeberger Straße 100, 08056 Zwickau, Germany',
    lat: 50.7189,
    lng: 12.4943,
    img: require('../../assets/i/lowlanejorrneeplc24.png'),
  },
  {
    id: 'bowlingcenter-passau',
    category: 'Less-Known Spots',
    title: 'Bowlingcenter Passau',
    city: 'Passau',
    atmosphere: 'Quiet / Cozy / Relaxed',
    description:
      'Bowlingcenter Passau delivers a more intimate and cozy experience, where the environment feels personal and easy-going. The venue is smaller in scale, which adds to its comfortable and approachable atmosphere. The lighting is warm and balanced, creating a relaxed setting that encourages a slower pace. It’s a strong choice for those looking for a quiet place to spend time without distractions.',
    address: 'Neuburger Straße 128, 94036 Passau, Germany',
    lat: 48.5667,
    lng: 13.4319,
    img: require('../../assets/i/lowlanejorrneeplc25.png'),
  },
  {
    id: 'bowlingcenter-magdeburg',
    category: 'Less-Known Spots',
    title: 'Bowlingcenter Magdeburg',
    city: 'Magdeburg',
    atmosphere: 'Local / Balanced / Comfortable',
    description:
      'Bowlingcenter Magdeburg offers a balanced and easy-to-understand environment, where everything feels structured and accessible. The venue maintains a steady rhythm, with a layout that supports smooth movement and clear visibility. The lighting is neutral, helping create a consistent and comfortable atmosphere. It’s a reliable option for those who prefer a straightforward experience without unnecessary complexity.',
    address: 'Lübecker Straße 85, 39124 Magdeburg, Germany',
    lat: 52.139,
    lng: 11.646,
    img: require('../../assets/i/lowlanejorrneeplc26.png'),
  },
];

const Lowlanejorrneeplcc = () => {
  const navigation = useNavigation<any>();
  const [lowlanejorrneeplccFilt, setLowlanejorrneeplccFilt] =
    useState<(typeof lowlanejorrneeplccfltrs)[number]>('All');
  const [lowlanejorrneeplccDet, setLowlanejorrneeplccDet] =
    useState<LowlanejorrneeplccItem | null>(null);
  const [lowlanejorrneeplccFav, setLowlanejorrneeplccFav] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    lowlanejorrneeGetSavedIds().then(ids => {
      setLowlanejorrneeplccFav(lowlanejorrneeIdsToRec(ids));
    });
  }, []);

  const lowlanejorrneeplccbbList = useMemo(() => {
    if (lowlanejorrneeplccFilt === 'All') {
      return lowlanejorrneeplccbb;
    }
    return lowlanejorrneeplccbb.filter(
      v => v.category === lowlanejorrneeplccFilt,
    );
  }, [lowlanejorrneeplccFilt]);

  const lowlanejorrneeplccOpenOnMapScreen = (it: LowlanejorrneeplccItem) => {
    setLowlanejorrneeplccDet(null);
    navigation.navigate('Lowlanejorrneemap', {shrkkwaterrshhMapId: it.id});
  };

  const lowlanejorrneeplccShare = (it: LowlanejorrneeplccItem) => {
    Share.share({
      message: `${it.title}\n${it.address}\n${it.lat}, ${it.lng}`,
    }).catch(() => {});
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        setLowlanejorrneeplccDet(null);
      };
    }, []),
  );

  const lowlanejorrneeplccTopPad =
    Platform.OS === 'android'
      ? StatusBar.currentHeight ?? 0
      : Platform.OS === 'ios'
      ? 44
      : 0;

  return (
    <Lowlanejorrneebg>
      {lowlanejorrneeplccDet ? (
        <View style={styles.lowlanejorrneeplccdetwrap}>
          <View
            style={[
              styles.lowlanejorrneeplccdethead,
              {paddingTop: 12 + lowlanejorrneeplccTopPad},
            ]}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setLowlanejorrneeplccDet(null)}
              style={styles.lowlanejorrneeplccdetback}
              hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}>
              <Image
                source={require('../../assets/i/lowlanejorrneback.png')}
                style={styles.lowlanejorrneeplccdetbackimg}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.lowlanejorrneeplccdethdtxt} numberOfLines={1}>
              Bowling Spots
            </Text>
            <View style={styles.lowlanejorrneeplccdetheadspc} />
          </View>

          <View style={styles.lowlanejorrneeplccdetsclv}>
            <View style={styles.lowlanejorrneeplccdetimgbox}>
              <View>
                <Image
                  source={lowlanejorrneeplccDet.img}
                  style={styles.lowlanejorrneeplccdetimg}
                />
                <LinearGradient
                  colors={['rgba(17, 27, 102, 0)', 'rgba(17, 27, 102, 1)']}
                  style={styles.lowlanejorrneeplccdetimggrad}
                />
              </View>
              <View style={styles.lowlanejorrneeplccdetfabrow}>
                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.lowlanejorrneeplccdetfab}
                  onPress={() =>
                    lowlanejorrneeToggleSavedId(lowlanejorrneeplccDet.id).then(
                      ids =>
                        setLowlanejorrneeplccFav(lowlanejorrneeIdsToRec(ids)),
                    )
                  }>
                  <Image
                    source={
                      lowlanejorrneeplccFav[lowlanejorrneeplccDet.id]
                        ? require('../../assets/i/lowlanejorrnsaved.png')
                        : require('../../assets/i/lowlanejorrnsave.png')
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.lowlanejorrneeplccdetfab}
                  onPress={() =>
                    lowlanejorrneeplccShare(lowlanejorrneeplccDet)
                  }>
                  <Image
                    source={require('../../assets/i/lowlanejorrnsher.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.lowlanejorrneeplccdetbody}>
              <Text style={styles.lowlanejorrneeplccdettitl}>
                {lowlanejorrneeplccDet.title}
              </Text>
              <Text style={styles.lowlanejorrneeplccdetlbl}>
                <Text style={styles.lowlanejorrneeplccdetlblbold}>City: </Text>
                {lowlanejorrneeplccDet.city}
              </Text>
              <Text style={styles.lowlanejorrneeplccdetlbl}>
                <Text style={styles.lowlanejorrneeplccdetlblbold}>
                  Atmosphere:{' '}
                </Text>
                {lowlanejorrneeplccDet.atmosphere}
              </Text>
              <Text style={styles.lowlanejorrneeplccdetlbl}>
                <Text style={styles.lowlanejorrneeplccdetlblbold}>
                  Description:{' '}
                </Text>
                {lowlanejorrneeplccDet.description}
              </Text>
              <Text style={styles.lowlanejorrneeplccdetlbl}>
                <Text style={styles.lowlanejorrneeplccdetlblbold}>
                  Address:{' '}
                </Text>
                {lowlanejorrneeplccDet.address}
              </Text>
              <Text style={styles.lowlanejorrneeplccdetlbl}>
                <Text style={styles.lowlanejorrneeplccdetlblbold}>
                  Coordinates:{' '}
                </Text>
                {lowlanejorrneeplccDet.lat}, {lowlanejorrneeplccDet.lng}
              </Text>

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() =>
                  lowlanejorrneeplccOpenOnMapScreen(lowlanejorrneeplccDet)
                }
                style={styles.lowlanejorrneeplccdetmapwrap}>
                <LinearGradient
                  colors={['#ED5AAE', '#0F1195']}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  style={styles.lowlanejorrneeplccdetmapgrad}>
                  <Text style={styles.lowlanejorrneeplccdetmaptxt}>
                    Open in Map
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.lowlanejorrneeplccsafe}>
          <View style={styles.lowlanejorrneeplcchead}>
            <Text style={styles.lowlanejorrneeplcchdtxt}>Bowling Spots</Text>
          </View>

          <View style={styles.lowlanejorrneeplccfiltscrl}>
            {lowlanejorrneeplccfltrs.map(lbl => {
              const lowlanejorrneeplccIsActv = lowlanejorrneeplccFilt === lbl;
              return (
                <TouchableOpacity
                  key={lbl}
                  activeOpacity={0.85}
                  onPress={() => setLowlanejorrneeplccFilt(lbl)}>
                  <LinearGradient
                    style={[styles.lowlanejorrneeplccfiltpill]}
                    colors={
                      lowlanejorrneeplccIsActv
                        ? ['#ED5AAE', '#0F1195']
                        : ['#2A3376', '#2A3376']
                    }
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}>
                    <View style={styles.lowlanejorrneeplccfiltpillpad}>
                      <Text
                        style={[
                          styles.lowlanejorrneeplccfiltpilltxt,
                          lowlanejorrneeplccIsActv &&
                            styles.lowlanejorrneeplccfiltpilltxtactv,
                        ]}>
                        {lbl}
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              );
            })}
          </View>

          <FlatList
            data={lowlanejorrneeplccbbList}
            keyExtractor={it => it.id}
            scrollEnabled={false}
            style={styles.lowlanejorrneeplccflat}
            contentContainerStyle={styles.lowlanejorrneeplcclistpad}
            showsVerticalScrollIndicator={false}
            renderItem={({item: lowlanejorrneeplccIt}) => (
              <View style={styles.lowlanejorrneeplcccard}>
                <View style={styles.lowlanejorrneeplcccardrow}>
                  <Image
                    source={lowlanejorrneeplccIt.img}
                    style={styles.lowlanejorrneeplcccardimg}
                  />
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['rgba(95, 24, 124, 0)', 'rgba(95, 24, 124, 1)']}
                    style={styles.lowlanejorrneeplcccardfade}
                  />
                  <View style={styles.lowlanejorrneeplcccardbody}>
                    <Text
                      style={styles.lowlanejorrneeplcctitl}
                      numberOfLines={2}>
                      {lowlanejorrneeplccIt.title}
                    </Text>

                    <Text style={styles.lowlanejorrneeplccsub}>
                      <Text style={styles.lowlanejorrneeplccsubbold}>
                        City:
                      </Text>{' '}
                      {lowlanejorrneeplccIt.city}
                    </Text>
                    <Text style={styles.lowlanejorrneeplccsub}>
                      <Text style={styles.lowlanejorrneeplccsubbold}>
                        Atmosphere:
                      </Text>{' '}
                      {lowlanejorrneeplccIt.atmosphere}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      onPress={() =>
                        setLowlanejorrneeplccDet(lowlanejorrneeplccIt)
                      }
                      style={styles.lowlanejorrneeplccopenwrap}>
                      <LinearGradient
                        colors={['#ED5AAE', '#0F1195']}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                        style={styles.lowlanejorrneeplccopengrad}>
                        <Text style={styles.lowlanejorrneeplccopentxt}>
                          Open
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </Lowlanejorrneebg>
  );
};

const styles = StyleSheet.create({
  lowlanejorrneeplccopengrad: {
    width: 100,
    height: 26,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  lowlanejorrneeplccopentxt: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Itim-Regular',
  },
  lowlanejorrneeplccdetwrap: {
    flex: 1,
    backgroundColor: '#111B66',
    flexDirection: 'column',
  },
  lowlanejorrneeplccdetsclv: {
    flex: 1,
    paddingBottom: 120,
  },
  lowlanejorrneeplccroot: {
    flex: 1,
  },
  lowlanejorrneeplccsafe: {
    flex: 1,
  },
  lowlanejorrneeplcchead: {
    backgroundColor: '#721B95',
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'flex-end',
    minHeight: 110,
    paddingBottom: 20,
  },
  lowlanejorrneeplcchdtxt: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Jua-Regular',
  },
  lowlanejorrneeplccfiltscrl: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    paddingBottom: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 25,
  },

  lowlanejorrneeplccfiltpill: {
    borderRadius: 4,
    borderWidth: 0.9,
    borderColor: '#A309E0',
    backgroundColor: 'transparent',
    minHeight: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  lowlanejorrneeplccfiltpillactv: {
    backgroundColor: '#B030C8',
    borderColor: '#E080F0',
  },
  lowlanejorrneeplccfiltpilltxt: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Itim-Regular',
    bottom: 1,
  },
  lowlanejorrneeplccfiltpilltxtactv: {
    color: '#fff',
  },
  lowlanejorrneeplccfiltpillpad: {
    padding: 14,
    paddingVertical: 5,
  },
  lowlanejorrneeplccflat: {
    flex: 1,
  },
  lowlanejorrneeplcccardfade: {
    position: 'absolute',
    width: 30,
    height: '100%',
    zIndex: 1,
    left: 140,
  },
  lowlanejorrneeplccsubbold: {
    fontWeight: '500',
  },
  lowlanejorrneeplcclistpad: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 120,
  },
  lowlanejorrneeplcccard: {
    backgroundColor: '#5F187C',
    borderRadius: 20,
    marginBottom: 14,
  },
  lowlanejorrneeplcccardrow: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  lowlanejorrneeplcccardimg: {
    width: 165,
    height: '100%',
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },
  lowlanejorrneeplcccardbody: {
    flex: 1,
    justifyContent: 'space-between',
    minHeight: 110,
    padding: 10,
  },
  lowlanejorrneeplcctitl: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 5,
  },
  lowlanejorrneeplccsub: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '300',
    marginBottom: 2,
  },
  lowlanejorrneeplccopenwrap: {
    marginTop: 8,
  },

  lowlanejorrneeplccdethead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#721B95',
    paddingBottom: 14,
    paddingHorizontal: 8,
  },
  lowlanejorrneeplccdetback: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowlanejorrneeplccdetbackimg: {
    width: 28,
    height: 28,
  },
  lowlanejorrneeplccdetbacktxt: {
    color: '#fff',
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '300',
    marginTop: -4,
  },
  lowlanejorrneeplccdethdtxt: {
    flex: 1,
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Jua-Regular',
    textAlign: 'center',
  },
  lowlanejorrneeplccdetheadspc: {
    width: 44,
  },
  lowlanejorrneeplccdetscl: {
    paddingBottom: 140,
  },
  lowlanejorrneeplccdetimgbox: {
    position: 'relative',
    width: '100%',
  },
  lowlanejorrneeplccdetimg: {
    width: '100%',
    height: 260,
    backgroundColor: '#1a1a3e',
  },
  lowlanejorrneeplccdetimggrad: {
    position: 'absolute',
    width: '100%',
    height: 60,
    bottom: 0,
  },
  lowlanejorrneeplccdetfabrow: {
    position: 'absolute',
    top: 18,
    right: 12,
    flexDirection: 'row',
    gap: 10,
  },
  lowlanejorrneeplccdetfab: {
    width: 40,
    height: 40,
    borderRadius: 22,
    backgroundColor: '#721B95',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowlanejorrneeplccdetfabtxt: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 22,
  },
  lowlanejorrneeplccdetbody: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: -60,
  },
  lowlanejorrneeplccdettitl: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
  },
  lowlanejorrneeplccdetlbl: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 22,
    marginBottom: 4,
  },
  lowlanejorrneeplccdetlblbold: {
    fontWeight: '500',
  },
  lowlanejorrneeplccdetmapwrap: {
    marginTop: 14,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 320,
  },
  lowlanejorrneeplccdetmapgrad: {
    borderRadius: 9,
    width: 185,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#58006E',
  },
  lowlanejorrneeplccdetmaptxt: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Itim-Regular',
  },
});

export default Lowlanejorrneeplcc;
