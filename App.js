/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ArcGISMapView, {setLicenseKey} from 'react-native-arcgis-mapview';

const App = () => {
  const data = {};

  // {
  //   pointGraphics: [
  //     {
  //       graphicId: 'normalPoint',
  //       graphic: Image.resolveAssetSource(require('./src/normalpoint.png')),
  //     },
  //     {
  //       graphicId: 'personPoint',
  //       graphic: Image.resolveAssetSource(require('./src/personpoint.png')),
  //     },
  //     {
  //       graphicId: 'planePoint',
  //       graphic: Image.resolveAssetSource(require('./src/planepoint.png')),
  //     },
  //   ],
  //   referenceId: 'graphicsOverlay',
  //   points: [
  //     {
  //       latitude: 45.51223,
  //       longitude: -122.658722,
  //       rotation: 0,
  //       referenceId: 'Portland',
  //       graphicId: 'normalPoint',
  //     },
  //     {
  //       latitude: 38.907192,
  //       longitude: -77.036873,
  //       rotation: 0,
  //       referenceId: 'Washington, D.C.',
  //       graphicId: 'personPoint',
  //     },
  //     {
  //       latitude: 39.739235,
  //       longitude: -104.99025,
  //       rotation: 0,
  //       referenceId: 'movingImage',
  //       graphicId: 'planePoint',
  //     },
  //   ],
  // };

  setLicenseKey(
    'AAPKa7bea175cc454a1f9b3b94b189971371yWoG7ZvL3qUkasgoYfe4m_YmEymTCKpMqfkYAdRg2jDaXUPWzEHwx2jGlV0rkiRs',
  );

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const mapView = useRef(null);
  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> */}

      <View
        style={{
          backgroundColor: Colors.black,

          height: '100%',
          width: '100%',
        }}>
        <ArcGISMapView
          ref={mapView}
          initialMapCenter={[{latitude: 36.244797, longitude: -94.14806}]}
          recenterIfGraphicTapped
          style={{flex: 1, height: '100%', width: '100%'}}
          basemapUrl="http://david-galindo.maps.arcgis.com/home/item.html?id=fc75f65db9504175b2fb0e87b66672e5"
          addGraphicsOverlay={data}
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
