import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID S7HA5zpFZBKXOi-xOvi65pgoZLedTxQy1ZUzgTxXQIY'
    }
})