import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "./keys";
import { Product } from "../App";

export const getProductKey = (productId: number | string): string => `${STORAGE_KEYS.PRODUCT_KEY}:${productId}`;
export const getUserKey = (userId: number): string => `${STORAGE_KEYS.USER_KEY}:${userId}`;
export const getCacheKey = (cacheId: number): string => `${STORAGE_KEYS.CACHE_KEY}:${cacheId}`;

export const createCache = async (key: string, data: any, expires = 15) => {
    const cachedEntry = {
        data,
        expires: Date.now() + (expires * 60 * 1000)
    };

    await AsyncStorage.setItem(`@cache:${key}`, JSON.stringify(cachedEntry));
};

export const getCache = async (key: string) => {
    const cached = await AsyncStorage.getItem(key) as string;

    const entry = JSON.parse(cached);

    if (entry.expires > Date.now()) {
        await AsyncStorage.removeItem(key);

        return null;
    };

    return entry.data;
};