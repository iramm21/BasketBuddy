import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install this package

const SchedulePage = () => {
  const [schedule, setSchedule] = useState([
    { id: '1', title: 'Game vs Team Alpha', date: '2023-07-15', time: '18:00', type: 'game' },
    { id: '2', title: 'Training Session', date: '2023-07-17', time: '15:00', type: 'training' },
    // Add more events...
  ]);

  const getIconName = (type: any) => {
    switch (type) {
      case 'game':
        return 'sports-basketball';
      case 'training':
        return 'fitness-center';
      default:
        return 'event';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Schedule</Text>
      <FlatList
        data={schedule}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.scheduleItem}>
            <Icon name={getIconName(item.type)} size={24} color="#007bff" />
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDetails}>{`${item.date} at ${item.time}`}</Text>
            </View>
          </View>
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
  scheduleItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 14,
    color: 'gray',
  },
});

export default SchedulePage;
