import React, { useEffect } from 'react';
import { View, Text, Linking, TouchableOpacity, Animated,Image } from 'react-native';
import styles from './StyleSheet'; // Import your stylesheet

// Define your icon URLs
const githubIconUrl = 'https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png';
const linkedinIconUrl = 'https://t3.ftcdn.net/jpg/03/95/39/16/360_F_395391650_6LfU41V5A4WIhdTis899OaF7wXVgThgP.jpg';
const AboutMe = () => {
  const translateY = new Animated.Value(100);

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  const openUrl = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: translateY }] }]}>
      <View style={styles.aboutMeContainer}>
        <Text style={styles.aboutMeText}>About Me</Text>
        <Text style={styles.infoText}>Hello, I'm Muhammad Anser Sohaib. I like to experiment stuff. Nothing is perfect in this world, so there might be issues in this app, make sure to email me if you find those!
         Here's more about me:</Text>

        {/* Replace the TouchableOpacity components with your custom icons */}

        <TouchableOpacity style={styles.linkContainer} onPress={() => openUrl('https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkVdFhCdKBTrnmjgmpftgMxKCPNhtjptknJqtkcPXwTGtwWKLqJtGnFtzKTxxsnkpMbhJB')}>
          {/* Placeholder for GitHub icon */}
          {/* Replace 'source' prop with your actual image source */}
          <Image source={{ uri: githubIconUrl }} style={styles.icon} />
          <Text style={styles.linkText}>Email: msohaib.bee21seecs@seecs.edu.pk</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkContainer} onPress={() => openUrl('https://github.com/Anser2')}>
          {/* Placeholder for GitHub icon */}
          {/* Replace 'source' prop with your actual image source */}
          <Image source={{ uri: githubIconUrl }} style={styles.icon} />
          <Text style={styles.linkText}>GitHub: Anser2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkContainer} onPress={() => openUrl('https://www.linkedin.com/in/ansersohaib/')}>
          {/* Placeholder for LinkedIn icon */}
          {/* Replace 'source' prop with your actual image source */}
          <Image source={{ uri: linkedinIconUrl }} style={styles.icon} />
          <Text style={styles.linkText}>LinkedIn: Anser Sohaib</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default AboutMe;
