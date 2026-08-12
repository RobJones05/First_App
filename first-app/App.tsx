import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, SafeAreaView, Animated, ViewStyle, StyleProp} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState, useRef, useEffect, ReactNode } from 'react';
import { RadioButton } from 'react-native-paper';


 type RootStackParamList = {
   Home: undefined;
   ViewDetails: {
    NameSend: string;
    SurnameSend: string; 
  };
 };
  

const Stack = createNativeStackNavigator<RootStackParamList>();

type MainScreenProps = NativeStackScreenProps<
RootStackParamList,
'Home'
>;

type ViewDetailsProps = NativeStackScreenProps<
RootStackParamList,
'ViewDetails'
>;

export default function App() {
return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen}/>
        <Stack.Screen name="ViewDetails" component={ViewDetails}/>
      </Stack.Navigator>  
    </NavigationContainer>
  );
  
};

// MainScreen Function

function MainScreen({navigation}: MainScreenProps) {

  <Button title="Add User"                              
          onPress={() => {
            if((isEmpty(Name)==false) || (isEmpty(Surname)==false)){
            navigation.navigate('ViewDetails', {
              NameSend: Name,
              SurnameSend: Surname
            });
            setError("")
          } else {
             setError("Please fill in all fields")
          }
          }}
        />

  const [Name, setName] = useState('');                
  const [Surname, setSurname] = useState('');
  const [Error, setError] = useState('');

  console.log("App is running");
  
  return (
  <View>                    
    <SafeAreaView>
     <ScrollView>

  
    
      <Image style={styles.mainImage} 
      source={require('./_images/zamalek.jpg')}/>
      <Text style={styles.welcomeText}>Welcome to my App!</Text>

     
    <View style={styles.inputFlex}>
      <Text style={styles.labelText}>Enter your name:</Text>
      <TextInput style={styles.InputText} 
                        placeholder="John" 
                        autoCapitalize="words" 
                        autoComplete="name" 
                        keyboardType="default"
                        onChangeText={newText => setName(newText)}/>
    </View>  
  
    <View style={styles.inputFlex}>
      <Text style={styles.labelText}>Enter your surname:</Text>
      <TextInput style={styles.InputText} 
                 placeholder="Doe" 
                 autoCapitalize="words" 
                 autoComplete="name-family" 
                 keyboardType="default"
                 onChangeText={newText => setSurname(newText)}/>
    </View>
    


      <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function isEmpty(value : any){
  return(
    (value == null) ||

    (value.hasOwnProperty('length') && value.length === 0) ||

    (value.constructor === Object && Object.keys(value).length ===0)
  )

}

function ViewDetails( {navigation, route}: ViewDetailsProps) {
  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Name: {NameGet} Surname: {SurnameGet}</Text>
    </View>
  );
};

interface FadeInViewProps{
  children: ReactNode;
  style?: StyleProp<ViewStyle>
}




const FaidInView = ({ children, style}: FadeInViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false
      }
    ).start();
  },[fadeAnim])

  return (
    <Animated.View style ={{
      ...(style as object),
      opacity: fadeAnim
    }}>
      {children}
    </Animated.View>

  
  );
}


const styles = StyleSheet.create({
  welcomeText: {
   paddingTop: 70,
   color: 'purple',
   fontWeight: 'bold',
   fontSize: 50,
   textAlign: 'center'
  },

labelText: {
  fontWeight: 'bold',
},

InputText:{
  borderBottomWidth: 1,

},

mainImage: {
  height: 350,
  width: 400,
  paddingTop: 60,
  justifyContent: 'center',
  alignItems: 'center',
},

inputFlex: {
  flexDirection: 'row',
  marginTop: 25,
  justifyContent: 'space-evenly', 
},

errorRed: {
  color: 'red',
  fontWeight: 'bold',
  fontSize: 30,
  textAlign: 'center'
}

});