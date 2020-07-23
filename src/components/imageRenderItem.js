import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const ImageRenderItem = ({item}) => {
  const navigation = useNavigation();
  const {largeImageURL} = item;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', {largeImageURL})}
      style={styles.renderItemContainer}>
      <View
        style={{
          height: '100%',
          width: '50%',
          justifyContent: 'space-between',
        }}>
        <Image
          source={{uri: item.previewURL}}
          style={{width: '100%', height: '70%'}}
        />
        <User user={item.user} userImageURL={item.userImageURL} />
      </View>
      <MetaData {...item} />
    </TouchableOpacity>
  );
};

const MetaData = ({likes, views, downloads, tags}) => {
  return (
    <View>
      <Text>{`likes: ${likes}`}</Text>
      <Text>{`views: ${views}`}</Text>
      <Text>{`downloads: ${downloads}`}</Text>
      <Text style={{width: 150}}>{`tags: ${tags}`}</Text>
    </View>
  );
};
const User = ({user, userImageURL}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <Image
      source={{
        uri: userImageURL
          ? userImageURL
          : 'https://source.unsplash.com/user/erondu',
      }}
      style={{
        width: scale(40),
        height: scale(40),
        borderRadius: scale(20),
        marginRight: verticalScale(10),
      }}
    />
    <Text>{user}</Text>
  </View>
);

export default ImageRenderItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  searchInput: {
    width: scale(300),
    height: verticalScale(40),
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: verticalScale(10),
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
  },
  searchButton: {
    backgroundColor: 'blue',
    width: scale(100),
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
    marginBottom: verticalScale(10),
  },
  searchButtonText: {
    color: '#FFF',
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  renderItemContainer: {
    width: '100%',
    height: verticalScale(200),
    marginVertical: scale(10),
    padding: scale(10),
    borderTopWidth: verticalScale(0.5),
    borderBottomWidth: verticalScale(0.5),
    borderColor: '#a7a7a7',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
