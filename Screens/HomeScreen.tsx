import React, {useRef,useEffect,useState} from 'react';
import {Easing, Animated,View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Button, Image, ScrollView } from 'react-native';
import styles from './StyleSheet' 
import my_Header from './Header'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

  
  const showAlert = () => {
      Alert.alert('Here is your expected GPA __');
    };
    
    
   
    
    const STORAGE_KEY = '@MyApp:GPAData';

const CurrentSubjectMarks = () => {
  const [numCourses, setNumCourses] = useState<number>(0);
  const [courseGrades, setCourseGrades] = useState<string[]>([]);
  const [gpa, setGPA] = useState<string>("0.0");

  useEffect(() => {
    // Load stored data when component mounts
    loadData();
  }, []);

  const handleNumCoursesChange = (text: string) => {
    const enteredNumber = parseInt(text, 10);
    if (!isNaN(enteredNumber) && enteredNumber >= 1 && enteredNumber <= 7) {
      setNumCourses(enteredNumber);
      setCourseGrades(Array.from({ length: enteredNumber }, () => ""));
    }
  };

  const handleGradeChange = (index: number, grade: string) => {
    const newCourseGrades = [...courseGrades];
    newCourseGrades[index] = grade.toUpperCase(); // Convert grade to uppercase for consistency
    setCourseGrades(newCourseGrades);
    saveData(); // Save data whenever grades are updated
  };

  const calculateGPA = () => {
    const gpaMapping: Record<string, number> = {
      'A': 4.0,
      'B+': 3.5,
      'B': 3.0,
      'C+': 2.5,
      'C': 2.0,
      'D+': 1.5,
      'D': 1,
      'F': 0,
      'XF': 0,
      'a': 4.0,
      'b+': 3.5,
      'b': 3.0,
      'c+': 2.5,
      'c': 2.0,
      'd+': 1.5,
      'd': 1,
      'f': 0,
      'xf': 0
    };

    const totalCredits = courseGrades.length;
    let totalGPA = 0;

    courseGrades.forEach((grade) => {
      if (gpaMapping.hasOwnProperty(grade)) {
        totalGPA += gpaMapping[grade];
      }
    });

    const calculatedGPA = totalGPA / totalCredits;
    setGPA(calculatedGPA.toFixed(2)); // Limit to 2 decimal places
    Alert.alert('GPA Calculated', `Your GPA is ${calculatedGPA.toFixed(2)}`);
    saveData(); // Save data after calculation
  };

  const saveData = async () => {
    try {
      const data = JSON.stringify({ numCourses, courseGrades });
      await AsyncStorage.setItem(STORAGE_KEY, data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsedData = JSON.parse(data);
        setNumCourses(parsedData.numCourses);
        setCourseGrades(parsedData.courseGrades);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  return (
    <ScrollView>
      <Text style={{ marginTop: 20, fontSize: 16, fontStyle: 'italic' }}>
        Number of courses this semester?
      </Text>
      <TextInput
        style={{ ...styles.textinput2, marginBottom: 10 }}
        keyboardType='numeric'
        placeholder='Enter Numbers Only 1-7'
        onChangeText={handleNumCoursesChange}
        value={numCourses.toString()}
      />

      {Array.from({ length: numCourses }).map((_, index) => (
        <TextInput
          key={index}
          style={styles.textinput2}
          placeholder={`Grade for Course ${index + 1}`}
          onChangeText={(text) => handleGradeChange(index, text)}
          value={courseGrades[index]}
        />
      ))}

      <Button title="Calculate GPA" onPress={calculateGPA} color={"orange"} />

      <Text style={{ margin: 10, fontSize: 18 }}>GPA: {gpa}</Text>
    </ScrollView>
  );
};


interface SlidingTextStripProps {
  text: string;
  speedX: number;
  speedY: number;
}

const SlidingTextStrip: React.FC<SlidingTextStripProps> = ({ text, speedX, speedY }) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const slideLeft = Animated.timing(translateX, {
      toValue: -50,
      duration: speedX,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    const slideRight = Animated.timing(translateX, {
      toValue: 50,
      duration: speedX,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    const resetPosition = Animated.timing(translateX, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false,
    });

    const sequence = Animated.sequence([slideLeft, resetPosition, slideRight, resetPosition]);

    Animated.loop(sequence).start();
  }, [translateX, speedX]);

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 100,
      duration: speedY,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [translateY, speedY]);

  return (
    <View style={styles.stripContainer}>
      <Animated.View
        style={[
          styles.strip,
          {
            transform: [
              { translateX: translateX },
              { translateY: translateY },
            ],
          },
        ]}
      >
        <Text style={styles.text3}>{text}</Text>
      </Animated.View>
    </View>
  );
};


   
    
   const HomeScreen=()=>{
      return(
         
         
          <View style={styles.header}>
            <Image style={{width: "auto", height: 70}} source={require("../resources/images/NUST-Islamabad.jpg")}></Image>

         
          <View style={styles.container}> 
          <CurrentSubjectMarks />
          <SlidingTextStrip text="Made by NUSTIAN for NUST" speedX={1000} speedY={2000} />
          
          </View>
          </View> 
      );
   };
    
    export default HomeScreen;
  
