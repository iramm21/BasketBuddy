import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Ensure you have this installed

// Placeholder avatar - replace with your image paths or remote URLs
const defaultAvatar = require('../../assets/images/avatar.jpg');

const ProfilePage = () => {
  // Example user data
  const userData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    team: 'Team Alpha',
    role: 'Player',
    // Add more user-specific data...
  };

  const onEditProfile = () => {
    console.log('Edit Profile');
    // Navigate to profile edit screen
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={defaultAvatar} style={styles.avatar} />
        <Text style={styles.name}>{userData.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>Email: {userData.email}</Text>
          <Text style={styles.infoText}>Team: {userData.team}</Text>
          <Text style={styles.infoText}>Role: {userData.role}</Text>
          {/* Add more profile details here */}
        </View>
        <TouchableOpacity style={styles.button} onPress={onEditProfile}>
          <Icon name="account-edit" size={20} color="#fff" />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  infoCard: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ProfilePage;
