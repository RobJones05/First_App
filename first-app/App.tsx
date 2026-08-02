import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

export default function App() {

  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');

  console.log("App is running")

  return (
    <View >

      <Image style={styles.mainImg}
       source={require('./_images/zamalek.jpeg')}/>

 
      <Text style={styles.WelcomeTxt}>Lets see if this works</Text>


      <View style={styles.inputFlex}>

      <Text style={styles.enterTxt}>Enter your surname</Text>
      <TextInput 
      placeholder="John"
      value={Name}
      onChangeText={(text) =>
      setName(text.replace(/[^a-zA-Z\s]/g, ""))
  }
     autoCapitalize="words"
     autoComplete="name"
     keyboardType="default"
/>
    
    </View>
      <View style={styles.inputFlex}>
      <Text>Enter your surname</Text>
      <TextInput
      placeholder="Doe"
      value={Surname}
      onChangeText={(text) =>
      setSurname(text.replace(/[^a-zA-Z\s]/g, ""))
  }
     autoCapitalize="words"
     autoComplete="family-name"
     keyboardType="default"
/>
  
    </View>

    <Button title="Add User"
    onPress={() => {
      console.log("Name: " + Name +
        "Surname: " + Surname)
    }}
    />

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
},

mainImg: {
  height: 250,
  width: 270,
  paddingTop: 25,
  justifyContent: 'center',
  alignItems: 'center'
},

inputFlex: {
  flexDirection: 'row',
  marginTop: 25
}



});
