import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {taj} from '../android/assets/taj.jpg';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={require('../android/assets/taj.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLabel}>Monument</Text>
          <Text style={styles.cardDescription}>
            Oh god thankyou for this wonderful day
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  card: {
    // width: 350,
    // height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    paddingBottom: 15,
  },
  cardElevated: {
    backgroundColor: '#12B0E8',
    color: 'black',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    width: '100%',
    borderTopRightRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: 'black',
    fontSize: 14,
    marginBottom: 6,
    textAlign: 'right',
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {color: 'black'},
});
