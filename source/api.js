import fetch from 'isomorphic-fetch';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const api ={
    post:{ 
        async getList(page = 1){
            const response = await fetch(`${baseUrl}/posts?_page?=${page}`);
            const data     = await response.json();
            return data;
        },
        async getSingle(id = i){
            const response = await fetch(`${baseUrl}/posts/${id}`);
            const data     = await response.json();
            return data;
        },
        async getComments(id = i){
            const response = await fetch(`${baseUrl}/posts/${id}/comments`);
            const data     = await response.json();
            return data;
        }, 
    },
    users: {
        async getSingle(id = i){
            const response = await fetch(`${baseUrl}/users/${id}`);
            const data     = await response.json();
            return data;
        },  
    },
};
export default api; 