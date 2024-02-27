import { useState } from 'react';
import searchImages from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const imagesList = await searchImages(term);
        setImages(imagesList);
    };

    return (
    <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images}/>
    </div>
    );
}

export default App;