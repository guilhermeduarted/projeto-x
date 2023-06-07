import React, { useState } from 'react';
import { View, TextInput, Button} from 'react-native';
import styles from '../Estilo.js/style';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    navigation.navigate('TelaAulas');
  };

  return (

     
    <View style={styles.container}>

        <img 
          src='https://grupofasipe.com.br/img/grupo-fasipe.png'
          width="400px"
          height="100px"
        />
      <TextInput
        placeholder="Username"
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



