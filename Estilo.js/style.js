import {StyleSheet } from "react-native"
import { Button } from "react-native-web";

const styles = StyleSheet.create({

    container: {
      flex: 10,
      justifyContent: 'center',
      alignItems:"center",
    
    },

    input: {
      width: '80%',
      height: 30,
      borderWidth: 1,
      borderColor: '#008000',
      marginBottom: 10,
      paddingHorizontal: 10,
    },

    aulaContainer: {
        marginBottom: 16,
      },

      diaSemana: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },

      blocoNotas: {
        marginTop: 16,
        padding: 8,
        borderWidth: 1,
        borderColor: '#008000',
        borderRadius: 7,
        height: 100,
        
      },

      lembretesContainer: {
        marginTop: 16,
        
      },

      lembretesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        
      },

      lembreteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
      },

      lembrete: {
        fontSize: 16,
        flex: 1,
        marginRight: 8,
      },

    img:{
        
        width: '80px',
        height: '30px',
        

    }
  });

  export default styles ;



