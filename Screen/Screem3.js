// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
// import Routes from './Routes.js'
// class reactTutorialApp extends Component {
//   render() {
//      return (
//         <Routes />
//      )
//   }
// }
// export default reactTutorialApp
// AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)

import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, StyleSheet, View, ImageBackground, Text, TextInput } from "react-native";
import Button from "./components/Button";


const Image = require('./assets/image/background1.png')

export default function Screem3() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
        <Button />
        <Text style={styles.textsingup1}>Log in to Shh!</Text>
        <View style={styles.Combo}>
          <View style={styles.line}></View>
          <Text style={styles.textEmail}>Or log in with Email</Text>
          <View style={styles.line}></View>
        </View>
        <View>
          <Text style={styles.textUserName}>Username or Email</Text>

          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            onChangeText={this.handleEmail} />
          <Text style={styles.textPassword}>Password</Text>
          <Text style={styles.textForgot}>Forgot?</Text>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            onChangeText={this.handlePassword} />
        </View>
        <Text style={styles.textAccount}>Don't have an account?</Text>
        <Text style={styles.textEnd}>Sign up</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 390,
    height: 815,
    borderRadius: 18,
  },
  textsingup1: {
    fontSize: 30,
    color: '#fff',
    marginLeft: 90,
    marginTop: -110,
    fontWeight: 'bold'
  },
  textEmail: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  textUserName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 50,
    marginTop: 20,
  },
  textPassword: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  textForgot: {
    fontSize: 18,
    marginLeft: 280,
    marginTop: -20,
  },
  input: {
    margin: 10,
    height: 40,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
    width: 300,
    marginLeft: 43,
    borderRadius: 20,
  },
  textAccount: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 50,
    marginTop: 80,
  },
  textEnd: {
    fontSize: 18,
    marginLeft: 110,
    fontWeight: 'bold'
  },
  Combo: {
    marginTop:80,
    margin:20,
    flexDirection: 'row',
    justifyContent:'center'

  },
  line: {
    margin:20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: 1,
    width: 100,
  }


});


