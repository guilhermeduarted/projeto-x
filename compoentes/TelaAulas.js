import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  Picker,
} from 'react-native';
import { Icon } from 'react-native-elements';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const addTask = () => {
    if (
      taskName.trim() !== '' &&
      startTime.trim() !== '' &&
      endTime.trim() !== '' &&
      selectedTeacher.trim() !== '' &&
      selectedDay.trim() !== ''
    ) {
      const newTask = {
        id: Date.now().toString(),
        name: taskName,
        start: startTime,
        end: endTime,
        teacher: selectedTeacher,
        day: selectedDay,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskName('');
      setStartTime('');
      setEndTime('');
      setSelectedTeacher('');
      setSelectedDay('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const renderTasksByDay = (day) => {
    const filteredTasks = tasks.filter((task) => task.day === day);
    return (
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => deleteTask(item.id)}
          >
            <View>
              <Text style={styles.taskName}>{item.name}</Text>
              <Text>{`Início: ${item.start}`}</Text>
              <Text>{`Término: ${item.end}`}</Text>
              <Text>{`Professor(a): ${item.teacher}`}</Text>
            </View>
            <Icon name="delete" type="material" size={24} color="red" />
          </TouchableOpacity>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome da tarefa"
          value={taskName}
          onChangeText={(text) => setTaskName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Hora de início"
          value={startTime}
          onChangeText={(text) => setStartTime(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Hora de término"
          value={endTime}
          onChangeText={(text) => setEndTime(text)}
        />
        <Picker
          style={styles.picker}
          selectedValue={selectedTeacher}
          onValueChange={(itemValue) => setSelectedTeacher(itemValue)}
        >
          <Picker.Item label="Selecione um professor" value="" />
          <Picker.Item label="Professor" value="professor" />
          <Picker.Item label="Professora" value="professora" />
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={selectedDay}
          onValueChange={(itemValue) => setSelectedDay(itemValue)}
        >
          <Picker.Item label="Selecione um dia" value="" />
          <Picker.Item label="Segunda-feira" value="segunda-feira" />
          <Picker.Item label="Terça-feira" value="terca-feira" />
          <Picker.Item label="Quarta-feira" value="quarta-feira" />
          <Picker.Item label="Quinta-feira" value="quinta-feira" />
          <Picker.Item label="Sexta-feira" value="sexta-feira" />
        </Picker>
        <Button title="Adicionar tarefa" onPress={addTask} />
      </View>
      <View style={styles.taskListContainer}>
        <Text style={styles.taskListHeader}>Tarefas - Segunda-feira</Text>
        {renderTasksByDay('segunda-feira')}
      </View>
      <View style={styles.taskListContainer}>
        <Text style={styles.taskListHeader}>Tarefas - Terça-feira</Text>
        {renderTasksByDay('terca-feira')}
      </View>
      <View style={styles.taskListContainer}>
        <Text style={styles.taskListHeader}>Tarefas - Quarta-feira</Text>
        {renderTasksByDay('quarta-feira')}
      </View>
      <View style={styles.taskListContainer}>
        <Text style={styles.taskListHeader}>Tarefas - Quinta-feira</Text>
        {renderTasksByDay('quinta-feira')}
      </View>
      <View style={styles.taskListContainer}>
        <Text style={styles.taskListHeader}>Tarefas - Sexta-feira</Text>
        {renderTasksByDay('sexta-feira')}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  picker: {
    height: 40,
    marginBottom: 10,
  },
  taskListContainer: {
    marginBottom: 20,
  },
  taskListHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskName: {
    fontWeight: 'bold',
  },
});
