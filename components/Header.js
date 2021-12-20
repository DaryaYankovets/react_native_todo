import React from "react";

import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert, 
  Image,
  TouchableWithoutFeedback
} from 'react-native';

const Header: () => Node = () => {
    return (
      <SafeAreaView style={styles.header}>
        <Text steles>Список дел</Text>
        
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    
  });
  
  export default Header;