import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../Estilo.js/style';




const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('TelaAulas');
  };

  

  return (
    <View style={styles.container}>

<img src='data:image/png;base64,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'></img>


      <TextInput

        placeholder="RA"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button style={styles.Buttonlogin} title="Login" onPress={handleLogin} />

      
    </View>
  );
};

export default LoginScreen;




