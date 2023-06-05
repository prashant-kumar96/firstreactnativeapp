import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: '1',
      name: 'sundram',
      status:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, ducimus',
      imgurl:
        'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000',
    },
    {
      uid: '2',
      name: 'sumit',
      status:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, ducimus',
      imgurl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_7QUACiX6NShhhmynuyp2qYru-Lz0C5p20VwIHW8&s',
    },
    {
      uid: '3',
      name: 'satyam',
      status:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, ducimus',
      imgurl:
        'https://images.unsplash.com/photo-1600703136783-bdb5ea365239?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pcXVlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80',
    },
    {
      uid: '4',
      name: 'simranjeet',
      status:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, ducimus',
      imgurl:
        'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imgurl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imgurl,
              }}
              style={styles.userImage}
            />
            <View style={styles.contents}>
              <Text style={styles.userName}>{name}</Text>

              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 10,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  userStatus: {
    fontSize: 12,
    // padding: 10,
    color: 'white',
    flex: 1,
    // flexWrap: 'wrap',

    // width: '100%',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  contents: {
    // borderWidth: 1,
    // width: '75%',
    flex: 1,
  },
});
