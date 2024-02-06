import React, {useState}  from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Button} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
        flex:1, 
        justifyContent:'flex-start', 
        backgroundColor: 'black' ,
        padding: 15
    },
    current_subject_marks: {
        paddingStart:15,
        paddingBottom:20,
        fontSize: 22,
        color: 'white'
    },
  
    image_nust_logo: {
       
        width:40,
        height: 40,
        
    },
    text: {
      color: 'white',
      fontSize: 18,
      marginBottom: 25,
    },
    buttonContainer: {
        padding:10,
      backgroundColor: 'orange',   
      borderRadius: 40,
      marginTop: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        width: '80%',
    },
    textInput: {
        height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '80%',
    },
    textinput2: {
      height: 30,
      borderColor: 'orange',
      borderWidth: 1, 
      borderRadius:20 ,
      marginBottom: 20,
      padding: 5,
      paddingRight:50,
      width: '100%'
  },
    title: {
      fontSize: 20,
      paddingLeft: 60,
    },
    googleButton: {
      width: 192,
      height: 48,
    },
    animatedText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 10,
    },
    aboutMeContainer: {
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    aboutMeText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    infoText: {
      fontSize: 16,
      marginBottom: 10,
    },
    linkText: {
      fontSize: 16,
      color: 'blue',},
       linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  icon: {
    marginRight: 8,
  },

  });

  export default styles;