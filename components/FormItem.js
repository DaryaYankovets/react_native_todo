import React, {useState} from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';

const FormItem = ({addTask}) => {
  const [text, setText] = useState('');

  const handleChangeText = (textTask) => {
    setText(textTask);
  } 

  const handleAddTask = () => {
    if(text) {
      addTask(text);
      setText('');
    } else {
      Alert.alert('Введите задачу');
    }
  }

  return (
    <View >
      <TextInput 
        style={styles.input}
        value={text}
        onChangeText={handleChangeText}
        placeholder="Введите задачу..."
      />
      
      <TouchableOpacity 
        style={styles.button}
        onPress={handleAddTask} >
          <Text style={styles.text}>ДОБАВИТЬ</Text>
      </TouchableOpacity>
    </View>
  );
};
  
const styles = StyleSheet.create({
  input: {
    padding: 15,
    marginHorizontal: 20,
    marginTop: 17,
    borderBottomWidth: 2,
    borderColor: '#00ADB5',
    fontSize: 18,
  },
  button: {
    margin: 20,
    alignItems: 'center',
  },
  text: {
    color: '#00ADB5',
    fontSize: 20,
  }
});

export default FormItem;