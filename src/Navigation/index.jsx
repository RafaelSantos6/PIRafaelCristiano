import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Screens/HomeScreen";
import { SobreScreen } from "../Screens/SobreScreen";
import { ContatoScreen } from "../Screens/ContatoScreen";
import { SearchScreen } from "../Screens/SearchScreen";
import { Appbar,Menu } from "react-native-paper";
const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"Sobre"} component={SobreScreen} />
      <Stack.Screen name={"Contato"} component={ContatoScreen} />
      <Stack.Screen name={"Search"} component={SearchScreen} />
    </Stack.Navigator>
  );
};
