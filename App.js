import { StyleSheet, Text, View, Button, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';



export function HomeScreen({navigation}){
  const irParaSobre = () =>{
    return navigation.navigate("Sobre");
  }
  
  return(
    <View style={styles.container}>
      <Text>Ola Mundo Cinza</Text>
      <Button title='Ir Para Sobre' 
      onPress={()=>navigation.navigate("Sobre")}/>
    </View>
  );
}

function SobreScreen(){
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
        <Stack.Screen name={"Home"} component={HomeScreen}/>
        <Stack.Screen name={"Sobre"} component={SobreScreen}/>
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

