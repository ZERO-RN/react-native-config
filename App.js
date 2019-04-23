/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules} from 'react-native';
// import {process} from 'babel-plugin-transform-inline-environment-variables';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import DeviceInfo from 'react-native-device-info';
import Config from 'react-native-config'
import {TestReques} from "./src/TestReques";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
      super(props);
      this.state = {
        props: props
      };

      console.log(process);
      console.log(process.env);
      const apiKey = process.env['API_KEY'];

      console.log(apiKey);

      TestReques.getInstance();

      // Config.API_URL  // 'https://myapi.com'
      // Config.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
      console.log(Config);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.welcome}>{
            `
            getApplicationName   ${DeviceInfo.getApplicationName()},-------------
            getBundleId   ${DeviceInfo.getBundleId()},-------------
            getBuildNumber   ${DeviceInfo.getBuildNumber()},-------------
            getBuildNumber   ${DeviceInfo.getVersion()},-------------
            `
        }</Text>
        <Text style={styles.welcome}>{JSON.stringify(this.state.props)}</Text>
        <Text style={styles.welcome}>{JSON.stringify(Config)}</Text>
        <Text style={styles.welcome}>{`env ----- ${Config.ENV}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
