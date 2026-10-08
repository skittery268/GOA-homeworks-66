import { STORAGE_KEYS } from "./keys";

export const getProductKey = (productId: number | string): string => `${STORAGE_KEYS.PRODUCT_KEY}:${productId}`;
export const getUserKey = (userId: number): string => `${STORAGE_KEYS.USER_KEY}:${userId}`;
export const getCacheKey = (cacheId: number): string => `${STORAGE_KEYS.CACHE_KEY}:${cacheId}`;

