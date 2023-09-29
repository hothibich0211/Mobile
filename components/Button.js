import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

export default function Button({ label }) {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.buttonContent}>
        <Image source={require('../assets/image/search.png')} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>{label}Sign up with Google</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 15,
    padding: 10,
    marginLeft: 40,
    marginTop: 200,
    alignItems: 'center',
    width: 300,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});