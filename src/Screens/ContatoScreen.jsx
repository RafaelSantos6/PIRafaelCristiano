import { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "../lib/style";
import { TextInput } from "react-native-paper";

export const ContatoScreen = ({}) => {
  const [text, setText] = useState("");
  const [Comment, setComment] = useState("");
 
    return (
      <View style={styles.container}>
        <Text>Sou Contato</Text>
        <TextInput
          label={"Email"}
          value={text}
          onChangeText={(Text) => setText(Text)}
        />
        <TextInput
          underlineColor=""
          multiline
          numberOfLines={4}
          label={"Sua Mensagem"}
          value={Comment}
          onChangeText={(Text) => setComment(Text)}
        />
       
      </View>
    );
  };

