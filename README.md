Apica Full stack Engineer Assignment

GOALS
1. Develop a LRU cache with GET / SET / DELETE API.
2. Build a React application that consumes the LRU cache API’s.
REQUIREMENTS:
1. Develop a LRU Cache
The cache will store Key / Value with expiration. If the expiration for key is set to 5 seconds, then that key should be
evicted automatically from the cache after 5 seconds.
Must Haves:
• Backend should be built on Golang (I have used Nodejs as I am proficient in NodeJS)
• The GET / SET / DELETE method in cache should be exposed as API endpoints.
• Cache should be concurrent in nature.
• Use ADT data structures wherever possible.

2. Develop a React Application
• That consumes Get API to get the key from cache.
• That consumes Set API to add new key/value pairs with customizable expiration times.

----------------------

The client is to handle the UI component, the api calls and the store

The server handles the logic and the lru cache and sends back the response

The server is running at port 3000
client will have a proxy of the server's port and in that way we can estabilish the connection

-- To start server

cd server
npm i
npm start

-- To Start client

cd client
npm i
npm start

