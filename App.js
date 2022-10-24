import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';



export function HomeScreen({Navigation}){
  const irParaSobre = () =>{
    return navigation.navigate("Sobre");
  }
  
  return(
    <view style={styles.container}>
      <text>Ola Mundo Cinza</text>
      <button title='Ir Para Sobre' onPress={()=>navigation.navigate("Sobre")}/>
    </view>
  );
}

export function SobreScreen(){
return(
  <view style={styles.container} >
    <text>Sou A tela De Sobre</text>
  </view>
);
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Sobre' component={SobreScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

