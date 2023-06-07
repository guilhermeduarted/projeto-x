import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Estilo.js/style';


const TelaAulas = () => {
  const [nota, setNota] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const navigation = useNavigation();


  
  const aulas = [
    { dia: 'Segunda-feira', professor: 'Andre', sala: 'Sala 207' },
    { dia: 'Terça-feira', professor: 'Borba', sala: 'LAB 2' },
    { dia: 'Quarta-feira', professor: 'Fagner', sala: 'lab 2' },
    { dia: 'Quinta-feira', professor: 'Andre', sala: '207' },
    { dia: 'Sexta-Feira', professor: 'ihbrahin', sala: 'lab 4' },
    { dia: 'Sabado', professor: 'Sofia', sala: 'Sala 217' },
  ];

  const handleSalvarNota = () => {
    if (nota.trim() !== '') {
      if (editIndex >= 0) {
        const novosLembretes = [...lembretes];
        novosLembretes[editIndex] = nota;
        setLembretes(novosLembretes);
        setEditIndex(-1);
      } else {
        setLembretes([...lembretes, nota]);
      }
      setNota('');
      Alert.alert('Nota salva com sucesso!');
    } else {
      Alert.alert('Por favor, insira uma nota válida!');
    }
  };

  const handleApagarLembrete = (index) => {
    const novosLembretes = [...lembretes];
    novosLembretes.splice(index, 1);
    setLembretes(novosLembretes);
  };

  const handleEditarLembrete = (index) => {
    setEditIndex(index);
    setNota(lembretes[index]);
  };

  return (
    <View style={styles.container}>

        <img 
          src='https://grupofasipe.com.br/img/grupo-fasipe.png'
          width="200px"
          height="100px"
        />  

      <Button title="Ir para outra tela" onPress={() => navigation.navigate('Calendario')} />

      {aulas.map((aula, index) => (
        <View key={index} style={styles.aulaContainer}>
          <Text style={styles.diaSemana}>{aula.dia}</Text>
          <Text>Professor: {aula.professor}</Text>
          <Text>Sala: {aula.sala}</Text>
        </View>
      ))}

      


      <TextInput
        style={styles.blocoNotas}
        placeholder="Adicionar nota"
        value={nota}
        onChangeText={setNota}
        multiline
      />

      <Button style={styles.Button} title="Salvar Nota" onPress={handleSalvarNota} />

      <View style={styles.lembretesContainer}>
        <Text style={styles.lembretesTitle}>Lembretes:</Text>
        {lembretes.map((lembrete, index) => (
          <View key={index} style={styles.lembreteContainer}>
            <Text style={styles.lembrete}>{lembrete}</Text>
            <Button title="Apagar" onPress={() => handleApagarLembrete(index)} />
            <Button title="Editar" onPress={() => handleEditarLembrete(index)} />
          </View>
        ))}
      </View>
    </View>
  );
};



export default TelaAulas;
