import './App.css';
// import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

// import { fetchImagesByQuery } from '../helpers/unsplashApi.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import Loader from '../Loader/Loader.jsx';
import Balance from '../Balance/Balance.jsx';
import LangSwitcher from '../Balance/LangSwitcher.jsx';
import { useSelector } from 'react-redux';


export default function App(){
  const lang = useSelector(state => state.locale.lang)
  return(
    <>
      <h1>State managment with Redux</h1>
      <Balance/>
      <hr/>
      <LangSwitcher/>
      <p>Current lang : {lang}</p>
    </>
  )
}
// function App() {
//   const [query, setQuery] = useState('');
//   const [images, setImages] = useState([]);

//   const handleSearch = (newSearch) => {
//     setQuery(newSearch);
//     setImages([]);
//   };
//   useEffect(() => {
//     if (!query) return;
//     const fetchImages = async () => {
//       try {
//         const data = await fetchImagesByQuery(query);
//         console.log('images', data);
//         setImages((prevImages) => [...prevImages, ...data]);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchImages();
//   }, [query]);

//   return (
//     <>
//       <h1>ImageByBox</h1>
//       <SearchBar onSearch={handleSearch} />
//       <Toaster />
//       <ImageGallery images={images} />
//       <Loader/>
//     </>
//   );
// }

// export default App;
