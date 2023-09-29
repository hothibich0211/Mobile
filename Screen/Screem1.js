import { StatusBar } from "expo-status-bar";
import { TouchableOpacity,StyleSheet, View, ImageBackground, Text } from "react-native";

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';


// const PlaceholderImage = require("./assets/images/background-image.png");
const Image = require('./assets/image/background.png')

export default function Screem1() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text1}>Welcome to !</Text>
        <Text style={styles.text2}>A Hub Where Whispers Echo {'\n'} Loudest</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.text3}>Already have an account? <Text style={styles.text4}>Login</Text></Text>
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
  text1: {
    fontSize: 30,
    color: '#fff',
    marginLeft: 20,
    marginTop: 30,
    fontWeight: 'bold'
  },
  
  text2: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 15,
    padding: 10,
    marginLeft: 40,
    marginTop: 415,
    alignItems: 'center',
    width:300,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text3:{
    fontSize:17,
    color:'#fff',
    fontWeight:'bold',
    marginLeft:64,
  },
  text4:{
    color:'#000'
  }
});
