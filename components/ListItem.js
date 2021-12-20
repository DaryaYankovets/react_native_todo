 import React from "react";

import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const ListItem = ({task, deleteTask}) => {

  const handleDeleteTask = () => {
    deleteTask(task.id)
  }

  return (
    <TouchableOpacity 
      onPress={handleDeleteTask}>
        <Text style={styles.text}>
          {task.title}
        </Text>
    </TouchableOpacity>
  );
};
  
const styles = StyleSheet.create({
  text: {
    padding: 20,
    marginTop: 15,
    marginHorizontal: 20,
    fontSize: 22,
    backgroundColor: '#F6F6F6',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#00ADB5',
  }
});

export default ListItem; 