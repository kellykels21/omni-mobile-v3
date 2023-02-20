import { Text, View, StyleSheet } from "react-native";

export default function Login() {
	return(
		<View style={styles.container}>
			<Text>Login</Text>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		 flex: 1,
		 backgroundColor: '',
		 alignItems: 'center',
		 justifyContent: 'center',
	},
})
