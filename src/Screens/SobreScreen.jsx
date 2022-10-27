import { Button, Text, View } from "react-native"
import { styles } from "../lib/style";

export const SobreScreen = ({navigation}) =>{
    return (
        <View style = {styles.container}>
            <Text>Sou o Sobre</Text>
            <Button color={000} title="Va Para home"
            onPress={()=>navigation.navigate("Home")}/>
        </View>
    )
};

