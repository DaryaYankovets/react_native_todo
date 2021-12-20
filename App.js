import React, {useState, useEffect} from 'react';
import axios from "axios";
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
  const [tasks, setTasks] = useState([{id: null, title: ''}]);

  useEffect( () => {
    axios.get(
      'https://jsonplaceholder.typicode.com/todos' , 
      {params: {
        _limit: 5,
        _page: 2
      }
    }).then((response) => setTasks(response.data));
  }, []); 

  const addTask = (task) => {
    const index = Math.random().toString(36).substring(7);
    setTasks([...tasks, {id: index, title: task, complited: false}]);
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
