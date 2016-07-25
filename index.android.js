/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import BadgeView from './view/BadgeView';
import Util from './view/Util';

class badgeview extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={{height:80,flexDirection:'row',borderBottomColor:'#ddd',borderBottomWidth:Util.pixel}}>
      <BadgeView
      title='待付款'
      padding={8}
      badgeStyle={{flex:1}}
      badgeText={5}
      renderImage={()=><Image style={{width:30,height:30}} source={require('./images/myObligatiion.png')}/>}
      />
      <BadgeView
       title='待收货'
       padding={8}
       badgeStyle={{flex:1}}
       renderImage={()=><Image style={{width:30,height:30}} source={require('./images/myReceivingBt.png')}/>}
       />
      <BadgeView
       title='全部订单'
       padding={8}
       badgeStyle={{flex:1}}
       renderImage={()=><Image resizeMode='contain' style={{width:30,height:30}} source={require('./images/myOrderBt.png')}/>}
       />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

AppRegistry.registerComponent('badgeview', () => badgeview);
