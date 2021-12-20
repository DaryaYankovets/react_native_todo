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
    {id: 1, text: 'apple', complited: true},
    {id: 2, text: 'orage', complited: false},
    {id: 3, text: 'banana', complited: false},
  ]);

  const addTask = (task) => {
    const index = tasks[tasks.lenght - 1].id + 1;
    setTasks([...tasks, {id: index, text: task, complited: false}]);
  }
  
  return (
    <View>
      <Header/> 
      <FormItem addTask={addTask}/>
      <View>
        <FlatList data={tasks} renderItem={({ item }) => (
          <ListItem item={item}/>
        )}/>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
