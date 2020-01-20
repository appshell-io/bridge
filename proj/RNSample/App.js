/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  NativeModules,
} from 'react-native'
import * as JSB from 'appshell-jsbridge/dist/react-native'

const App = () => {
  const onClickCallNative = () => {
    console.log('yes call native')
    JSB.callNative('io.appshell.bridge.test/test', { key: 'value' })
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
          <Button style={styles.button} title="Call Native" onPress={onClickCallNative}/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    fontSize: 20
  }
});

export default App;
