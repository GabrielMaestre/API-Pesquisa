const axios = require('axios');

// URL
// https://jsonplaceholder.typicode.com/todos

//export this file
module.exports = { 
    getData: async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            return response.data;
        }
        catch (err) {
            console.log(err);
        }
    }
}