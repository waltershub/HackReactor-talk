import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import pixabaySearch from '../api/pixabaySearch';
const SearchScreen = () => {
  useEffect(() => {
    handleSearch();
  }, []);

  const [query, setquery] = useState('');
  const [page, setPageNumber] = useState(1);

  const handleSearch = async () => {
    const images = await pixabaySearch();
    console.log('images', images);
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default SearchScreen;
