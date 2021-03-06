import React, {Fragment, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import pixabaySearch from '../api/pixabaySearch';
import ImageRenderItem from '../components/imageRenderItem';

const ImagesFlatlist = ({images, loadImages, handleTagPress}) => {
  return (
    <FlatList
      data={images}
      renderItem={({item}) => (
        <ImageRenderItem handleTagPress={handleTagPress} item={item} />
      )}
      keyExtractor={(item) => item.id.toString()}
      style={{width: '100%'}}
      onEndReached={loadImages}
      onEndReachedThreshold={0.8}
    />
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

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [page, setPageNumber] = useState(1);
  const [images, setImages] = useState([]);
  const handleSearch = async () => {
    setImages([]);
    setPageNumber(1);
    getImages([], 1);
  };

  const getImages = async (
    prevousImages = images,
    pageNumber = page,
    searchQuery = query,
  ) => {
    const searchImages = await pixabaySearch(pageNumber, 10, searchQuery);
    console.log('serach images', searchImages);
    setPageNumber(pageNumber + 1);
    console.log('prevouseImages', prevousImages);
    setImages(prevousImages.concat(searchImages));
  };

  const handleTagPress = (tag) => {
    getImages([], 1, tag);
  };

  return (
    <View style={styles.container}>
      <SearchSection
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />
      <ImagesFlatlist
        loadImages={() => getImages(images, page)}
        images={images}
        handleTagPress={handleTagPress}
      />
    </View>
  );
};

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
export default SearchScreen;
