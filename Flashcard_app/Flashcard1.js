import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cards, setCards] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

  const handleCardPress = () => {
    setCurrentCardIndex((currentCardIndex + 1) % cards.length);
  };

  const handlePreviousCard = () => {
    setCurrentCardIndex((currentCardIndex - 1 + cards.length) % cards.length);
  };

  const handleRemoveCard = () => {
    if (currentCardIndex > 0) {
      setCards((prevCards) => {
        const updatedCards = [...prevCards];
        updatedCards.splice(currentCardIndex, 1);
        return updatedCards;
      });
  };
  };
  const handleReset = () => {
    setCurrentCardIndex(0);
    setCards(['A', 'Analysis', 'B', 'Businesses', 'C', 'Customer', 'D', 'Developer']);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textCards}>Play (Cards: {cards.length})</Text>
      <TouchableOpacity style={styles.card} onPress={handleCardPress}>
        <Text style={styles.cardText}>{cards[currentCardIndex]}</Text>
      </TouchableOpacity>
      <View style={[styles.Previous, { marginLeft: 20 }]}> 
          <TouchableOpacity onPress={handlePreviousCard}>
            <Text style={styles.buttonPrevious}>Previous</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.Next, { marginRight: 20 }]}> 
          <TouchableOpacity onPress={handleCardPress}  >
            <Text style={styles.buttonNext}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.Remove, { marginRight: 20 }]}> 
          <TouchableOpacity onPress={handleRemoveCard} >
            <Text style={styles.buttonRemove}>Remove From Deck</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.Reset, { marginRight: 20 }]}> 
          <TouchableOpacity onPress={handleReset}  >
            <Text style={styles.buttonReset}>Reset Deck</Text>
          </TouchableOpacity>
        </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 350,
    height: 350,
    backgroundColor: '#FF6969',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  cardText: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },
  textCards: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  
  buttonPrevious:{
    fontSize: 14,
    color: '#fe2e54',
    fontWeight: 'bold',
    
  },
  Previous:{
    borderWidth: 2,
    borderColor: '#fe2e54',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    right:'35%',
  },
  Next:{
    borderWidth: 2,
    borderColor: '#fe2e54',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    left:'38%',
    top:'-4.7%',
  },
  buttonNext:{
    fontSize: 14,
    color: '#fe2e54',
    fontWeight: 'bold',
  },
  Remove:{
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor:'#fff',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    width:'80%'
  },
  buttonRemove:{
    fontSize: 14,
    color: '#fe2e54',
    fontWeight: 'bold',
    textAlign:'center',
  },
  Reset:{
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor:'#fff',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    top:'2%',
    width:'80%'
  },
  buttonReset:{
    fontSize: 14,
    color: '#fe2e54',
    fontWeight: 'bold',
    textAlign:'center',
  },
  button: {
    borderWidth: 2,
    borderColor: '#fe2e54',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    
  },
  buttonText: {
    fontSize: 14,
    color: '#fe2e54',
    fontWeight: 'bold',
  },
});
