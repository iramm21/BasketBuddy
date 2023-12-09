import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface TrendingItem {
  id: number;
  title: string;
  imageUrl: any;
  topic: string[];
}

const ExplorePage = () => {
  const navigation = useNavigation();

  const topics = ['Trending', 'Players', 'Events', 'News', 'Tips', 'Videos'];
  const [selectedTopic, setSelectedTopic] = useState<string>(topics[0]);

  const [trendingItems, setTrendingItems] = useState<TrendingItem[]>([
    {
      id: 1,
      title: 'Rocky Roundup',
      topic: ['Trending', 'Events'],
      imageUrl: require('../../assets/images/offense.jpg')
    },
    {
      id: 2,
      title: 'College Team Wins 136 - 16',
      topic: ['News', 'Trending'],
      imageUrl: require('../../assets/images/defense.jpg')
    },
    {
      id: 3,
      title: 'Tips for Shooting',
      topic: ['Tips', 'Videos'],
      imageUrl: require('../../assets/images/shooting.jpg')
    },
    {
      id: 4,
      title: 'Positioning Yourself',
      topic: ['Tips', 'Videos'],
      imageUrl: require('../../assets/images/positions.jpg')
    },
    {
      id: 5,
      title: 'This is Rosie Yang',
      topic: ['Players', 'Trending'],
      imageUrl: require('../../assets/images/person.jpg')
    },
  ]);

  const onTrendingItemPress = (itemId: number) => {
    console.log('Selected Trending Item:', itemId);
    // Integrate navigation logic here
  };

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Explore BasketBuddy</Text>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContentContainer}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.headerScrollView}
        >
          {topics.map((topic, index) => (
            <TouchableOpacity
              key={index}
              style={styles.headerItem}
              onPress={() => handleTopicSelect(topic)}
            >
              <Text style={styles.headerItemText}>{topic}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.trendingHeader}>{selectedTopic} Now</Text>
        {trendingItems
          .filter(item => item.topic.includes(selectedTopic))
          .map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.trendingItem}
              onPress={() => onTrendingItemPress(item.id)}
            >
              <Image source={item.imageUrl} style={styles.itemImage} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        {trendingItems.filter(item => item.topic.includes(selectedTopic)).length === 0 && (
          <Text style={styles.noItemsText}>No items available for this topic.</Text>
        )}
      </ScrollView>
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
  scrollContainer: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 20, // This adds space at the bottom inside the ScrollView
  },
  headerScrollView: {
    marginBottom: 20,
    paddingHorizontal: 10, // Match the padding of the header text
  },
  headerItem: {
    marginRight: 15,
  },
  headerItemText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: '500',
  },
  trendingHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  trendingItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  itemImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10, // Add space above and below the text
  },
  noItemsText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ExplorePage;