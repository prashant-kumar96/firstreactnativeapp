import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView style={styles.container} horizontal>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>More</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>okay</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>boss</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>content....</Text>
        </View>
      </ScrollView>
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
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 4,
  },
  cardElevated: {
    backgroundColor: 'darkgray',
    elevation: 4,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: 'red',
    shadowOpacity: 1,
    shadowRadius: 2,
  },
});
