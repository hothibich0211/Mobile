import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [cards, setCards] = useState([
		{ Letter: 'A', Word: 'Analysis', isFlipped: false },
		{ Letter: 'B', Word: 'Business', isFlipped: false },
		{ Letter: 'C', Word: 'Customer', isFlipped: false },
		{ Letter: 'D', Word: 'Developer', isFlipped: false },
	]);

	const handleCardPress = () => {
		setCards((prevCards) => {
			const updatedCards = [...prevCards];
			const currentCard = updatedCards[currentCardIndex];
			updatedCards[currentCardIndex] = {
				...currentCard,
				isFlipped: !currentCard.isFlipped,
			};
			return updatedCards;
		});
	};

	const handleNextCard = () => {
		setCurrentCardIndex((currentCardIndex + 1) % cards.length);
	};

	const handlePreviousCard = () => {
		setCurrentCardIndex((currentCardIndex - 1 + cards.length) % cards.length);
	};

	const handleRemoveCard = () => {
		if (currentCardIndex >= 0 && currentCardIndex < cards.length) {
			setCards((prevCards) => {
				const updatedCards = [...prevCards];
				updatedCards.splice(currentCardIndex, 1);
				return updatedCards;
			});
		}
	};

	const handleReset = () => {
		setCurrentCardIndex(0);
		setCards([
			{ Letter: 'A', Word: 'Analysis', isFlipped: false },
			{ Letter: 'B', Word: 'Business', isFlipped: false },
			{ Letter: 'C', Word: 'Customer', isFlipped: false },
			{ Letter: 'D', Word: 'Developer', isFlipped: false },
		]);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.textCards}>Play (Cards: {cards.length})</Text>
			<TouchableOpacity style={styles.card} onPress={handleCardPress}>
				<Text style={styles.cardText}>
					{currentCardIndex >= 0 && currentCardIndex < cards.length
						? cards[currentCardIndex].isFlipped
							? cards[currentCardIndex].Word
							: cards[currentCardIndex].Letter
						: ''}
				</Text>
			</TouchableOpacity>
			<View style={[styles.buttonContainer, { width: '80%' }]}>
				<TouchableOpacity
					style={[styles.Previous, { marginRight: 10 }]}
					onPress={handlePreviousCard}
				>
					<Text style={styles.buttonPrevious}>Previous</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.Next, { marginLeft: 10 }]}
					onPress={handleNextCard}
				>
					<Text style={styles.buttonNext}>Next</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.Remove} onPress={handleRemoveCard}>
				<Text style={styles.buttonRemove}>Remove From Deck</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.Reset} onPress={handleReset}>
				<Text style={styles.buttonReset}>Reset Deck</Text>
			</TouchableOpacity>
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
		marginBottom: 20,
	},
	buttonPrevious: {
		borderWidth: 2,
		borderColor: '#fe2e54',
		color:'#fe2e54',
		paddingHorizontal: 15,
		paddingVertical: 7,
		borderRadius: 5,
	},
	buttonNext: {
		borderWidth: 2,
		borderColor: '#fe2e54',
		color:'#fe2e54',
		paddingHorizontal: 15,
		paddingVertical: 7,
		borderRadius: 5,
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
});