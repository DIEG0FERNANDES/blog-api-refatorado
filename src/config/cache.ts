import {createClient} from 'redis';

export const redisClient = createClient();
redisClient.on('error', (err) => console.error(err));
redisClient.connect().then(() => {
    console.log('Connected to Redis')
    redisClient.flushAll().then(() => console.log('Redis cache clean'));
});