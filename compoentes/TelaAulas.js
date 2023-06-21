import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
  Picker,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Navbar from './navbar';

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
        concluido: false,
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

  const markTaskAsDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          const updatedTask = { ...task, concluido: !task.concluido };

          if (updatedTask.concluido) {
            Alert.alert('Tarefa concluída', 'Parabéns! Você concluiu uma tarefa!');
          }

          return updatedTask;
        }
        return task;
      })
    );
  };

  const renderTasksByDay = (day) => {
    const filteredTasks = tasks.filter((task) => task.day === day);
    return (
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.taskItem,
              item.concluido && styles.taskItemConcluido,
            ]}
          >
            <View>
              <Text style={styles.taskName}>{item.name}</Text>
              <Text>{`Início: ${item.start}`}</Text>
              <Text>{`Término: ${item.end}`}</Text>
              <Text>{`Professor(a): ${item.teacher}`}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.taskButton}
                onPress={() => deleteTask(item.id)}
              >
                <Icon name="delete" type="material" size={24} color="red" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.taskButton}
                onPress={() => markTaskAsDone(item.id)}
              >
                {item.concluido ? (
                  <View style={styles.todoButton}>
                    <Text style={styles.todoButtonText}>COMCLUIDA</Text>
                  </View>
                ) : (
                  <Icon name="check" type="material" size={24} color="green" />
                )}
              </TouchableOpacity>
            </View>
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
          placeholder="Data de término"
          value={startTime}
          onChangeText={(text) => setStartTime(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de início"
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
      <Navbar />
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
    borderColor: 'green',
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
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  taskItemConcluido: {
    backgroundColor: 'green',
  },
  taskName: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  taskButton: {
    marginLeft: 10,
  },
  todoButton: {
    backgroundColor: 'gray',
    borderRadius: 5,
    padding: 5,
  },
  todoButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
