import React, {Fragment, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import pixabaySearch from '../api/pixabaySearch';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [page, setPageNumber] = useState(1);
  const [images, setImages] = useState([]);
  const handleSearch = async () => {
    if (images.length) {
      setImages([]);
    }
    setPageNumber(1);
    getImages();
  };

  const getImages = async () => {
    const searchImages = await pixabaySearch(page, 10, query);
    console.log('serach images', searchImages);
    setPageNumber(page + 1);
    setImages(images.concat(searchImages));
  };

  return (
    <View style={styles.container}>
      <SearchSection
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />
      <Text>{JSON.stringify(images)}</Text>
    </View>
  );
};

const SearchSection = ({handleSearch, setQuery, query}) => (
  <Fragment>
    <TextInput
      style={styles.searchInput}
      onChangeText={(text) => setQuery(text)}
      value={query}
    />
    <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
      <Text style={styles.searchButtonText}>search</Text>
    </TouchableOpacity>
  </Fragment>
);

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
  },
  searchButtonText: {
    color: '#FFF',
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
});
export default SearchScreen;
