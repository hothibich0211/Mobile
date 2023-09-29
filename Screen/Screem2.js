import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, ImageBackground, Text, View, Image, TextInput, CheckBox } from 'react-native';
const Images = require('./assets/image/background2.png');
const Icon = require('./assets/image/search.png');

export default function Screen2() {
	return (
		<View style={styles.container}>
			<ImageBackground source={Images} resizeMode="cover" style={styles.image}>
				<View style={styles.view}>
					<Text style={styles.text}>Sing up to Shh!</Text>
				</View>
				<View style={styles.buttonGroup}>
					<Pressable style={styles.buttonButton}>
						<Text style={styles.buttonText}><Image source={Icon} resizeMode="cover" style={styles.icon} /> Sign up with Google</Text>
					</Pressable>
				</View>
				<View >
					<Text style={styles.line}></Text>
					<Text style={styles.textEmail}> Or continue with Email</Text>
					<Text style={styles.line}></Text>
				</View>
				<View style={styles.formSign}>
					<TextInput style={styles.inputText} placeholder='Enter your name'></TextInput>
				</View>
				<View style={styles.formSign}>
					<TextInput style={styles.inputText} placeholder='Enter username'></TextInput>
				</View>
				<View style={styles.formSign}>
					<TextInput style={styles.inputText} placeholder='Enter Email'></TextInput>
				</View>
				<View style={styles.formSign}>
					<TextInput style={styles.inputText} placeholder='Enter password'></TextInput>
				</View>

				<View style={{ flexDirection: "row", marginLeft: 30, marginTop: 10, alignItems: "center" }}>
					{/* <CheckBox/> */}
					<Text style={styles.textlike}>I agree with the Terms of Service and Privacy {'\n'} policy</Text>
				</View>
				<View style={styles.createGroup}>
					<Pressable style={styles.buttonButton}>
						<Text style={styles.buttonText}>Create Account</Text>
					</Pressable>
				</View>
				<View>
					<Text style={styles.acountText}>Already have an account?</Text>
					<Text style={styles.loginText}>Login</Text>
				</View>

			</ImageBackground>
			<StatusBar style="auto" />
		</View>

	);
};

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
	view: {
		marginTop: 30,
	},
	text: {
		marginTop: 10,
		marginLeft: 80,
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
	buttonGroup: {
		color: '#fff',
		marginTop: 20,
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		alignItems: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
	buttonButton: {
		backgroundColor: '#000',
		borderRadius: 30,
		width: '80%',
		paddingVertical: 15,
		alignItems: 'center',
	},
	icon: {
		width: 20,
	},
	line: {
		// height: 2,
		// color: '#fff',
		// width:10,
	},
	textEmail: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	formSign: {
		marginTop: 20,
    marginLeft:17,
	},
	inputText: {
		borderRadius: 15,
		padding: 9,
width: 300,
		marginLeft: 30,
		backgroundColor: '#fff',
	},
	createGroup: {
		marginTop: 30,
		backgroundColor: '#000',
		borderRadius: 30,
		width: '50%',
		paddingVertical: 5,
		alignItems: 'center',
		marginLeft: 150,
	},
	acountText:{
		marginTop: 10,
		color:'#fff',
		marginLeft:'45%',
		fontWeight: 'bold',
	},
	loginText:{
		color:'#000',
		fontWeight: 'bold',
		marginLeft:'60%',
	},
  textlike:{
    fontSize:14,
    marginLeft:20,
    color:'#fff'
  }
	
});