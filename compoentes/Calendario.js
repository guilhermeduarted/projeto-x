import React from 'react';
import { View, StyleSheet, Button, Modal, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from '../Estilo.js/style';


const Calendario = () => {
  const handleFecharCalendario = () => {
    console.log('')
  };
  

  const handleDayPress = (day) => {
    
    console.log('Data selecionada:', day.dateString);
  };

 

  return (
    <View style={styles.container}>
       <img 
          src='https://grupofasipe.com.br/img/grupo-fasipe.png'
          width="200px"
          height="100px"
        />  

      <Calendar onDayPress={handleDayPress} />
      <Button title="Fechar Calendário" onPress={handleFecharCalendario} />

    <Text>
        <Text></Text>
    </Text>
    </View>


    
  );
};





export default Calendario;
