/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import PushNotification from 'react-native-push-notification'
import { LocalNotification } from './src/services/LocalPushController'
// after other import statements
import RemotePushController from './src/services/RemotePushController'

const App: () => React$Node = () => {

  // const handleButtonPress = () => {
  //   LocalNotification()
  // }



  // PushNotification.configure({
  //   // (required) Called when a remote or local notification is opened or received
  //   onNotification: function (notification) {
  //     console.log('LOCAL NOTIFICATION ==>', notification)
  //   },
  //   popInitialNotification: true,
  //   requestPermissions: true
  //   // requestPermissions: Platform.OS === 'ios'
  // })


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.container}>
            <Text>Press a button to trigger the notification</Text>
            <View style={{ marginTop: 20 }}>
              <Button title={'Local Push Notification'} onPress={() => LocalNotification()} />
            </View>
          </View>
          <RemotePushController />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 20
  }
});

export default App;
