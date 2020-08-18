/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <Text style={styles.welcome}>Clone GoJek App</Text> */}
        <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
        <View style={{ height: 54, backgroundColor: 'lightblue', flexDirection: 'row'}}>
          <View style={{backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home</Text>
          </View>
          <View style={{backgroundColor: 'yellow', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Orders</Text>
          </View>
          <View style={{backgroundColor: 'pink', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Help</Text>
          </View>
          <View style={{backgroundColor: 'grey', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Inbox</Text>
          </View>
          <View style={{backgroundColor: 'black', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Account</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

})
