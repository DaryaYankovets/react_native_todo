import React, {useState} from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList, 
} from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';
import FormItem from './components/FormItem';


const App = () => {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Купить подарки на Новый год', complited: false},
    {id: 2, text: 'Выучить English', complited: false},
  ]);

  const addTask = (task) => {
    //const index = tasks[tasks.length - 1].id + 1;
    const index = Math.random().toString(36).substring(7);
    setTasks([...tasks, {id: index, text: task, complited: false}]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  
  return (
    <View>
      <Header/> 
      <FormItem addTask={addTask}/>
      <View>
        <FlatList data={tasks} renderItem={({ item }) => (
          <ListItem task={item} deleteTask={deleteTask}/>
        )}/>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
