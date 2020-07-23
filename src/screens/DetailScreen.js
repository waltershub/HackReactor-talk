import * as React from 'react';
import {Image, View} from 'react-native';

const DetailScreen = ({navigation, route}) => {
  const {largeImageURL} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={{uri: largeImageURL}}
        style={{width: '90%', height: '100%'}}
      />
    </View>
  );
};

export default DetailScreen;
