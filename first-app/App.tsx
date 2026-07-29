import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {
  return (
    <View >
      <Text style={styles.WelcomeTxt}>Lets see if this works</Text>

      <Text style={styles.enterTxt}>Does this even work:</Text>
      <TextInput placeholder="DoesWork"/>
      <Text>Enter your surname</Text>
      <TextInput placeholder="Doe"/>


    <Button title="Add User"/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  WelcomeTxt: {
    paddingTop: 40,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },

enterTxt: {
  fontWeight: 'bold',
},

userInputTxt: {
  borderBottomWidth: 1
}
});
