import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    console.log('form:', form);
    const search = form.elements.search.value;
    console.log('ми шукаємо', search);
    if (search.trim() === '') {
      toast.error('Необхідно ввести текст для пошуку зображень!', {
        duration: 4000,
        position: 'top-center',
      });
      return;
    }
    onSearch(search);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
