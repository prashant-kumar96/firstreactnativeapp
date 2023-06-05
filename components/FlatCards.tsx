import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.card1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    // paddingHorizontal: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    // flexWrap:'wrap'
    overflow: 'scroll',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  card1: {
    backgroundColor: '#EF5354',
  },
  card2: {
    backgroundColor: '#50DBB4',
  },
  card3: {
    backgroundColor: '#EDA3FA',
  },
});
