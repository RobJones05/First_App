import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lets see if this works</Text>
      <Text>Does this even work:</Text>
      <TextInput placeholder="DoesWork"/>
      <Text>Enter your surname</Text>
      <TextInput placeholder="Doe"/>

    <Button title="Add User"/>

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
});
