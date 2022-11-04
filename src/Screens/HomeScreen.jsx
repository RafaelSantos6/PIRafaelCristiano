import { Text, View, Button } from "react-native";
import { styles } from "../lib/style";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Sou o Home</Text>
      <Button
        title="Va Para o Sobre"
        onPress={() => navigation.navigate("Sobre")}
      />
      <Button
        title="Va para contato"
        onPress={() => navigation.navigate("Contato")}
      />
      <Button
        title="Va para Search"
        onPress={() => navigation.navigate("Search")}
      />
    </View>
  );
};
