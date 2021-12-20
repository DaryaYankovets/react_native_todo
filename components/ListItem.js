 import React from "react";

import {
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';

const ListItem = ({item}) => {

    return (
      <TouchableHighlight>
        <Text style={styles.text}>
          {item.text}
        </Text>
        
      </TouchableHighlight>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      padding: 20,
      marginTop: 15,
      marginHorizontal: 20,
      fontSize: 22,
      backgroundColor: '#F6F6F6',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#99DDCC',
    }
  });
  
  export default ListItem; 