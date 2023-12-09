import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure you have this installed

// Placeholder avatar - replace with your image paths or remote URLs
const defaultAvatar = require('../../assets/images/avatar.jpg');

const MessagesPage = () => {
  const [messages, setMessages] = useState([
    { id: '1', sender: 'Coach John', preview: 'Practice rescheduled to 5 PM', time: '10:30 AM' },
    { id: '2', sender: 'Team Alpha', preview: 'New game schedule is out!', time: '09:15 AM' },
    // Add more messages...
  ]);

  const onMessagePress = (messageId: string) => {
    console.log('Message Pressed', messageId);
    // Navigate to message details screen
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.messageItem}
            onPress={() => onMessagePress(item.id)}
          >
            <Image source={defaultAvatar} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.sender}>{item.sender}</Text>
              <Text style={styles.preview}>{item.preview}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  messageItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  sender: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  preview: {
    fontSize: 14,
    color: 'gray',
  },
  time: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 10,
  },
});

export default MessagesPage;
