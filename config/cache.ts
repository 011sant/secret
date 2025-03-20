import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
});

export const cacheData = async (key: string, data: any, ttl = 3600) => {
  await redis.set(key, JSON.stringify(data), { ex: ttl });
};

export const getCachedData = async (key: string) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data as string) : null;
};

export const cacheMethods = {
  invalidateCache: async (pattern: string) => {
    const keys = await redis.keys(pattern);
    if (keys.length) {
      await redis.del(...keys);
    }
  },
  
  cacheWithTTL: async (key: string, data: any, ttl: number) => {
    await cacheData(key, {
      data,
      timestamp: Date.now()
    }, ttl);
  },
  
  getWithTimestamp: async (key: string) => {
    const cached = await getCachedData(key);
    if (!cached) return null;
    return {
      data: cached.data,
      age: Date.now() - cached.timestamp
    };
  }
};

export { redis };

export default redis;
