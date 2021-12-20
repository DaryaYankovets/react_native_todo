import React, {useState} from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

const FormItem = ({addTask}) => {
  const [task, setTask] = useState('');

  const handleChangeText = (text) => {
    setTask(text);
  } 

  const handleAddTask = () => {
    addTask(task);
    setTask('');
  }

  return (
    <View >
      <TextInput 
        style={styles.input}
        onChangeText={handleChangeText}
        placeholder="Введите задачу..."/>
    <Button 
      title={'Добавить'}
      style={styles.btn}
      onPress={handleAddTask}/>
    </View>
  );
};
  
const styles = StyleSheet.create({
  input: {
    padding: 15,
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderColor: '#99DDCC',
  },
  btn: {
    color: '#99DDCC',
  }
});

export default FormItem;