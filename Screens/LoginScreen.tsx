import { Text, View, TextInput, Alert, ActivityIndicator, Button,  } from 'react-native'
import React, { Component, useState } from 'react'
import styles from './StyleSheet';
import {app_auth} from '../FirebaseConfig';
import { EmailAuthCredential } from 'firebase/auth/cordova';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const auth = app_auth;




 const LoginScreen =()=> {
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading]= useState(false)
    const auth = app_auth;

    const signIn = async () => {
      setLoading(true);
      try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response);
      } catch (error) {
        console.error(error);
        Alert.alert('Sign in failed'); // Use Alert.alert instead of Alert
      } finally {
        setLoading(false);
      }
    };

    const signUp = async () => {
      setLoading(true);
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        console.log(response);
        Alert.alert("Check your email :)")
      } catch (error) {
        console.error(error);
        Alert.alert('Sign in failed'); // Use Alert.alert instead of Alert
      } finally {
        setLoading(false);
      }
    };

    return (
      <View style={styles.container}>
        <Text style = {styles.text}>Login or Create Account</Text>
        <TextInput value= {email} style={styles.textInput} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
        <TextInput secureTextEntry={true} value={password}  style= {styles.textInput} placeholder='Password' autoCapitalize='none'onChangeText= {(text)=>setPassword(text)} ></TextInput>
      
      {
        loading ? (
          <ActivityIndicator size={"large"} color={"white"}/>
          ) :(
            <>
            <Button title='Sign In' onPress={()=>signIn()} color={'orange'}></Button>

            <Button title='Create Account' onPress={()=> signUp() } color={'orange'}></Button>
            </> 
        )
      }


      </View>
    )
  }

  export default LoginScreen;
