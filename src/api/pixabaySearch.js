import pixabayApiKey from '../../config/config';

const pixabaySearch = async (page = 1, perPage = 10, query = 'flowers') => {
  console.log('getting images', page, query);
  try {
    const pixabayResponse = await fetch(
      `https://pixabay.com/api/?key=${pixabayApiKey}&q=${query}&image_type=photo&page=${page}&per_page=${perPage}`,
    );
    const pixavayResponseJson = await pixabayResponse.json();
    return pixavayResponseJson.hits;
  } catch (error) {
    console.log('errro', error);
    return [];
  }
};

export default pixabaySearch;
