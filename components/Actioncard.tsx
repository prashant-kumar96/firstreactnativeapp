import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

export default function Actioncard() {
  function openWebsite(website: string) {
    Linking.openURL(website);
  }
  return (
    <View>
      <Text style={styles.headingText}>Block Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21-ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1596073419667-9d77d59f033f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={4}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            perspiciatis aperiam ullam optio eius a impedit ducimus ipsa
            mollitia quibusdam numquam, dolorum iste architecto aut vitae fugiat
            nobis sint atque culpa illo veniam. Delectus at dolorem porro in
            maxime omnis ipsa repudiandae inventore, est minima aperiam
            reprehenderit esse cumque quae.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://portfolio-one-blue-20.vercel.app/');
            }}>
            <Text style={styles.button}>Know More</Text>
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://www.instagram.com/artist_prashant_k/');
            }}>
            <Text style={styles.button}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  card: {
    // width: 350,
    // height: 340,
    borderRadius: 4,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#884A39',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.5,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'yellow',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
    // width: 300,
    width: '100%',
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    fontSize: 16,
    color: 'black',
    borderRadius: 6,
  },
});
