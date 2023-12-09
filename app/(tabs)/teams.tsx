import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, SafeAreaView } from 'react-native';

// Dummy logo import - replace with your local or remote image paths
const defaultTeamLogo = require('../../assets/images/logo.png');

const TeamsPage = () => {
  const [teams, setTeams] = useState([
    { id: '1', name: 'Team Alpha', description: 'An elite team with skilled players.', logo: defaultTeamLogo },
    { id: '2', name: 'Team Beta', description: 'Focused on defense strategies.', logo: defaultTeamLogo },
    // Add more teams...
  ]);

  const onTeamPress = (teamId: string) => {
    console.log('Team Pressed', teamId);
    // Handle team press action (e.g., navigate to a team details screen)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Teams</Text>
      <FlatList
        data={teams}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.teamItem}
            onPress={() => onTeamPress(item.id)}
          >
            <Image source={item.logo} style={styles.logo} />
            <View style={styles.textContainer}>
              <Text style={styles.teamName}>{item.name}</Text>
              <Text style={styles.teamDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  teamItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  teamDescription: {
    fontSize: 14,
    color: 'gray',
  },
});

export default TeamsPage;
