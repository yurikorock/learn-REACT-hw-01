import './App.css';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import { fetchImagesByQuery } from '../helpers/unsplashApi.js';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = (newSearch) => {
    setQuery(newSearch);
    setImages([]);
  };
  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      try {
        const data = await fetchImagesByQuery(query);
        console.log('images', data);
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, [query]);

  return (
    <>
      <h1>ImageByBox</h1>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      <ImageGallery images={images} />
    </>
  );
}

export default App;
