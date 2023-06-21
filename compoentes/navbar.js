import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const Navbar = () => {
  const navigation = useNavigation();


 

  const bololo = () => {
    navigation.navigate('Link1');
  };


  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navbarButton}>
        <Text style={styles.navbarButtonText}>Página 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarButton} onPress={()=>{Linking.openURL("https://fasipe.mentorweb.ws/fasipeSecurityG5/?pcaes=a205de9c60d3992e6296830743168a74")}}>
        <Text style={styles.navbarButtonText}>MENTOR FASIPE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarButton} onPress={bololo}>
        <Text style={styles.navbarButtonText}>Página 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  navbarButton: {
    paddingHorizontal: 10,
  },
  navbarButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Navbar;
