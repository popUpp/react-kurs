import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 9Wz_k6pXByzdg50zpHHVRcp95kxH9Y7L9mKALvrUuW8'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;