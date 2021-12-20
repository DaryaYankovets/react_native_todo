import React from "react";

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Список дел</Text> 
    </View>
  );
};
  
const styles = StyleSheet.create({
  header: {
      paddingTop: 70,
      height: 130,
      backgroundColor: '#00ADB5',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#F6F6F6',
    textAlign: 'center',
  }
});

export default Header;