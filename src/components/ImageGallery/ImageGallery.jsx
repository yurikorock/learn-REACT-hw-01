import ImageCard from './ImageCard/ImageCard.jsx';

export default function ImageGallery({ images }) {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image}/>
        </li>
      ))}
    </ul>
  );
}
