import axios from 'axios';

const KEY = 'AIzaSyAkmODK-nDX1XWOxD3VT6vWZ1oSALZA6hI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});