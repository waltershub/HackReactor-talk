import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import pixabaySearch from '../api/pixabaySearch';
const SearchScreen = () => {
  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    const images = await pixabaySearch();
    console.log('images', images);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default SearchScreen;
